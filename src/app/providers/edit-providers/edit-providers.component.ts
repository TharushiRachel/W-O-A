import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-providers',
  templateUrl: './edit-providers.component.html',
  styleUrls: ['./edit-providers.component.scss']
})
export class EditProvidersComponent implements OnInit {

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

  UpdateProvider(){
    if(this.providerForm.valid){
      console.log(this.providerForm.getRawValue());
    }
  }



}
