import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { authGuard } from './core/auth/auth-guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { 
    path: 'organizer', 
    canActivate: [authGuard], 
    data: { role: 'Organizer' },
    loadComponent: () => import('./features/auth/login/login').then(m => m.Login) // Placeholder
  },
  { 
    path: 'gate', 
    canActivate: [authGuard], 
    data: { role: 'GateStaff' },
    loadComponent: () => import('./features/auth/login/login').then(m => m.Login) // Placeholder
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
