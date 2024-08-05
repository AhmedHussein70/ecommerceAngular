import { Component, inject, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { IMAGE_CONFIG, provideImgixLoader } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { HousingService } from '../../housing.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    CommonModule,
    RouterLink,
    RouterModule,
    NgOptimizedImage,
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [
    provideImgixLoader('https://cdn.dummyjson.com/products/images/'),
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true,
      },
    },
  ],
})
export class CardComponent {
  @Input() item: any | undefined;

  // housingService = inject(HousingService);
  cart: any[] = [];

  constructor(private router: Router) {
    // let item = this.housingService.getItemById(this.item.id);
  }

  stars: number[] = [0, 1, 2, 3, 4];

  // addToCart(id: any) {
  //   let item = this.housingService.getItemById(this.item.id);
  //   this.cart.push(item);
  //   this.setDataToLocalStorage(this.cart);
  //   let arrayCart = this.cart.find((item) => {
  //     return console.log(item.id == id);
  //   });

  // }
}
