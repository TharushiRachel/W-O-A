import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.scss']
})
export class AddContractComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Reactiveform = new FormGroup({
    companyName: new FormControl("", Validators.required),
  });

  SaveContract(){
    if(this.Reactiveform.valid){
      console.log(this.Reactiveform.getRawValue());
    }
  }

}
