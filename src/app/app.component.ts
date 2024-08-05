import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavBarSectionComponent } from './Components/nav-bar-section/nav-bar-section.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { CardDetalsComponent } from './Components/card-detals/card-detals.component';
import { HousingService } from './housing.service';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarSectionComponent,
    PageNotFoundComponent,
    AboutPageComponent,
    HomePageComponent,
    CartPageComponent,
    CardDetalsComponent,
    RouterModule,
    RegisterComponent,
    LoginComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ecommerceAngular';
}
