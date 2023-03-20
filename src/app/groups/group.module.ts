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
import { AddGroupsComponent } from './add-groups/add-groups.component';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { SearchGroupsFormComponent } from './search-groups-form/search-groups-form.component';
import { GroupRoutingModule } from './group-routing.module';
import { ModalsModule, WidgetsModule } from '../resources/partials';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { EditGroupsComponent } from './edit-groups/edit-groups.component';
// import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AddGroupsComponent,
    GroupsListComponent,
    SearchGroupsFormComponent,
    EditGroupsComponent
  ],
  imports: [
    CommonModule,
    GroupRoutingModule,
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
export class GroupModule { }