import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { Card } from './pages/card/card';
import { History } from './pages/history-ticket/history';
import { LoginRegistration } from './pages/login-registration/login-registration';
import { PaymentCurrentTicket } from './pages/payment-current-ticket/payment-current-ticket';
import { CardSolicitation } from './pages/card-solicitation/card-solicitation';
import { AuthGuard } from './securityAuth/auth-guard';

export const routes: Routes = [
    {
        path: '', component: Home, canActivate: [AuthGuard]
    }, 
    {
        path: 'card/:id', component: Card, canActivate: [AuthGuard]
    },
    {
        path: 'profile', component: Profile, canActivate: [AuthGuard]
    },
    {
        path: 'history', component: History, canActivate: [AuthGuard]
    },
    {
        path: 'payment_current_ticket', component: PaymentCurrentTicket, canActivate: [AuthGuard]
    },
    {
        path: 'card_solicitation', component: CardSolicitation, canActivate: [AuthGuard]
    },
    {
        path: 'login-registration', component: LoginRegistration
    }
];