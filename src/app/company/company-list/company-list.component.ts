import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ModalConfig } from '../../resources/partials';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyService } from '../services';
import { MatDialog } from '@angular/material/dialog';
import { Company } from '../models';
import { DeleteConfirmationComponent } from 'src/app/shared/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent {
  modalConfig: ModalConfig = {
    modalTitle: 'Modal title',
    dismissButtonLabel: 'Submit',
    closeButtonLabel: 'Cancel',
  };

  @Output()
  delete = new EventEmitter<any>();

  displayedColumns: string[] = [
    'id',
    'name',
    'address',
    'country',
    'phone',
    'tax',
    'contract_name',
    'contract_email',
    'contract_phone',
    'actions',
  ];
  dataSource = new MatTableDataSource<CompanyElement>(ELEMENT_DATA);

  companies: Company[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private companyService: CompanyService,
    private dialog: MatDialog
  ) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(): void {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // deleteCompany(companyId: any) {
  //   this.delete.emit(companyId);
  // }

  deleteCompany(companyId: any) {
    this.companyService.delete(companyId).subscribe((data) => {
      this.companies = this.companies.filter((item) => item.id! == companyId);
      console.log('Company deleted');
    });
  }

  openDialogForDelete(companyId: any) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      data: {
        message: 'Do you want to delete the company?',
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.deleteCompany(companyId);
      }
    });
  }
}

export interface CompanyElement {
  id: number;
  name: string;
  address: any;
  country: string;
  phone: string;
  tax: string;
  contract_name: string;
  contract_email: string;
  contract_phone: number;
}

// @ts-ignore
// @ts-ignore
const ELEMENT_DATA: CompanyElement[] = [
  {
    id: 1,
    name: 'Petrobras',
    address: 'Test Address',
    country: 'Starting Sinque',
    phone: 'Sub Group 1',
    tax: 'Brazil',
    contract_name: 'Test',
    contract_email: 'test@sinque.co',
    contract_phone: 775309503,
  },
  {
    id: 2,
    name: 'ABC Fitness',
    address: 'Test Address',
    country: 'Starting Sinque',
    phone: 'Sub Group 1',
    tax: 'Brazil',
    contract_name: 'Test',
    contract_email: 'test@sinque.co',
    contract_phone: 775309503,
  },
  {
    id: 3,
    name: 'Theo Meijer Sport',
    address: 'Test Address',
    country: 'Starting Sinque',
    phone: 'Sub Group 1',
    tax: 'Brazil',
    contract_name: 'Test',
    contract_email: 'test@sinque.co',
    contract_phone: 775309503,
  },
  {
    id: 4,
    name: 'Petrobras',
    address: 'Test Address',
    country: 'Starting Sinque',
    phone: 'Sub Group 1',
    tax: 'Brazil',
    contract_name: 'Test',
    contract_email: 'test@sinque.co',
    contract_phone: 775309503,
  },
  {
    id: 5,
    name: 'Petrobras',
    address: 'Test Address',
    country: 'Starting Sinque',
    phone: 'Sub Group 1',
    tax: 'Brazil',
    contract_name: 'Test',
    contract_email: 'test@sinque.co',
    contract_phone: 775309503,
  },
  {
    id: 6,
    name: 'Petrobras',
    address: 'Test Address',
    country: 'Starting Sinque',
    phone: 'Sub Group 1',
    tax: 'Brazil',
    contract_name: 'Test',
    contract_email: 'test@sinque.co',
    contract_phone: 775309503,
  },
  {
    id: 7,
    name: 'Petrobras',
    address: 'Test Address',
    country: 'Starting Sinque',
    phone: 'Sub Group 1',
    tax: 'Brazil',
    contract_name: 'Test',
    contract_email: 'test@sinque.co',
    contract_phone: 775309503,
  },
  {
    id: 8,
    name: 'Petrobras',
    address: 'Test Address',
    country: 'Starting Sinque',
    phone: 'Sub Group 1',
    tax: 'Brazil',
    contract_name: 'Test',
    contract_email: 'test@sinque.co',
    contract_phone: 775309503,
  },
  {
    id: 9,
    name: 'Petrobras',
    address: 'Test Address',
    country: 'Starting Sinque',
    phone: 'Sub Group 1',
    tax: 'Brazil',
    contract_name: 'Test',
    contract_email: 'test@sinque.co',
    contract_phone: 775309503,
  },
  {
    id: 10,
    name: 'Petrobras',
    address: 'Test Address',
    country: 'Starting Sinque',
    phone: 'Sub Group 1',
    tax: 'Brazil',
    contract_name: 'Test',
    contract_email: 'test@sinque.co',
    contract_phone: 775309503,
  },
  {
    id: 11,
    name: 'Petrobras',
    address: 'Test Address',
    country: 'Starting Sinque',
    phone: 'Sub Group 1',
    tax: 'Brazil',
    contract_name: 'Test',
    contract_email: 'test@sinque.co',
    contract_phone: 775309503,
  },
];
