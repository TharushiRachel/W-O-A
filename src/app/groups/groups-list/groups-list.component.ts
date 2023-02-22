import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {ModalConfig} from '../../resources/partials';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { AddGroupsComponent } from '../add-groups/add-groups.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss'],
})
export class GroupsListComponent {
  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };

  @Output()
  delete = new EventEmitter<any>();

  displayedColumns: string[] = ['id', 'name', 'contract_status', 'company_name', 'sinque_owner', 'subgroups', 'actions'];
  dataSource = new MatTableDataSource<GroupsElement>(ELEMENT_DATA);

  constructor(private dialog: MatDialog, private router:Router){

  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteGroup(groupId: any) {
    this.delete.emit(groupId);
  }

  OpenDialog(enteranimation: any, exitanimation: any,code:any) {

    this.dialog.open(AddGroupsComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "50%",
      data:{
        empcode:code
      }
    })
  }

  // addGroup(){
  //   this.router.navigate(['add-groups']);
  // }
}

export interface GroupsElement {
  name: string;
  id: any;
  contract_status: boolean;
  company_name: string;
  sinque_owner: string;
  subgroups: string;
}

// @ts-ignore
// @ts-ignore
const ELEMENT_DATA: GroupsElement[] = [
  {
    id: 1,
    name: 'Petrobras',
    contract_status: true,
    company_name: 'Starting Sinque',
    sinque_owner: 'TEST',
    subgroups: 'Sub Group 1',
  },
  {
    id: 2,
    name: 'ABC Fitness',
    contract_status: true,
    company_name: 'Starting Sinque',
    sinque_owner: 'TEST',
    subgroups: 'Sub Group 1',
  },
  {
    id: 3,
    name: 'Theo Meijer Sport',
    contract_status: false,
    company_name: 'Starting Sinque',
    sinque_owner: 'TEST',
    subgroups: 'Sub Group 1',
  },
  {
    id: 4,
    name: 'Petrobras',
    contract_status: true,
    company_name: 'Starting Sinque',
    sinque_owner: 'TEST',
    subgroups: 'Sub Group 1',
  },
  {
    id: 5,
    name: 'Petrobras',
    contract_status: false,
    company_name: 'Starting Sinque',
    sinque_owner: 'TEST',
    subgroups: 'Sub Group 1',
  },
  {
    id: 6,
    name: 'Petrobras',
    contract_status: true,
    company_name: 'Starting Sinque',
    sinque_owner: 'TEST',
    subgroups: 'Sub Group 1',
  },
  {
    id: 7,
    name: 'Petrobras',
    contract_status: true,
    company_name: 'Starting Sinque',
    sinque_owner: 'TEST',
    subgroups: 'Sub Group 1',
  },
  {
    id: 8,
    name: 'Petrobras',
    contract_status: true,
    company_name: 'Starting Sinque',
    sinque_owner: 'TEST',
    subgroups: 'Sub Group 1',
  },
  {
    id: 9,
    name: 'Petrobras',
    contract_status: true,
    company_name: 'Starting Sinque',
    sinque_owner: 'TEST',
    subgroups: 'Sub Group 1',
  },
  {
    id: 10,
    name: 'Petrobras',
    contract_status: true,
    company_name: 'Starting Sinque',
    sinque_owner: 'TEST',
    subgroups: 'Sub Group 1',
  },
  {
    id: 11,
    name: 'Petrobras',
    contract_status: true,
    company_name: 'Starting Sinque',
    sinque_owner: 'TEST',
    subgroups: 'Sub Group 1',
  },
];




