import { Injectable } from '@angular/core';
import { assignModel } from '../models/assign.model';

@Injectable({
  providedIn: 'root'
})

export class assignService {
  public assign :assignModel[] = [
  {
    assingId: 1,
    taskId: 0,
    userId: 0,
    fechaCreacion: '23/04/2012'

  },
  {
    assingId: 2,
    taskId: 0,
    userId: 0,
    fechaCreacion: '23/04/2012'
  },
  {
    assingId: 3,
    taskId: 0,
    userId: 0,
    fechaCreacion: '23/04/2012'
  },
  {
    assingId: 4,
    taskId: 0,
    userId: 0,
    fechaCreacion: '23/04/2012'

  }
  ]

  id:number = this.assign.length + 1;

  constructor() { }



  public getAssignById(id: number): assignModel{
    return this.assign[id];
  }

  deleteAssignById(id: number){
    this.assign = this.assign.filter(p=>p.assingId != id); 
  }

  updatePerson(assignUpdate:assignModel){
    var assignData = this.assign.find(p=>p.assingId==assignUpdate.assingId);
    //console.log(userdata) me lo lee
    if(assignData){
      assignData.fechaCreacion = assignUpdate.fechaCreacion;
    }
    
  }
}