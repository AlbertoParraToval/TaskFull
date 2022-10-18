import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { taskModel } from 'src/app/models/taskModel.model';
import { tasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.scss'],
})
export class TaskComponentComponent implements OnInit {

  @Input() taskdata: taskModel;
  @Output() onDelete = new EventEmitter;
  @Output() onEdit = new EventEmitter;

  constructor(
    private peopleSvc:tasksService
  ) { }

  ngOnInit() {}


    onEditClick() {
      //console.log(this.taskdata)
      this.onEdit.emit(this.taskdata);
    }


    onDeleteClick() {
      //console.log(this.userdata) me pilla el userdata
      this.onDelete.emit(this.taskdata);
      }
}
