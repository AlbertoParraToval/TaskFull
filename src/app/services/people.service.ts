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
    image:'',
    description:"El chico mas trabajador de Mayoral"
  },
  {
    id:1,
    name:'Alberto',
    nickname:'Parra',
    image:'',
    description:"El chico mas trabajador de Properly"
  },
  {
    id:2,
    name:'Diego',
    nickname:'Aguilera',
    image:'',
    description:"El chico que es mozo de almacén"
  },
  {
    id:3,
    name:'Alvaro',
    nickname:'Alvaroski',
    image:'',
    description:" El chico que es toxico en el lol"
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