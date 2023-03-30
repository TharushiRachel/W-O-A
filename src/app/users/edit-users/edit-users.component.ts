import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  Reactiveform = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    dob: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    weightUnit: new FormControl("", Validators.required),
    heightUnit: new FormControl("", Validators.required),
    height: new FormControl("", Validators.required),
    emailWork: new FormControl(""),
    address: new FormControl(""),
    city: new FormControl(""),
    region: new FormControl(""),
    zipcode: new FormControl(""),
    country: new FormControl(""),
    phone: new FormControl("")
  });

  ChangePasswordform = new FormGroup({
    password: new FormControl("", Validators.required),
    newPassword: new FormControl("", Validators.required),
    confirmNewpassword: new FormControl("", Validators.required),
  });

  EditUser(){
    if(this.Reactiveform.valid){
      console.log(this.Reactiveform.getRawValue());
    }
  }

  EditPassword(){
    if(this.ChangePasswordform.valid){
      console.log(this.ChangePasswordform.getRawValue());
    }
  }

}
