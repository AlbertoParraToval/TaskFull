import { Component, OnInit } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-person-selectable',
  templateUrl: './person-selectable.component.html',
  styleUrls: ['./person-selectable.component.scss'],
})
export class PersonSelectableComponent implements OnInit {

  selectedPerson:User=null;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(
    private peopleSvc:PeopleService
  ) { }


  writeValue(obj: any): void {
    this.selectedPerson = this.peopleSvc.getUserById(obj);
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit() {}

  getPeople(){
    return this.peopleSvc.getUser();
  } 

  onPersonClicked(person:User, accordion:IonAccordionGroup){
    this.selectedPerson = person;
    accordion.value='';
    this.propagateChange(this.selectedPerson.id);
  }
}
