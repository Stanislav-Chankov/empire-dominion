import { Routes } from '@angular/router';
import { authRequiredGuard, guestOnlyGuard } from './auth/auth.guards';

export const routes: Routes = [
  {
    // Default scene (formerly /map). If not authenticated, redirect to the login screen.
    path: '',
    pathMatch: 'full',
    canMatch: [authRequiredGuard],
    loadChildren: () => import('./map/map.module').then((m) => m.MapModule)
  },
  {
    path: 'login',
    pathMatch: 'full',
    redirectTo: 'auth/login'
  },
  {
    path: 'auth',
    canMatch: [guestOnlyGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  { path: '**', redirectTo: '' }
];
