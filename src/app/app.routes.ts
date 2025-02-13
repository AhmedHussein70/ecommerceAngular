import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { CardDetalsComponent } from './Components/card-detals/card-detals.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },

  { path: 'homePage', component: HomePageComponent },

  { path: 'aboutPage', component: AboutPageComponent },
  { path: 'cartPage', component: CartPageComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ditals/:id', title: 'ditalse', component: CardDetalsComponent },
  { path: '**', component: PageNotFoundComponent },
];
