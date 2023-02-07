import { Routes } from '@angular/router';

const DashboatdRouting: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('../modules/profile/profile.module').then((m) => m.ProfileModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
    data: { layout: 'dark-header' },
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

export { DashboatdRouting };
