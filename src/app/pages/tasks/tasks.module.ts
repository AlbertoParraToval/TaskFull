import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TasksPageRoutingModule } from './tasks-routing.module';

import { TasksPage } from './tasks.page';
import { TaskFormComponent } from 'src/app/components/task-form/task-form.component';
import { TaskComponentComponent } from 'src/app/components/task-component/task-component.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksPageRoutingModule,    
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TasksPage,TaskFormComponent,TaskComponentComponent,]
})
export class TasksPageModule {}
