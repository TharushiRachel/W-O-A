import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddSubGroupComponent } from "./add-sub-group/add-sub-group.component";
import { SubGroupsListComponent } from "./sub-groups-list/sub-groups-list.component";


const routes: Routes = [
{
    path: '',
    component:SubGroupsListComponent,
    data: {
        title: 'Sub Group List'
    }
},

{
    path: '',
    component:AddSubGroupComponent,
    data: {
        title: 'Add New Sub Group'
    }
}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SubGroupRouting { }