import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CardComponent } from './components/card-component/card-component';

export const routes: Routes = [
    {
        path: '', component: Home
    }, 
    {
        path: 'card', component: CardComponent
    }
];