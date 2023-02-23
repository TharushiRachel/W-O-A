import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { AddSubGroupComponent } from 'src/app/subGroups/add-sub-group/add-sub-group.component';


@Component({
  selector: 'app-add-groups',
  templateUrl: './add-groups.component.html',
  styleUrls: ['./add-groups.component.scss']
})



export class AddGroupsComponent{

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  Reactiveform = new FormGroup({
    groupId: new FormControl({value: 0, disabled:true}),
    groupName: new FormControl("", Validators.required),
    language: new FormControl(""),
    provideOwner: new FormControl("")
  });

  OpenDialog(enteranimation: any, exitanimation: any,code:any) {

    this.dialog.open(AddSubGroupComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "50%",
      data:{
        empcode:code
      }
    })
  }

  SaveGroup(){
    if(this.Reactiveform.valid){
      console.log(this.Reactiveform.getRawValue());
    }
  }
  
  

}
