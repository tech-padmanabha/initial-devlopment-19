import { Routes } from '@angular/router';
import { LoginComponent } from './routes/auth/login/login.component';
import { HomeComponent } from './routes/home/home.component';
import { RegisterComponent } from './routes/auth/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
