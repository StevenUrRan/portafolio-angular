import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/pages/home-page/home-page'),

    children:[
      {
        path: '',
        loadComponent: () => import('./home/pages/proyects-page/proyects-page'),
      },
      {
        path:'proyects',
        loadComponent: () => import('./home/pages/proyects-page/proyects-page'),
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
