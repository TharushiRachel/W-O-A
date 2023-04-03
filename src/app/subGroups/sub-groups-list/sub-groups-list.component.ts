import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {ModalConfig} from '../../resources/partials';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddSubGroupComponent } from '../add-sub-group/add-sub-group.component';
import { EditSubGroupsComponent } from '../edit-sub-groups/edit-sub-groups.component';
import { SubGroup } from '../models';
import { SubGroupService } from '../services';
import { DeleteConfirmationComponent } from 'src/app/shared/delete-confirmation/delete-confirmation.component';
import { ViewSubGroupsComponent } from '../view-sub-groups/view-sub-groups.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './sub-groups-list.component.html',
  styleUrls: ['./sub-groups-list.component.scss'],
})
export class SubGroupsListComponent {
  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };

  constructor(
    private dialog: MatDialog,
    private subGroupService: SubGroupService
    ) { }

  @Output()
  delete = new EventEmitter<any>();

  displayedColumns: string[] = ['id', 'name', 'groups', 'contact', 'phone', 'email', 'actions'];
  dataSource = new MatTableDataSource<SubGroupsElement>(ELEMENT_DATA);

  subGroups: SubGroup[] =[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // deleteSubGroup(subGroupId: any) {
  //   this.delete.emit(subGroupId);
  // }

  OpenDialog(enteranimation: any, exitanimation: any,code:any) {

    this.dialog.open(EditSubGroupsComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: "50%",
      data:{
        empcode:code
      }
    })
  }

  deleteSubGroup(subGroupId: any) {
    this.subGroupService.delete(subGroupId)
    .subscribe(data => {
      this.subGroups = this.subGroups.filter(item => item.id ! == subGroupId);
      console.log('Subgroup deleted')
    })
    
  }

  openDialogForDelete(subGroupId:any) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      data:{
          message: 'Do you want to delete the subgroup?'
      }
      });
     
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
            this.deleteSubGroup(subGroupId);
        }
    });
} 

OpenDialogForView(enteranimation: any, exitanimation: any, code: any) {
  this.dialog.open(ViewSubGroupsComponent, {
    enterAnimationDuration: enteranimation,
    exitAnimationDuration: exitanimation,
    width: '50%',
    height: '80%',
    data: {
      empcode: code,
    },
  });
}
}

export interface SubGroupsElement {
  name: string;
  id: any;
  groups: string;
  contact: string;
  phone: number;
  email: string;
}

// @ts-ignore
// @ts-ignore
const ELEMENT_DATA: SubGroupsElement[] = [
  {
    id: 1,
    name: 'sub group 1',
    groups: 'Petrobras',
    contact: 'test user',
    phone: 114424242,
    email: 'test@gmail.com',
  },
  {
    id: 2,
    groups: 'ABC Fitness',
    name: 'syb group 2',
    contact: 'test user',
    phone: 114424242,
    email: 'test@gmail.com',
  },
  {
    id: 3,
    groups: 'Theo Meijer Sport',
    name: 'syb group 3',
    contact: 'test user',
    phone: 114424242,
    email: 'test@gmail.com',
  },
  {
    id: 4,
    groups: 'Petrobras',
    name: 'syb group 4',
    contact: 'test user',
    phone: 114424242,
    email: 'test@gmail.com',
  },
  {
    id: 5,
    groups: 'Petrobras',
    name: 'syb group 3',
    contact: 'test user',
    phone: 114424242,
    email: 'test@gmail.com',
  },
  {
    id: 6,
    groups: 'Petrobras',
    name: 'syb group 3',
    contact: 'test user',
    phone: 114424242,
    email: 'test@gmail.com',
  },
  {
    id: 7,
    groups: 'Petrobras',
    name: 'syb group 3',
    contact: 'test user',
    phone: 114424242,
    email: 'test@gmail.com',
  },
  {
    id: 8,
    groups: 'Petrobras',
    name: 'syb group 3',
    contact: 'test user',
    phone: 114424242,
    email: 'test@gmail.com',
  },
  {
    id: 9,
    groups: 'Petrobras',
    name: 'syb group 3',
    contact: 'test user',
    phone: 114424242,
    email: 'test@gmail.com',
  },
  {
    id: 10,
    groups: 'Petrobras',
    name: 'syb group 3',
    contact: 'test user',
    phone: 114424242,
    email: 'test@gmail.com',
  },
  {
    id: 11,
    groups: 'Petrobras',
    name: 'syb group 3',
    contact: 'test user',
    phone: 114424242,
    email: 'test@gmail.com',
  },
];
