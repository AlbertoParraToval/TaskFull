import { Injectable } from '@angular/core';
import { taskModel } from '../models/taskModel.model';

@Injectable({
  providedIn: 'root'
})

export class tasksService {
  public tasksInfo: taskModel[] = [
  {
    id:0,
    name: 'Neolibe',
    description: 'Creación de un proyecto de empresa para Fol.',
    difficulty: 'Media',
    timeInSeconds:'600000 s'
  },
  {
    id:1,
    name: 'Renfe',
    description: 'Maquinista de un tren de la compañia renfe',
    difficulty: 'Principiante',
    timeInSeconds:'600000 s'
  },
  {
    id:2,
    name: 'TaskFull',
    description: 'Aplicación de la asignatura de ADD y HLC.',
    difficulty: 'Avanzado',
    timeInSeconds:'600000 s'
  },
  {
    id:3,
    name: 'Tarea Optativa de final de curso',
    description: 'En esta tarea la vamos a ir desarrollando en el tercer trimeste...',
    difficulty: 'Extrema',
    timeInSeconds:'600000 s'
  }

  ]

  id:number = this.tasksInfo.length + 1;

  constructor() { }


  public getTask(): taskModel[] {
    return this.tasksInfo;
  }

  public getTaskById(id: number): taskModel{
    return this.tasksInfo[id];
  }

  deleteTaskById(id: number){
    this.tasksInfo = this.tasksInfo.filter(p=>p.id != id); 
  }

  addTask(taskdata:taskModel){
    //console.log(userdata)
    taskdata.id = this.id++
    this.tasksInfo.push(taskdata);
  }

  updateTask(taskUpdate:taskModel){
    var taskdata= this.tasksInfo.find(p=>p.id==taskUpdate.id);
    //console.log(userdata) me lo lee
    if(taskUpdate){
      taskdata.name = taskUpdate.name;
      taskdata.description = taskUpdate.description;
      taskdata.difficulty = taskUpdate.difficulty;
      taskdata.timeInSeconds = taskUpdate.timeInSeconds
    }
    
  }
}