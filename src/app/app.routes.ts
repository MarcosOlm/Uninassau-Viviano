import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { Card } from './pages/card/card';
import { History } from './pages/history/history';

export const routes: Routes = [
    {
        path: '', component: Home
    }, 
    {
        path: 'card', component: Card
    },
    {
        path: 'profile', component: Profile
    },
    {
        path: 'history', component: History
    }
];