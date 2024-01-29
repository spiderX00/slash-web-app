import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'pageNotFound',
        component: PageNotFoundComponent
    },
    {
        path: 'user',
        loadComponent: () =>
            import('./pages/user/user.component')
                .then(m => m.UserComponent)
    },
    {
        path: '**', 
        pathMatch: 'full',
        redirectTo: 'pageNotFound'
    }
];
