import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { assignModel } from 'src/app/models/assign.model';
import { PeopleService } from 'src/app/services/people.service';
import { tasksService } from 'src/app/services/tasks.service';
import { assignmentService } from 'src/app/services/assignment.service';
@Component({
  selector: 'app-assign-detail',
  templateUrl: './assign-detail.component.html',
  styleUrls: ['./assign-detail.component.scss'],
})
export class AssignDetailComponent implements OnInit {
  constructor() { }

  ngOnInit() {}

}

