import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  cart: any[] = [];

  constructor() {
    this.cart = this.getDataFromLocalStorage();
  }

  getDataFromLocalStorage() {
    const data = localStorage.getItem('cart');
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
}
