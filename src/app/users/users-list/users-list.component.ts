import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ModalConfig } from 'src/app/resources/partials';

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

  // @Output()
  // delete = new EventEmitter<any>();

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

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // deleteSubGroup(subGroupId: any) {
  //   this.delete.emit(subGroupId);
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
