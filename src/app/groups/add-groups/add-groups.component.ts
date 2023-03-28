import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddSubGroupComponent } from 'src/app/subGroups/add-sub-group/add-sub-group.component';
import { Subscription, Observable } from 'rxjs';
import { GroupService } from '../services';
import { Group } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-groups',
  templateUrl: './add-groups.component.html',
  styleUrls: ['./add-groups.component.scss'],
})
export class AddGroupsComponent implements OnInit, OnDestroy {
  subGroupControl = new FormControl([]);
  subGroupList: string[] = [
    'sub group 1',
    'sub group 2',
    'sub group 3',
    'sub group 4',
    'sub group 5',
    'sub group 6',
  ];
  errors = [];
  isSubmitting = false;

  onToppingRemoved(subGroup: string) {
    const subGroups = this.subGroupControl.value as string[];
    this.removeFirst(subGroups, subGroup);
    // this.subGroupControl.setValue(subGroups);
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  group: Group;

  defaultGroup: any = {
    groupId: 1,
    groupName: 'test',
    language: 'english',
    provideOwner: 'one',
  };
  groupForm: FormGroup;

  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private groupServise: GroupService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  initForm(): void {
    this.groupForm = this.fb.group({
      groupId: new FormControl({ value: 0, disabled: true }),
      groupName: new FormControl('', Validators.required),
      language: new FormControl('', Validators.required),
      provideOwner: new FormControl('', Validators.required),
      subGroupControl: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      region: new FormControl(''),
      zipcode: new FormControl(''),
      country: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
    });
  }

  OpenDialog(enteranimation: any, exitanimation: any, code: any) {
    this.dialog.open(AddSubGroupComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: '50%',
      data: {
        empcode: code,
      },
    });
  }

  onSubmit() {
    // this.groupServise.save(this.group);
    const navigationDetails = '';
    this.isSubmitting = true;
    this.errors = [];
    const formData = this.groupForm.value;
    console.log(formData);

    this.groupServise.save(formData).subscribe(
      (data) => {
        this.router.navigateByUrl(navigationDetails);
      },
      (err) => {}
    );

    // if(this.groupForm.valid){
    //   console.log(this.groupForm.getRawValue());
    // }

    // if(this.groupForm.valid){
    //   this.groupServise.save(this.group).subscribe(
    //     data => console.log(this.groupForm.getRawValue())
    //   )
    // }
  }
}
