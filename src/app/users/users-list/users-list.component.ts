import { Component, OnInit, Output, ViewChild, EventEmitter, NgModule, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ModalConfig } from 'src/app/resources/partials';
import { DeleteConfirmationComponent } from 'src/app/shared/delete-confirmation/delete-confirmation.component';
import { EditUsersComponent } from '../edit-users/edit-users.component';
import { User } from '../models';
import { UserService } from '../services';
import { ViewUsersComponent } from '../view-users/view-users.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel',
  };

  @Output()
  delete = new EventEmitter<any>();

  @Input() userId: string;
  @Input() userModule: NgModule;
  users: User[] = [];

  displayedColumns: string[] = [
    'id',
    'name',
    'groups',
    'contact',
    'phone',
    'email',
    'gender',
    'height',
    'actions',
  ];
  dataSource = new MatTableDataSource<UsersElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  // userId = window.localStorage['userId'];

  constructor(
    private dialog: MatDialog,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // this.userId = window.localStorage['userId'];
    // this.deleteUser(this.userId);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  OpenDialog(enteranimation: any, exitanimation: any,code:any) {

    this.dialog.open(ViewUsersComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "50%",
      height: "80%",
      data:{
        empcode:code
      }
    })
  }

  OpenDialogForEdit(enteranimation: any, exitanimation: any,code:any) {

    this.dialog.open(EditUsersComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "50%",
      height: "80%",
      data:{
        empcode:code
      }
    })
  }

  deleteUser(userId: any) {
    this.userService.delete(userId)
    .subscribe(data => {
      this.users = this.users.filter(item => item.id ! == userId);
      console.log('User deleted')
    })
    
  }

  openDialogForDelete(userId:any) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      data:{
          message: 'Do you want to delete the user?'
      }
      });
     
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
            this.deleteUser(userId);
        }
    });
} 

  // deleteUser(userId: any){
  //   if(confirm('Are you sure you want to deleter user')){
  //     this.userService.delete(userId).subscribe(data =>{
  //       console.log(data);
  //     })
  //   }
  // }
}

export interface UsersElement {
  name: string;
  id: any;
  groups: string;
  email: string;
  regDate: string;
  rfid: string;
  subGroup: string;
  gender: string;
  height: string;
}

// @ts-ignore
// @ts-ignore
const ELEMENT_DATA: UsersElement[] = [
  {
    id: 1,
    name: 'Pedro Cruz',
    groups: 'Petrobras',
    email: 'test@gmail.com',
    regDate: '2020-11-16',
    rfid: '760388816',
    subGroup: 'Starting Sinque',
    gender: 'Male',
    height: '175',
  },
  {
    id: 2,
    groups: 'ABC Fitness',
    name: 'Niek Niek',
    email: 'test@gmail.com',
    regDate: '2020-11-16',
    rfid: '760388816',
    subGroup: 'Starting Sinque',
    gender: 'Male',
    height: '175',
  },
  {
    id: 3,
    groups: 'Theo Meijer Sport',
    name: 'syb group 3',
    email: 'test@gmail.com',
    regDate: '2020-11-16',
    rfid: '760388816',
    subGroup: 'Starting Sinque',
    gender: 'Male',
    height: '175',
  },
  {
    id: 4,
    groups: 'Petrobras',
    name: 'syb group 4',
    email: 'test@gmail.com',
    regDate: '2020-11-16',
    rfid: '760388816',
    subGroup: 'Starting Sinque',
    gender: 'Male',
    height: '175',
  },
  {
    id: 5,
    groups: 'Petrobras',
    name: 'syb group 3',
    email: 'test@gmail.com',
    regDate: '2020-11-16',
    rfid: '760388816',
    subGroup: 'Starting Sinque',
    gender: 'Male',
    height: '175',
  },
  {
    id: 6,
    groups: 'Petrobras',
    name: 'syb group 3',
    email: 'test@gmail.com',
    regDate: '2020-11-16',
    rfid: '760388816',
    subGroup: 'Starting Sinque',
    gender: 'Male',
    height: '175',
  },
  {
    id: 7,
    groups: 'Petrobras',
    name: 'syb group 3',
    email: 'test@gmail.com',
    regDate: '2020-11-16',
    rfid: '760388816',
    subGroup: 'Starting Sinque',
    gender: 'Male',
    height: '175',
  },
  {
    id: 8,
    groups: 'Petrobras',
    name: 'syb group 3',
    email: 'test@gmail.com',
    regDate: '2020-11-16',
    rfid: '760388816',
    subGroup: 'Starting Sinque',
    gender: 'Male',
    height: '175',
  },
  {
    id: 9,
    groups: 'Petrobras',
    name: 'syb group 3',
    email: 'test@gmail.com',
    regDate: '2020-11-16',
    rfid: '760388816',
    subGroup: 'Starting Sinque',
    gender: 'Male',
    height: '175',
  },
  {
    id: 10,
    groups: 'Petrobras',
    name: 'syb group 3',
    email: 'test@gmail.com',
    regDate: '2020-11-16',
    rfid: '760388816',
    subGroup: 'Starting Sinque',
    gender: 'Male',
    height: '175',
  },
  {
    id: 11,
    groups: 'Petrobras',
    name: 'syb group 3',
    email: 'test@gmail.com',
    regDate: '2020-11-16',
    rfid: '760388816',
    subGroup: 'Starting Sinque',
    gender: 'Male',
    height: '175',
  },
];
