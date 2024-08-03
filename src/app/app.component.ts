import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavBarSectionComponent } from './Components/nav-bar-section/nav-bar-section.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';
import { CardDetalsComponent } from './Components/card-detals/card-detals.component';
import { HousingService } from './housing.service';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ecommerceAngular';
  itemServes: HousingService = inject(HousingService);
  constructor() {
    this.allProducts =this.itemServes.getAllItems();
    this.setDataToLocalStorage();
  }
  setDataToLocalStorage() {
    localStorage.setItem('allProducts', JSON.stringify(this.allProducts));
  }
  allProducts: any[] = [];

 
}
