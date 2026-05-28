import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/pages/home-page/home-page').then(m => m.HomePage),

    children:[
      {
        path: '',
        loadComponent: () => import('./home/pages/proyects-page/proyects-page').then(m => m.ProyectsPage),
      },
      {
        path:'proyects',
        loadComponent: () => import('./home/pages/proyects-page/proyects-page').then(m => m.ProyectsPage),
      },
    
      {
        path: 'profile',
        loadComponent: () => import('./home/component/home-component-profile/home-component-profile').then(m => m.HomeComponentProfile),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
  },

];
