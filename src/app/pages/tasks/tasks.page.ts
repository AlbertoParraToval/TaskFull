import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { TaskFormComponent } from 'src/app/components/task-form/task-form.component';
import { taskModel } from 'src/app/models/taskModel.model';
import { tasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  taskInfo: taskModel;
  form:FormGroup;
  constructor(

    private taskSvc: tasksService,
    private modal: ModalController,
    private alert: AlertController
  ) {}

  ngOnInit() {}

  getTask(): taskModel[] {
    
    return this.taskSvc.getTask();
  }

  async presentTaskForm(taskdata: taskModel) {
    //console.log(userdata) me lo lee
    const modal = await this.modal.create({
      component: TaskFormComponent,
      componentProps: {
        task: taskdata,
        
      },
    });
    modal.present();
    modal.onDidDismiss().then((resultTask) => {
      if (resultTask && resultTask.data) {
        switch (resultTask.data.mode) {
          case 'New':
            console.log("Patata")
            this.taskSvc.addTask(resultTask.data.taskdata);
            break;
          case 'Edit':
            this.taskSvc.updateTask(resultTask.data.taskdata);
            break;
          default:
        }
      }
    });
  }

  onNewtask() {
    this.presentTaskForm(null);
  }

  onEditTask(taskdata) {
    //console.log(taskdata) 
    this.presentTaskForm(taskdata);
  }

  async onDeleteAlert(task) {
    const alert = await this.alert.create({
      header: '¿Seguro, no podrás volver atrás?',
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
            this.taskSvc.deleteTaskById(task.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onDeleteTask(taskdata) {
    //console.log(taskdata)
    this.onDeleteAlert(taskdata);
  }
}