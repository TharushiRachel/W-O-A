import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './add-users/add-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ViewUsersComponent } from './view-users/view-users.component';

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

  {
      path: 'view',
      component:ViewUsersComponent,
      data: {
          title: 'View user'
      }
  },

  {
    path: 'edit',
    component:EditUsersComponent,
    data: {
        title: 'Edit user'
    }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
