import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProvidersComponent } from "./add-providers/add-providers.component";
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
    path: '',
    component:AddProvidersComponent,
    data: {
        title: 'Add New Provider'
    }
}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GroupRouting { }