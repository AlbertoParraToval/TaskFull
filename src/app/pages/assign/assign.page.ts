import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AssignDetailComponent } from 'src/app/components/assign-detail/assign-detail.component';
import { assignmentService } from 'src/app/services/assignment.service';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.page.html',
  styleUrls: ['./assign.page.scss'],
})
export class AssignPage implements OnInit {

  constructor(
    private assignmentsSvc:assignmentService,
    private modal:ModalController,
    private alert:AlertController
  ) { }

  ngOnInit() {}

  getAssignments(){
    return this.assignmentsSvc.getAssignments();
  }

  async presentAssignForm(assignment:AssignDetailComponent){
    const modal = await this.modal.create({
      component:AssignDetailComponent,
      componentProps:{
        person:assignment
      },
      cssClass:"modal-full-right-side"
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.assignmentsSvc.addAssignment(result.data.assignment);
            break;
          case 'Edit':
            this.assignmentsSvc.updateAssignment(result.data.assignment);
            break;
          default:
        }
      }
    });
  }

  onEditAssign(assignment){
    this.presentAssignForm(assignment);
  }

  async onDeleteAlert(assignment){
    const alert = await this.alert.create({
      header: '¿Está seguro de que desear borrar la asignación de tarea?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler: () => {
            this.assignmentsSvc.deleteAssignmentById(assignment.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onNewAssignment(){
    this.presentAssignForm(null);  
  }

  onDeleteAssign(assignment){
    this.onDeleteAlert(assignment);
    
  }

}