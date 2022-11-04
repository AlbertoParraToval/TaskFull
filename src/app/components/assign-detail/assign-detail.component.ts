import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { assignModel } from 'src/app/models/assign.model';
import { PeopleService } from 'src/app/services/people.service';
import { tasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-assign-detail',
  templateUrl: './assign-detail.component.html',
  styleUrls: ['./assign-detail.component.scss'],
})
export class AssignDetailComponent implements OnInit {
  form:FormGroup;
  mode: "New" | "Edit" = "New";

  @Input('assignInfo') set assignInfo(assigndata:assignModel){
    if(assigndata){
      this.form.controls.id.setValue(assigndata.id);
      this.form.controls.userId.setValue(assigndata.userId);
      this.form.controls.taskId.setValue(assigndata.taskId);
      this.form.controls.dateTime.setValue(assigndata.dateTime);
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