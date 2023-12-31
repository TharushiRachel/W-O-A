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
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { SearchCompanyFormComponent } from './search-company-form/search-company-form.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { CompanyRoutingModule } from './company-routing.module';

// import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AddCompanyComponent,
    CompanyListComponent,
    SearchCompanyFormComponent,
    EditCompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
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
export class CompanyModule { }
