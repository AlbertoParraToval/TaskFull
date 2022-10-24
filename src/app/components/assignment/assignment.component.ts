import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {assignmentService } from 'src/app/services/assignment.service';
import { PeopleService } from 'src/app/services/people.service';
import { tasksService } from 'src/app/services/tasks.service';
import { isLowResolution as lowres} from 'src/app/utils/screen.utils';
import { User } from 'src/app/models/user.model';
import { assignModel } from 'src/app/models/assign.model';
import { IonItemSliding } from '@ionic/angular';
import { taskModel } from 'src/app/models/taskModel.model';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.scss'],
})
export class AssignmentComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() assignment:assignModel;
  //isLowResolution = lowres;

  constructor(
    private peopleSvc:PeopleService,
    private tasksSvc:tasksService,
    private assignSvc:assignmentService
  ){

  }

  ngOnInit(
  ) {

  }

  getTask():taskModel{
    var idTask = this.assignment.id;
    if(idTask)
      return this.tasksSvc.getTaskById(idTask);
    return undefined;
  }

  getPerson():User{
    var idPerson = this.assignment.id;
    if(idPerson)
      return this.peopleSvc.getUserById(idPerson);
    return undefined;
  }

  onEditClick(){
    this.onEdit.emit(this.assignment);
  }

  onDeleteClick(){
    this.onDelete.emit(this.assignment);
  }
}
