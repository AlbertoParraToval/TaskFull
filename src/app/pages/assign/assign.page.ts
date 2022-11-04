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

  getAssign(){
    return this.assignmentsSvc.getAssignments();
  }

  async presentAssignForm(assign:AssignDetailComponent){
    const modal = await this.modal.create({
      component:AssignDetailComponent,
      componentProps:{
        assignInfo:assign
      },
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        
        switch(result.data.mode){
          case 'New':
            this.assignmentsSvc.addAssignment(result.data.assign);
            break;
          case 'Edit':
            this.assignmentsSvc.updateAssignment(result.data.assign);
            break;
          default:
        }
      }
    });
  }

  onEditAssign(assign){
    this.presentAssignForm(assign);
  }

  async onDeleteAlert(assign){
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
            this.assignmentsSvc.deleteAssignmentById(assign.id);
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

  onDeleteAssign(assign){
    this.onDeleteAlert(assign);
    
  }

}