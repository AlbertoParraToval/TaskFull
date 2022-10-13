import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {  PersonPageRoutingModule } from './people-routing.module';

import { PeoplePage } from './people.page';
import { UserComponent } from '../../components/user/user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonPageRoutingModule
  ],
  declarations: [PeoplePage, UserComponent]
})
export class PeoplePageModule {}
