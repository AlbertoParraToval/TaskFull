import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],

})
export class UserComponent implements OnInit {


  @Input() userdata: User;
  @Output() onDelete = new EventEmitter;
  @Output() onEdit = new EventEmitter;

  constructor(
    private peopleSvc:PeopleService
  ) { }

  ngOnInit() {}


    onEditClick() {
      //console.log(this.userdata) me pilla el userdata
      this.onEdit.emit(this.userdata);
    }


    onDeleteClick() {
      //console.log(this.userdata) me pilla el userdata
      this.onDelete.emit(this.userdata);
      }
}