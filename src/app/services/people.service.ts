import { Injectable } from '@angular/core';
import { People} from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

person:People[] = [
  {
    id: 0,
    nombre: 'Federico García',
    apodo:  'Ejecutivo',
    foto: '',
    descripcion:'Trabajador de la Empresa Accenture en España.'
  },
  {
    id: 1,
    nombre: 'Francisco Javier',
    apodo:  'Marketing',
    foto: '',
    descripcion:'Apasionado del mundo del marketing y de la bolsa global.'
  },
  {
    id: 2,
    nombre: 'Pablo Gonzalez',
    apodo:  'Profesor',
    foto: '',
    descripcion:'Profesorado de primaria con grandes capacidades de adaptación.'
  },
  {
    id: 3,
    nombre: 'Alba Maria',
    apodo:  'Astronauta',
    foto: '',
    descripcion:'Una de las mujeres más inteligente de nuestro país.'
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
