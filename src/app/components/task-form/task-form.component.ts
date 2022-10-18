import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { taskModel } from 'src/app/models/taskModel.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {

  form: FormGroup;
  mode:"New" | "Edit" = "New";

  @Input('taskdata') set task(taskdata: taskModel){
    console.log(taskdata)
    if(taskdata){
      this.form.controls.id.setValue(taskdata.id);
      this.form.controls.name.setValue(taskdata.name);
      this.form.controls.difficulty.setValue(taskdata.difficulty);
      this.form.controls.description.setValue(taskdata.description);
      this.form.controls.timeInSeconds.setValue(taskdata.timeInSeconds);
      this.mode = "Edit";
    }
  }


  constructor(
    private fb:FormBuilder,
    private modal:ModalController,

  ) { 
    this.form = this.fb.group({
      id:[null],
      name:['', [Validators.required]],
      difficulty:['', [Validators.required]],
      description:['', [Validators.required]],
      timeInSeconds:['', [Validators.required]],
    });
  }

  onSubmit(){
    this.modal.dismiss({taskdata: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

  ngOnInit() {}

}

