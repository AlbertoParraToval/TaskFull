import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { taskModel } from 'src/app/models/taskModel.model';
import { tasksService } from 'src/app/services/tasks.service';


export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TaskSelectableComponent),
  multi: true
};


@Component({
  selector: 'app-task-selectable',
  templateUrl: './task-selectable.component.html',
  styleUrls: ['./task-selectable.component.scss'],
  providers:[USER_PROFILE_VALUE_ACCESSOR]
})
export class TaskSelectableComponent implements OnInit, ControlValueAccessor {

  selectedTask:taskModel=null;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(
    private TaskSVC:tasksService
  ) { }


  writeValue(obj: any): void {
    console.log(this.TaskSVC.getTaskById(obj).image);
    this.selectedTask = this.TaskSVC.getTaskById(obj);
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

  getTasks(){
    return this.TaskSVC.getTask();
  } 

  onTaskClicked(task:taskModel, accordion:IonAccordionGroup){
    console.log(task);
    this.selectedTask = task;
    accordion.value='';
    this.propagateChange(this.selectedTask.id);
  }

}