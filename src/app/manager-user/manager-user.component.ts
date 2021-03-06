import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, AbstractControl } from '@angular/forms';
import { parentsDatas } from '../models/parentsDatas-model';

@Component({
  selector: 'app-manager-user',
  templateUrl: './manager-user.component.html',
  styleUrls: ['./manager-user.component.css']
})
export class ManagerUserComponent implements OnInit {
  public datasForm: FormGroup;
  public parentsDatas: parentsDatas;
  public parentsDatasCtrl;

  constructor(private formBuilder: FormBuilder) {
      this.parentsDatasCtrl = {} as FormControl;

      this.parentsDatasCtrl.parentName = formBuilder.control('',Validators.required);
      this.parentsDatasCtrl.parentSurname = formBuilder.control('',Validators.required);  
      this.parentsDatasCtrl.childrenSurname = formBuilder.control('',Validators.required);  

      this.datasForm = this.formBuilder.group({
        parentName: this.parentsDatasCtrl.parentName,
        parentSurname: this.parentsDatasCtrl.parentSurname,
        childrenSurname: this.parentsDatasCtrl.childrenSurname,
      });
   }

  ngOnInit() {
    this.parentsDatas = new parentsDatas();
  }

  onSubmit() {
  }
}
