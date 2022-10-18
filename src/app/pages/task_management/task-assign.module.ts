import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskAssignPageRoutingModule } from './task-assign-routing.module';

import { TaskAssignPage } from './task-assign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskAssignPageRoutingModule
  ],
  declarations: [TaskAssignPage]
})
export class TaskAssignPageModule {}
