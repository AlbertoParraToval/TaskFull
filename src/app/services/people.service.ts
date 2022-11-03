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
    image:"https://drive.google.com/uc?export=view&id=1IHAixUa3BRIGSmI310pA_bCpmJaU-s2h"
  },
  {
    id:1,
    name:'Alberto Parra',
    nickname:'Parringson',
    description:"El chico mas trabajador de Properly",
    image:"https://drive.google.com/uc?export=view&id=1p_7irDllBxDp-PGoUWPnpEKudQNewZPL"
  },
  {
    id:2,
    name:'Óscar Ortega',
    nickname:'Osquinha',
    description:"El chico que es mozo de almacén",
    image:'https://drive.google.com/uc?export=view&id=1-sm2bufSk9nOvwtKeZhrsdmWd2xhAsoU'
  },
  {
    id:3,
    name:'Pablo Gonzalez',
    nickname:'Mafia',
    description:" El chico que es toxico en el lol",
    image:"https://drive.google.com/uc?export=view&id=1iE9LT-zpBR654Mswcj9zmRsVJG6Wu9xp"
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