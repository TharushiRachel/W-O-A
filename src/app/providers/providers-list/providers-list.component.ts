import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalConfig} from '../../resources/partials';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditProvidersComponent } from '../edit-providers/edit-providers.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.scss'],
})
export class ProvidersListComponent implements OnInit{
  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };

  @Output()
  delete = new EventEmitter<any>();

  displayedColumns: string[] = ['id', 'name', 'groups', 'country', 'subgroups', 'actions'];
  dataSource = new MatTableDataSource<ProvidersElement>(ELEMENT_DATA);

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

  deleteProvider(subGroupId: any) {
    this.delete.emit(subGroupId);
  }

  OpenDialog(enteranimation: any, exitanimation: any,code:any) {

    this.dialog.open(EditProvidersComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "50%",
      height:"100%",
      data:{
        empcode:code
      }
    })
  }
}

export interface ProvidersElement {
  name: string;
  id: any;
  groups: string;
  country: string;
  subgroups: string;
}

// @ts-ignore
// @ts-ignore
const ELEMENT_DATA: ProvidersElement[] = [
  {
    id: 1,
    name: 'user 1',
    groups: 'Petrobras',
    country: 'test user',
    subgroups: 'sub group 1',
  },
  {
    id: 2,
    groups: 'ABC Fitness',
    name: 'user 2',
    country: 'test user',
    subgroups: 'sub group 1',
  },
  {
    id: 3,
    groups: 'Theo Meijer Sport',
    name: 'user 3',
    country: 'test user',
    subgroups: 'sub group 1',
  },
  {
    id: 4,
    groups: 'Petrobras',
    name: 'user 4',
    country: 'test user',
    subgroups: 'sub group 1',
  },
  {
    id: 5,
    groups: 'Petrobras',
    name: 'user 5',
    country: 'test user',
    subgroups: 'sub group 1',
  },
  {
    id: 6,
    groups: 'Petrobras',
    name: 'user 6',
    country: 'test user',
    subgroups: 'sub group 1',
  },
  {
    id: 7,
    groups: 'Petrobras',
    name: 'user 7',
    country: 'test user',
    subgroups: 'sub group 1',
  },
  {
    id: 8,
    groups: 'Petrobras',
    name: 'user 8',
    country: 'test user',
    subgroups: 'sub group 1',
  },
  {
    id: 9,
    groups: 'Petrobras',
    name: 'user 9',
    country: 'test user',
    subgroups: 'sub group 1',
  },
  {
    id: 10,
    groups: 'Petrobras',
    name: 'user 10',
    country: 'test user',
    subgroups: 'sub group 1',
  },
  {
    id: 11,
    groups: 'Petrobras',
    name: 'user 11',
    country: 'test user',
    subgroups: 'sub group 1',
  },
];
