import { Routes } from '@angular/router';

import { LoginComponent } from './routes/auth/login/login.component';
import { HomeComponent } from './routes/home/home.component';
import { RegisterComponent } from './routes/auth/register/register.component';
import { ErrorComponent } from './routes/navigation/error/error.component';
import { AboutComponent } from './routes/navigation/about/about.component';
import { ContactComponent } from './routes/navigation/contact/contact.component';

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
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
