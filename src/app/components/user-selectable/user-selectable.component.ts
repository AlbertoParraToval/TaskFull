import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-user-selectable',
  templateUrl: './user-selectable.component.html',
  styleUrls: ['./user-selectable.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UserSelectableComponent),
      multi: true
    }
  ]
})
export class UserSelectableComponent implements OnInit, ControlValueAccessor{

  selectedUser:User=null;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(
    private UserSVC:PeopleService
  ) { }

  writeValue(obj: any): void {
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
    this.selectedUser = user;
    accordion.value='';
    this.propagateChange(this.selectedUser.id);
  }

}
