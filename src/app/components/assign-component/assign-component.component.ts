import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { assignModel } from 'src/app/models/assign.model';
import { assignService } from 'src/app/services/assign.service';

@Component({
  selector: 'app-assign-component',
  templateUrl: './assign-component.component.html',
  styleUrls: ['./assign-component.component.scss'],
})
export class AssignComponentComponent implements OnInit {

  @Input()  assignData: assignModel;
  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  constructor(private assignSvc: assignService) {}

  ngOnInit() {}

  onEditClick() {
    //console.log(this.taskdata)
    this.onEdit.emit(this.assignData);
  }

  onDeleteClick() {
    //console.log(this.userdata) me pilla el userdata
    this.onDelete.emit(this.assignData);
  }
}
