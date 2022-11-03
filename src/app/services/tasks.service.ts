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
    difficulty: 'Intermedio',
    timeInSeconds:'600000 s',
    image:"https://drive.google.com/uc?export=view&id=15q5tFeQeF9D1EVB_tfOM7JsFPACNn5Wy"
  },
  {
    id:1,
    name: 'Renfe',
    description: 'Maquinista de un tren de la compañia renfe',
    difficulty: 'Principiante',
    timeInSeconds:'600000 s',
    image:"https://drive.google.com/uc?export=view&id=1753TVT8n-MGC4NyRBengw6JXa3ssjGHs"
  },
  {
    id:2,
    name: 'TaskFull',
    description: 'Aplicación de la asignatura de ADD y HLC.',
    difficulty: 'Avanzado',
    timeInSeconds:'600000 s',
    image:"https://drive.google.com/uc?export=view&id=18yHE0K50gA2jAlVpvMkwaXMOUAm5nc0f"
  },
  {
    id:3,
    name: 'Tarea Optativa de final de curso',
    description: 'En esta tarea la vamos a ir desarrollando en el tercer trimeste...',
    difficulty: 'Avanzado',
    timeInSeconds:'600000 s',
    image:"https://drive.google.com/uc?export=view&id=1ktzouQQvyHySkGGv7C2kaNu0sHPW4eh5"
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