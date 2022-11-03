import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})

export class UserFormComponent implements OnInit {

  form: FormGroup;
  mode:"New" | "Edit" = "New";

  @Input('userdata') set person(userdata: User){
    //console.log(userdata)
    if(userdata){
      this.form.controls.id.setValue(userdata.userId);
      this.form.controls.name.setValue(userdata.name);
      this.form.controls.nickname.setValue(userdata.nickname);
      this.form.controls.description.setValue(userdata.description);
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
      nickname:['', [Validators.required]],
      description:['', [Validators.required]],
    });
  }

  onSubmit(){
    this.modal.dismiss({userdata: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(result){
    this.modal.dismiss(null, 'cancel');
  }

  ngOnInit() {}

}
