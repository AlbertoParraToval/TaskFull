import { Injectable } from '@angular/core';
import { People} from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

public person:People[] = [
  {
    id: 0,
    nombre: 'Federico García',
    apodo:  'Ejecutivo',
    descripcion:'Trabajador de la Empresa Accenture en España.',
    foto:''
  },
  {
    id: 1,
    nombre: 'Francisco Javier',
    apodo:  'Marketing',
    descripcion:'Apasionado del mundo del marketing y de la bolsa global.',
    foto:''
  },
  {
    id: 2,
    nombre: 'Pablo Gonzalez',
    apodo:  'Profesor',
    descripcion:'Profesorado de primaria con grandes capacidades de adaptación.',
    foto:''
  },
  {
    id: 3,
    nombre: 'Alba Maria',
    apodo:  'Astronauta',
    descripcion:'Una de las mujeres más inteligente de nuestro país.',
    foto:''
  }
]
constructor() { }

public getPersons(): People[]{ //devuelve el objeto persona del array
  return this.person;
}

public getPersonsById(id:number): People{
  return this.person[id];
}
}
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { 
    
  }
}
