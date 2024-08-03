import { Component, Inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { RouterOutlet } from '@angular/router';
import { HousingService } from '../../housing.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardComponent, RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  AllData: any[] = [];
  constructor() {
    this.getDatafromStorage();
    console.log(this.AllData);
  }

  getDatafromStorage() {
    const data = localStorage.getItem('allProducts');
    if (data) {
      const parsedData = JSON.parse(data);
      this.AllData = parsedData;
      return this.AllData;
    }
    return null;
  }

  
}
