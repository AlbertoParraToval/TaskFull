import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { PeopleService } from 'src/app/services/people.service';
import { UserFormComponent } from '../../../app/components/user-form/user-form.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  people: User;
  form:FormGroup;
  constructor(

    private peopleSvc: PeopleService,
    private modal: ModalController,
    private alert: AlertController
  ) {}

  ngOnInit() {}

  getUser(): User[] {
    return this.peopleSvc.getUser();
  }

  async presentPersonForm(userdata: User) {
    //console.log(userdata) me lo lee
    const modal = await this.modal.create({
      component: UserFormComponent,
      componentProps: {
        person: userdata,
        
      },
    });
    modal.present();
    modal.onDidDismiss().then((result) => {
      if (result && result.data) {
        switch (result.data.mode) {
          case 'New':
            console.log("Patata")
            this.peopleSvc.addPerson(result.data.userdata);
            break;
          case 'Edit':
            this.peopleSvc.updatePerson(result.data.userdata);
            break;
          default:
        }
      }
    });
  }

  onNewPerson() {
    this.presentPersonForm(null);
  }

  onEditPerson(userdata) {
    //console.log(userdata) me lo lee
    this.presentPersonForm(userdata);
  }

  async onDeleteAlert(person) {
    const alert = await this.alert.create({
      header: '¿Está seguro de que desear borrar a la persona?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Operacion cancelada');
          },
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler: () => {
            this.peopleSvc.deleteUserById(person.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onDeletePerson(userdata) {
    console.log(userdata)
    this.onDeleteAlert(userdata);
  }
}
