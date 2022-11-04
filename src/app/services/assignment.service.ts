import * as moment from 'moment-timezone';
import { Injectable } from '@angular/core';
import { assignModel } from '../models/assign.model';

@Injectable({
  providedIn: 'root'
})

export class assignmentService {
  momentjs:any = moment;
  public assignInfo : assignModel[] = [
  {
    id:1,
    userId:1,
    taskId:1,
    createdAt:this.momentjs().toISOString(),
    dateTime:this.momentjs().add(1, 'days').toISOString(),

  },
  {
    id:2,
    userId:2,
    taskId:2,
    createdAt:this.momentjs().toISOString(),
    dateTime:this.momentjs().add(1, 'days').toISOString(),
  },
  {
    id:3,
    userId:3,
    taskId:3,
    createdAt:this.momentjs().toISOString(),
    dateTime:this.momentjs().add(1, 'days').toISOString(),
  }
  ]
  
  id:number = this.assignInfo.length + 1;

  constructor() {

  }

  getAssignments(){
    return this.assignInfo;
  }

  getAssignmentById(id:number){
    return this.assignInfo.find(a=>a.id==id);
  }

  getAssignmentsByTaskId(id:number): assignModel[]{
    return this.assignInfo.filter(a=>a.taskId == id);
  }

  getAssignmentsByPersonId(id:number):assignModel[]{
    return this.assignInfo.filter(a=>a.userId == id);
  }

  deleteAssignmentById(id:number){
    this.assignInfo = this.assignInfo.filter(a=>a.id != id); 
  }

  addAssignment(assingment:assignModel){
    assingment.id = this.id++;
    this.assignInfo.push(assingment);
  }

  updateAssignment(assignmentUpdate:assignModel){
    var assignment = this.assignInfo.find(a=>a.id==assignmentUpdate.id);
    if(assignmentUpdate){
      assignment.taskId = assignmentUpdate.taskId;
      assignment.userId = assignmentUpdate.userId;
      assignment.createdAt = assignmentUpdate.createdAt;
      assignment.dateTime = assignmentUpdate.dateTime;
    }
  }
}