import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { AddSubGroupComponent } from 'src/app/subGroups/add-sub-group/add-sub-group.component';
import { Subscription, Observable } from 'rxjs';
import { GroupService } from '../services';
import { Group } from '../models';


@Component({
  selector: 'app-add-groups',
  templateUrl: './add-groups.component.html',
  styleUrls: ['./add-groups.component.scss']
})



export class AddGroupsComponent implements OnInit, OnDestroy{

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  displayedColumns: string[] = ['groupName', 'toppings'];

  group: Group;

  defaultGroup: any = {
    groupId:1,
    groupName:'test',
    language:'english',
    provideOwner:'one',
  };
  groupForm: FormGroup;


  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private groupServise: GroupService
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  // groupForm = new FormGroup({
  //   groupId: new FormControl({value: 0, disabled:true}),
  //   groupName: new FormControl("", Validators.required),
  //   language: new FormControl(""),
  //   provideOwner: new FormControl(""),
  //   toppings:new FormControl("")
  // });

  initForm(): void {
    this.groupForm  = this.fb.group({
      groupId: new FormControl({value: 0, disabled:true}),
      groupName: new FormControl("", Validators.required),
      language: new FormControl(""),
      provideOwner: new FormControl(""),
      toppings:new FormControl("")
    })
  }

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
    // this.groupServise.save(this.group);
    
    
    
    if(this.groupForm.valid){
      console.log(this.groupForm.getRawValue());
    }


    // if(this.groupForm.valid){
    //   this.groupServise.save(this.group).subscribe(
    //     data => console.log(this.groupForm.getRawValue())
    //   )
    // }
  }

  

  
  
  }
  
