import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ModalsModule, WidgetsModule} from '../../resources/partials';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatChipsModule} from "@angular/material/chips";
import {MatInputModule} from "@angular/material/input";
import { MatSelectModule} from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewProvidersComponent } from './view-providers.component';


@NgModule({
    declarations: [ViewProvidersComponent],
    imports: [
      CommonModule,
      RouterModule.forChild([
        {
          path: '',
          component: ViewProvidersComponent,
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
      MatDialogModule,
      MatSelectModule,
      ReactiveFormsModule
    ],
  })
  export class ViewProvidersModule {
  }
