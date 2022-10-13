import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/person.model';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  people: User;
  constructor(private user: PeopleService) { }

  ngOnInit() {
  }

  refresh(ev: { detail: { complete: () => void; }; }) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getUser(): User[]{
    return this.user.getUser();
  }
}
