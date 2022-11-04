import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { assignModel } from 'src/app/models/assign.model';
import { PeopleService } from 'src/app/services/people.service';
import { tasksService } from 'src/app/services/tasks.service';
import { assignmentService } from 'src/app/services/assignment.service';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-assign-detail',
  templateUrl: './assign-detail.component.html',
  styleUrls: ['./assign-detail.component.scss'],
})
export class AssignDetailComponent implements OnInit {
  form:FormGroup;
  mode: "New" | "Edit" = "New";

  @Input('assign') set assign(assignInfo:assignModel){
    if(assignInfo){
      this.form.controls.id.setValue(assignInfo.id);
      this.form.controls.userId.setValue(assignInfo.userId);
      this.form.controls.taskId.setValue(assignInfo.taskId);
      this.form.controls.dateTime.setValue(assignInfo.dateTime);
      this.mode = "Edit";
    }

  }
  constructor(private formBuilder:FormBuilder,
              private userSVC:PeopleService,
              private taskSVC:tasksService,
              private modal:ModalController
    ) {
    this.form = this.formBuilder.group({ 
      id:[null],
      userId:[-1,Validators.min(1)],
      taskId:[-1,Validators.min(1)],
      dateTime:["",Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit(){
    console.log(this.form.value)
      this.modal.dismiss({assign: this.form.value, mode: this.mode}, 'ok')
  }

  onDismiss(result){
    this.modal.dismiss(null,'cancel'); 
  }

  getPeople(){
    return this.userSVC.getUser();
  }

  getTask(){
    return this.taskSVC.getTask();
  }

  onChange(event){
    this.form.controls.dateTime.setValue(event.detail.value);
  }

}