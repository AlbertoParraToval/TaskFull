import { Component, OnInit } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-user-selectable',
  templateUrl: './user-selectable.component.html',
  styleUrls: ['./user-selectable.component.scss'],
})
export class UserSelectableComponent implements OnInit {
  selectedUser:User=null;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(
    private UserSVC:PeopleService
  ) { }


  writeValue(obj: any): void {
    console.log(this.UserSVC.getUserById(obj).image);
    this.selectedUser = this.UserSVC.getUserById(obj);
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
    return this.UserSVC.getUser();
  } 

  onUserClicked(user:User, accordion:IonAccordionGroup){
    console.log(user);
    this.selectedUser = user;
    accordion.value='';
    this.propagateChange(this.selectedUser.id);
  }

}
