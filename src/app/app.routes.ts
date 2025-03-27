import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './services/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', loadComponent: () => import("../app/home/home.component").then(component => component.HomeComponent) },
      { path: 'login', loadComponent: () => import("../app/login/login.component").then(component => component.LoginComponent) },
      { path: 'add', loadComponent: () => import("../app/pet/add/add.component").then(component => component.AddPetComponent), canActivate: [authGuard] },
      { path: 'pets', loadComponent: () => import("../app/pet/update/update.component").then(component => component.UpdateComponent), canActivate: [authGuard] },
    ],
  },
];
