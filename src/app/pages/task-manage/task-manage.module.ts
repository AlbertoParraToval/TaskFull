import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskManagePageRoutingModule } from './task-manage-routing.module';

import { TaskManagePage } from './task-manage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskManagePageRoutingModule
  ],
  declarations: [TaskManagePage, ]
})
export class TaskManagePageModule {}
