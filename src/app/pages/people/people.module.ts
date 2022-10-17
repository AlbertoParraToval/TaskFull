import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PersonPageRoutingModule } from './people-routing.module';
import { PeoplePage } from './people.page';
import { UserComponent } from '../../components/user/user.component';
import { UserFormComponent } from 'src/app/components/user-form/user-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PeoplePage, UserComponent, UserFormComponent]
})
export class PeoplePageModule {}
