import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskManagePage } from './task-manage.page';

const routes: Routes = [
  {
    path: '',
    component: TaskManagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskManagePageRoutingModule {}
