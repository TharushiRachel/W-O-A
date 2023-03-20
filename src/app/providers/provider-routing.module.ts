import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProvidersComponent } from "./add-providers/add-providers.component";
import { EditProvidersComponent } from "./edit-providers/edit-providers.component";
import { ProvidersListComponent } from "./providers-list/providers-list.component";


const routes: Routes = [
{
    path: '',
    component:ProvidersListComponent,
    data: {
        title: 'Provider List'
    }
},

{
    path: 'add',
    component:AddProvidersComponent,
    data: {
        title: 'Add New Provider'
    }
},

{
    path: 'edit',
    component:EditProvidersComponent,
    data: {
        title: 'Edit Provider'
    }
}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProviderRoutingModule { }