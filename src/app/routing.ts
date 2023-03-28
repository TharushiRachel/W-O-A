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
      import('./groups/group.module').then((m) => m.GroupModule),
  },
  {
    path: 'subgroups',
    loadChildren: () =>
      import('./subGroups/sub-group.module').then((m) => m.SubGroupModule),
  },
  {
    path: 'providers',
    loadChildren: () =>
      import('./providers/provider.module').then((m) => m.ProviderModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UserModule),
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
