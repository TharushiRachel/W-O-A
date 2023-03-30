import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-contract',
  templateUrl: './edit-contract.component.html',
  styleUrls: ['./edit-contract.component.scss']
})
export class EditContractComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Reactiveform = new FormGroup({
    companyName: new FormControl("", Validators.required),
  });

  EditContract(){
    if(this.Reactiveform.valid){
      console.log(this.Reactiveform.getRawValue());
    }
  }

}
