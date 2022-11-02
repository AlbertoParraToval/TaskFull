import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AssignPageRoutingModule } from './assign-routing.module';
import { AssignPage } from './assign.page';
import { AssignDetailComponent } from 'src/app/components/assign-detail/assign-detail.component';
import { AssignmentComponent } from 'src/app/components/assignment/assignment.component';
import { PersonSelectableComponent } from 'src/app/components/person-selectable/person-selectable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignPageRoutingModule,
    ReactiveFormsModule,
    
  ],
  declarations: [AssignPage, AssignDetailComponent, AssignmentComponent,PersonSelectableComponent]
})
export class AssignPageModule {}
