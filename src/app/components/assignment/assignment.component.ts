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

  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Input() assign: assignModel;
  constructor(
    private peopleSvc: PeopleService,
    private tasksSvc: tasksService,
    private assignmentsSvc: assignmentService
  ) {}

  ngOnInit() {}

  // METHODS
  getTask():taskModel{
    var taskId = this.assign.id;
    if(taskId)
      return this.tasksSvc.getTaskById(taskId);
    return undefined;
  }

  getUser():User{
    var userId = this.assign.id;
    if(userId)
      return this.peopleSvc.getUserById(userId);
  }

  onEditClick(){
    this.onEdit.emit(this.assign);
  }

  onDeleteClick(){
    this.onDelete.emit(this.assign);
  }
}