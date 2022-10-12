import { Component, Input, OnInit } from '@angular/core';
import { People } from '../../models/person.model'
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {

  @Input() datos: People;
  constructor() { }


  ngOnInit() {}

}
