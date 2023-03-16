import {Routes} from '@angular/router';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'contracts',
    loadChildren: () =>
      import('./contracts/contract-list/contract-list.module').then((m) => m.ContractListModule),
  },
  {
    path: 'company',
    loadChildren: () =>
      import('./company/company-list/company-list.module').then((m) => m.CompanyListModule),
  },
  {
    path: 'groups',
    loadChildren: () =>
      import('./groups/groups-list/groups-list.module').then((m) => m.GroupsListModule),
  },
  {
    path: 'add-groups',
    loadChildren: () =>
      import('./groups/add-groups/add-groups.module').then((m) => m.AddGroupsModule),
  },
  {
    path: 'edit-groups',
    loadChildren: () =>
      import('./groups/edit-groups/edit-groups.module').then((m) => m.EditGroupsModule),
  },
  {
    path: 'subgroups',
    loadChildren: () =>
      import('./subGroups/sub-groups-list/sub-groups-list.module').then((m) => m.SubGroupsListModule),
  },
  {
    path: 'add-sub-groups',
    loadChildren: () =>
      import('./subGroups/add-sub-group/add-sub-group.module').then((m) => m.AddSubGroupsModule),
  },
  {
    path: 'edit-sub-groups',
    loadChildren: () =>
      import('./subGroups/edit-sub-groups/edit-sub-groups.module').then((m) => m.EditSubGroupsModule),
  },
  {
    path: 'providers',
    loadChildren: () =>
      import('./providers/providers-list/providers-list.module').then((m) => m.ProvidersListModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule),
    data: {layout: 'dark-header'},
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export {Routing};
