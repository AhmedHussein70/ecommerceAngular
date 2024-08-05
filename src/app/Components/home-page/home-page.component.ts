import { Component, Inject, OnInit } from '@angular/core';
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
  AllData: any = [];

  constructor(private housingService: HousingService) {
    this.housingService.getDataFromAPI().subscribe((data: any) => {
      this.AllData = data.products;
      console.log(data.products);
      console.log(data);
    });
  }
}
