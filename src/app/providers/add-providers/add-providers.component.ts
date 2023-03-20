import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Provider } from '../models';

@Component({
  selector: 'app-add-providers',
  templateUrl: './add-providers.component.html',
  styleUrls: ['./add-providers.component.scss']
})
export class AddProvidersComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  providerForm = new FormGroup({
    providerId: new FormControl({value: 0, disabled:true}),
      providerType: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
      surname: new FormControl("", Validators.required),
      email:new FormControl(""),
      mobileNo:new FormControl(""),
      address:new FormControl(""),
      country:new FormControl(""),
      language:new FormControl(""),
      profession:new FormControl(""),
      area:new FormControl(""),
      description:new FormControl(""),
  });

  SaveProvider(){
    if(this.providerForm.valid){
      console.log(this.providerForm.getRawValue());
    }
  }



}
