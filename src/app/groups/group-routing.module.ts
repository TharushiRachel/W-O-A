import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddGroupsComponent } from "./add-groups/add-groups.component";
import { GroupsListComponent } from "./groups-list/groups-list.component";

const routes: Routes = [
{
    path: '',
    component:GroupsListComponent,
    data: {
        title: 'Group List'
    }
},

{
    path: '',
    component:AddGroupsComponent,
    data: {
        title: 'Add New Group'
    }
}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GroupRouting { }