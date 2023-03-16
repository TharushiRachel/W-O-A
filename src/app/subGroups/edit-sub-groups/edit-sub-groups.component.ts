import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-sub-groups',
  templateUrl: './edit-sub-groups.component.html',
  styleUrls: ['./edit-sub-groups.component.scss']
})
export class EditSubGroupsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Reactiveform = new FormGroup({
    subGroupName: new FormControl("", Validators.required),
    groupId: new FormControl("", Validators.required),
    providerPro: new FormControl("", Validators.required),
    dataSharingId: new FormControl("", Validators.required)
  });

  EditSubGroup(){
    if(this.Reactiveform.valid){
      console.log(this.Reactiveform.getRawValue());
    }
  }

}
