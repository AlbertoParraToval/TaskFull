import { Component, OnInit } from '@angular/core';
import {  PersonService } from 'src/app/services/people.service';
@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {
  public dataPerson:PersonService;
  constructor(
    //Instancio esta variable la cual contendra los datos de la persona.
  ) { }

  ngOnInit() {
  }
  
  getPeople(){ //Creo el metodo para devolver personas
    return this.dataPerson.getPersons(); //Llamo al metodo de la clase DataPersonService y lo devuelvo
  }
}
