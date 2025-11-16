import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { Card } from './pages/card/card';
import { PlusCard } from './pages/plus-card/plus-card';
import { History } from './pages/history-ticket/history';

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
    },
    {
        path: 'plus-card', component: PlusCard
    }
];