import { Route } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';

export const AuthenticationRoutes: Route[] = [
  {
    path: 'login',
    component: AuthenticationComponent
  }
];
