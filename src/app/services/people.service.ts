import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  public people: User[] = [
  {
    id:0,
    name:'Diego Rodri',
    nickname:'Rodri',
    description:"El chico mas trabajador de Mayoral",
    image:""
  },
  {
    id:1,
    name:'Alberto Parra',
    nickname:'Parringson',
    description:"El chico mas trabajador de Properly",
    image:""
  },
  {
    id:2,
    name:'Diego Aguilera',
    nickname:'DevAgui',
    description:"El chico que es mozo de almacén",
    image:""
  },
  {
    id:3,
    name:'Alvaro Lineros',
    nickname:'Alvaroski',
    description:" El chico que es toxico en el lol",
    image:""
  }

  ]

  id:number = this.people.length + 1;

  constructor() { }


  public getUser(): User[] {
    return this.people;
  }

  public getUserById(id: number): User{
    return this.people[id];
  }

  public getUserImg(id: number): User{
    return this.people[id];
  }

  deleteUserById(id: number){
    this.people = this.people.filter(p=>p.id != id); 
  }

  addPerson(userdata:User){
    //console.log(userdata)
    userdata.id = this.id++
    this.people.push(userdata);
  }

  updatePerson(userUpdate:User){
    var userdata = this.people.find(p=>p.id==userUpdate.id);
    //console.log(userdata) me lo lee
    if(userUpdate){
      userdata.name = userUpdate.name;
      userdata.nickname = userUpdate.nickname;
      userdata.description = userUpdate.description;
    }
    
  }
}