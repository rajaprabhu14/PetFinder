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
      { path: 'login', component: LoginComponent },
      { path: 'add', component: NewPetComponent },
      { path: 'pets', component: ViewPetComponent },
    ],
  },
];
