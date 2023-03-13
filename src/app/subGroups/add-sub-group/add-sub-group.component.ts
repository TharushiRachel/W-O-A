import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-sub-group',
  templateUrl: './add-sub-group.component.html',
  styleUrls: ['./add-sub-group.component.scss']
})
export class AddSubGroupComponent implements OnInit {

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor() { }

  ngOnInit(): void {
  }

  Reactiveform = new FormGroup({
    subGroupName: new FormControl("", Validators.required),
    groupId: new FormControl("", Validators.required),
    providerPro: new FormControl("", Validators.required),
    dataSharingId: new FormControl("", Validators.required)
  });

  SaveSubGroup(){
    if(this.Reactiveform.valid){
      console.log(this.Reactiveform.getRawValue());
    }
  }

}
