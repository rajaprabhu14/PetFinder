import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewPetComponent } from './newpet/newpet.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewPetComponent } from './viewpet/viewpet.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', loadComponent: () => import("../app/home/home.component").then(component => component.HomeComponent) },
      { path: 'login', loadComponent: () => import("../app/login/login.component").then(component => component.LoginComponent) },
      { path: 'add', loadComponent: () => import("../app/newpet/newpet.component").then(component => component.NewPetComponent) },
      { path: 'pets', loadComponent: () => import("../app/viewpet/viewpet.component").then(component => component.ViewPetComponent) },
    ],
  },
];
