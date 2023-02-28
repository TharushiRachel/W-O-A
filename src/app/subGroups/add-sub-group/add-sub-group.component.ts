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
    subGroupId: new FormControl({value: 0, disabled:true}),
    subGroupName: new FormControl("", Validators.required),
    groupId: new FormControl({value: 0, disabled:true}),
    providerPro: new FormControl(""),
    dataSharingId: new FormControl("")
  });

  SaveSubGroup(){
    if(this.Reactiveform.valid){
      console.log(this.Reactiveform.getRawValue());
    }
  }

}
