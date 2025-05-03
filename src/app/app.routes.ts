import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { ServicesComponent } from './components/services/services.component';
import { SobreComponent } from './components/sobre/sobre.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
        
    },
    {
        path: "contact", 
        component: ContactComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "services",
        component: ServicesComponent
    },
    {
        path: "sobre",
        component: SobreComponent
    }
];
