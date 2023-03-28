import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './add-users/add-users.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
    data: {
      title: 'User List',
    },
  },

  {
    path: 'add',
    component: AddUsersComponent,
    data: {
      title: 'Add New User',
    },
  },

  // {
  //     path: 'edit',
  //     component:EditSubGroupsComponent,
  //     data: {
  //         title: 'Edit Sub Group'
  //     }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
