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
import { AddProvidersComponent } from './add-providers/add-providers.component';
import { ProvidersListComponent } from './providers-list/providers-list.component';
import { SearchProvidersFormComponent } from './search-providers-form/search-providers-form.component';
import { EditProvidersComponent } from './edit-providers/edit-providers.component';
import { ProviderRoutingModule } from './provider-routing.module';
import { ViewProvidersComponent } from './view-providers/view-providers.component';
// import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AddProvidersComponent,
    ProvidersListComponent,
    SearchProvidersFormComponent,
    EditProvidersComponent,
    ViewProvidersComponent
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
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
export class ProviderModule { }