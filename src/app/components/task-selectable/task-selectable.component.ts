import { Component, OnInit } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';
import { taskModel } from 'src/app/models/taskModel.model';
import { tasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-selectable',
  templateUrl: './task-selectable.component.html',
  styleUrls: ['./task-selectable.component.scss'],
})
export class TaskSelectableComponent implements OnInit {

  selectedTask:taskModel=null;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(
    private taskSvc:tasksService
  ) { }

  writeValue(obj: any): void {
    this.selectedTask = this.taskSvc.getTaskById(obj);
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit() {}

  getPeople(){
    return this.taskSvc.getTask();
  } 

  onTaskClicked(task:taskModel, accordion:IonAccordionGroup){
    this.selectedTask = task;
    accordion.value='';
    this.propagateChange(this.selectedTask.id);
  }

}