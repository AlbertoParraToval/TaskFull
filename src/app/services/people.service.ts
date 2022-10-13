import { Injectable } from '@angular/core';
import { User } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  public people: User[] = [
  {
    id:0,
    name:'Diego',
    nickname:'Rodri',
    image:''
  },
  {
    id:1,
    name:'Alberto',
    nickname:'Parra',
    image:''
  },
  {
    id:2,
    name:'Gabriela',
    nickname:'Gaby',
    image:''
  },
  {
    id:3,
    name:'Alvaro',
    nickname:'Alvaroski',
    image:''
  }

  ]
  constructor() { }
  public getUser(): User[] {
    return this.people;
  }

  public getUserById(id: number): User{
    return this.people[id];
  }
}