import { Routes } from '@angular/router';
import { LoginCustomerComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginCollectorComponent } from './login-collector/login-collector.component';
import { RegisterCollectorComponent } from './register-collector/register-collector.component';
import { AccountSelectionComponent } from './account-selection/account-selection.component';
import { RegisterMarketComponent } from './register-market/register-market.component';
import { LoginMarketComponent } from './login-market/login-market.component';

export const routes: Routes = [
  { path: 'login', component: LoginCustomerComponent, title: 'Login' },
  { path: 'login/customer', component: LoginCustomerComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  {
    path: 'register/customer',
    component: RegisterComponent,
    title: 'Register',
  },
  {
    path: 'login/collector',
    component: LoginCollectorComponent,
    title: 'Login',
  },
  {
    path: 'register/collector',
    component: RegisterCollectorComponent,
    title: 'Register',
  },
  { path: '', component: AccountSelectionComponent, title: 'Home' },
  {
    path: 'register/market',
    component: RegisterMarketComponent,
    title: 'Register',
  },
  { path: 'login/market', component: LoginMarketComponent, title: 'Login' },
];
