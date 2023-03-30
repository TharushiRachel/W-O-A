import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatDividerModule} from "@angular/material/divider";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDialogModule} from "@angular/material/dialog";
import { ModalsModule, WidgetsModule } from '../resources/partials';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { AddContractComponent } from './add-contract/add-contract.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { SearchContractFormComponent } from './search-contract-form/search-contract-form.component';
import { EditContractComponent } from './edit-contract/edit-contract.component';
import { ContractRoutingModule } from './contract-routing.module';

// import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AddContractComponent,
    ContractListComponent,
    SearchContractFormComponent,
    EditContractComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    WidgetsModule,
      ModalsModule,
      FormsModule,
      MatTableModule,
      MatPaginatorModule,
      MatIconModule,
      MatTooltipModule,
      ReactiveFormsModule,
      MatCheckboxModule,
      MatButtonModule,
      MatDividerModule,
      MatChipsModule,
      MatInputModule,
      MatDialogModule,
      MatSelectModule,
      ReactiveFormsModule
    // NgxSpinnerModule
  ]
})
export class ContractModule { }
