import * as moment from 'moment-timezone';
import { Injectable } from '@angular/core';
import { assignModel } from '../models/assign.model';

@Injectable({
  providedIn: 'root'
})

export class assignmentService {
  momentjs:any = moment;
  public assign_ : assignModel[] = [
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
  },
  {
    id:4,
    userId:4,
    taskId:4,
    createdAt:this.momentjs().toISOString(),
    dateTime:this.momentjs().add(1, 'days').toISOString(),
  }
  ]
  id:number = this.assign_.length+1;

  constructor() {

  }

  getAssignments(){
    return this.assign_;
  }

  getAssignmentById(id:number){
    return this.assign_.find(a=>a.id==id);
  }

  getAssignmentsByTaskId(taskId:number): assignModel[]{
    return this.assign_.filter(a=>a.taskId == taskId);
  }

  getAssignmentsByPersonId(userId:number):assignModel[]{
    return this.assign_.filter(a=>a.id == userId);
  }

  deleteAssignmentById(id:number){
    this.assign_ = this.assign_.filter(a=>a.id != id); 
  }

  addAssignment(assingment:assignModel){
    assingment.id = this.id++;
    this.assign_.push(assingment);
  }

  updateAssignment(assignment:assignModel){
    var assignment = this.assign_.find(a=>a.id==assignment.id);
    if(assignment){
      assignment.taskId = assignment.taskId;
      assignment.userId = assignment.userId;
      assignment.createdAt = assignment.createdAt;
      assignment.dateTime = assignment.dateTime;
    }
    
  }
}