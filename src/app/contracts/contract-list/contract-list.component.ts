import {Component, ViewChild, AfterViewInit, Output, EventEmitter} from '@angular/core';
import {ModalConfig, ModalComponent} from '../../resources/partials';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-dashboard',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss'],
})
export class ContractListComponent {
  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel'
  };

  @Output()
  delete = new EventEmitter<any>();

  displayedColumns: string[] = ['id', 'name', 'companyID', 'group', 'subGroup', 'country', 'language', 'start', 'end', 'actions'];
  dataSource = new MatTableDataSource<ContractElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteContract(contractId: any) {
    this.delete.emit(contractId);
  }
}

export interface ContractElement {
  name: string;
  id: any;
  companyID: number;
  group: string;
  subGroup: string;
  country: string;
  language: string;
  start: any;
  end: any;
}

// @ts-ignore
// @ts-ignore
const ELEMENT_DATA: ContractElement[] = [
  {
    id: 1,
    name: 'Petrobras',
    companyID: 100,
    group: 'Starting Sinque',
    subGroup: 'Sub Group 1',
    country: 'Brazil',
    language: 'Portuguese',
    start: '01/01/2023',
    end: '01/01/2024'
  },
  {
    id: 2,
    name: 'ABC Fitness',
    companyID: 201,
    group: 'Starting Sinque',
    subGroup: 'Sub Group 1',
    country: 'Brazil',
    language: 'Portuguese',
    start: '01/01/2023',
    end: '01/01/2024'
  },
  {
    id: 3,
    name: 'Theo Meijer Sport',
    companyID: 301,
    group: 'Starting Sinque',
    subGroup: 'Sub Group 1',
    country: 'Brazil',
    language: 'Portuguese',
    start: '01/01/2023',
    end: '01/01/2024'
  },
  {
    id: 4,
    name: 'Petrobras',
    companyID: 401,
    group: 'Starting Sinque',
    subGroup: 'Sub Group 1',
    country: 'Brazil',
    language: 'Portuguese',
    start: '01/01/2023',
    end: '01/01/2024'
  },
  {
    id: 5,
    name: 'Petrobras',
    companyID: 201,
    group: 'Starting Sinque',
    subGroup: 'Sub Group 1',
    country: 'Brazil',
    language: 'Portuguese',
    start: '01/01/2023',
    end: '01/01/2024'
  },
  {
    id: 6,
    name: 'Petrobras',
    companyID: 201,
    group: 'Starting Sinque',
    subGroup: 'Sub Group 1',
    country: 'Brazil',
    language: 'Portuguese',
    start: '01/01/2023',
    end: '01/01/2024'
  },
  {
    id: 7,
    name: 'Petrobras',
    companyID: 201,
    group: 'Starting Sinque',
    subGroup: 'Sub Group 1',
    country: 'Brazil',
    language: 'Portuguese',
    start: '01/01/2023',
    end: '01/01/2024'
  },
  {
    id: 8,
    name: 'Petrobras',
    companyID: 201,
    group: 'Starting Sinque',
    subGroup: 'Sub Group 1',
    country: 'Brazil',
    language: 'Portuguese',
    start: '01/01/2023',
    end: '01/01/2024'
  },
  {
    id: 9,
    name: 'Petrobras',
    companyID: 201,
    group: 'Starting Sinque',
    subGroup: 'Sub Group 1',
    country: 'Brazil',
    language: 'Portuguese',
    start: '01/01/2023',
    end: '01/01/2024'
  },
  {
    id: 10,
    name: 'Petrobras',
    companyID: 201,
    group: 'Starting Sinque',
    subGroup: 'Sub Group 1',
    country: 'Brazil',
    language: 'Portuguese',
    start: '01/01/2023',
    end: '01/01/2024'
  },
  {
    id: 11,
    name: 'Petrobras',
    companyID: 201,
    group: 'Starting Sinque',
    subGroup: 'Sub Group 1',
    country: 'Brazil',
    language: 'Portuguese',
    start: '01/01/2023',
    end: '01/01/2024'
  },
];
