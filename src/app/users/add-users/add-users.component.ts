import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Country} from '@angular-material-extensions/select-country'; 





@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {

  myData: any;

  constructor() { }

  ngOnInit(): void {
   
  }

  Reactiveform = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", Validators.required),
    dob: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    emailWork: new FormControl(""),
    address: new FormControl(""),
    city: new FormControl(""),
    region: new FormControl(""),
    zipcode: new FormControl(""),
    country: new FormControl(""),
    phone: new FormControl("")
  });

  SaveUser(){
    if(this.Reactiveform.valid){
      console.log(this.Reactiveform.getRawValue());
    }
  }

  onCountrySelected(country: Country) {
    console.log(country);
  }
}
