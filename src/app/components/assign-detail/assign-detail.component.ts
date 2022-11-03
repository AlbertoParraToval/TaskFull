import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { assignModel } from 'src/app/models/assign.model';
import { PeopleService } from 'src/app/services/people.service';
import { tasksService } from 'src/app/services/tasks.service';
import { assignmentService } from 'src/app/services/assignment.service';
@Component({
  selector: 'app-assign-detail',
  templateUrl: './assign-detail.component.html',
  styleUrls: ['./assign-detail.component.scss'],
})
export class AssignDetailComponent implements OnInit {
  form:FormGroup;
  mode:"New" | "Edit" = "New";
  @Input('assignment') set assignment(assignment:assignModel){
    if(assignment){
      this.form.controls.id.setValue(assignment.id);
      this.form.controls.taskId.setValue(assignment.taskId);
      this.form.controls.userId.setValue(assignment.userId);
      this.form.controls.dateTime.setValue(assignment.dateTime);
      this.mode = "Edit";
    }
  }
  

  constructor(
    private tasksSvc:tasksService,
    private peopleSvc:PeopleService,
    private assignmentsSvc:assignmentService,
    private fb:FormBuilder,
    private modal:ModalController
  ) { 
    this.form = this.fb.group({
      id:[null],
      taskId:[-1, [Validators.min(0)]],
      personId:[-1, [Validators.min(0)]],
      dateTime:['', [Validators.required]],
    });
  }

  ngOnInit() {

  }

  onSubmit(){
    
    this.modal.dismiss({assignment: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

  onChangeDateTime(dateTime){
    this.form.controls.dateTime.setValue(dateTime);
  }

}
