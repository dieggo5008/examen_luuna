import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const app_routes: Routes = [
	{ path: 'login', component: LoginComponent }, 
	{ path: 'home', component: HomeComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'login' } 
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });