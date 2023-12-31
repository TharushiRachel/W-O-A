import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SubGroupsListComponent} from './sub-groups-list.component';
import {ModalsModule, WidgetsModule} from '../../resources/partials';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {SearchSubGroupsFormComponent} from "../search-sub-groups-form/search-sub-groups-form.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatChipsModule} from "@angular/material/chips";
import {MatInputModule} from "@angular/material/input";
import { AddSubGroupComponent } from '../add-sub-group/add-sub-group.component';
import { MatSelectModule} from '@angular/material/select'; 
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [SubGroupsListComponent, SearchSubGroupsFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SubGroupsListComponent,
      },
    ]),
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
    MatSelectModule,
    MatDialogModule
  ],
})
export class SubGroupsListModule {
}
