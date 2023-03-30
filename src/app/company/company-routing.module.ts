import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {AddCompanyComponent} from "./add-company/add-company.component";
import {EditCompanyComponent} from "./edit-company/edit-company.component";
import {CompanyListComponent} from "./company-list/company-list.component";


const routes: Routes = [
{
    path: '',
    component:CompanyListComponent,
    data: {
        title: 'CompanyList'
    }
},

{
    path: 'add',
    component:AddCompanyComponent,
    data: {
        title: 'Add New Company'
    }
},

{
    path: 'edit',
    component:EditCompanyComponent,
    data: {
        title: 'Edit Company'
    }
}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CompanyRoutingModule { }
