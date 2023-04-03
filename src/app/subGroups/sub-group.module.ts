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
import { AddSubGroupComponent } from './add-sub-group/add-sub-group.component';
import { SubGroupsListComponent } from './sub-groups-list/sub-groups-list.component';
import { SearchSubGroupsFormComponent } from './search-sub-groups-form/search-sub-groups-form.component';
import { EditSubGroupsComponent } from './edit-sub-groups/edit-sub-groups.component';
import { SubGroupRoutingModule } from './sub-group-routing.module';
import { ViewSubGroupsComponent } from './view-sub-groups/view-sub-groups.component';

// import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AddSubGroupComponent,
    SubGroupsListComponent,
    SearchSubGroupsFormComponent,
    EditSubGroupsComponent,
    ViewSubGroupsComponent
  ],
  imports: [
    CommonModule,
    SubGroupRoutingModule,
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
export class SubGroupModule { }