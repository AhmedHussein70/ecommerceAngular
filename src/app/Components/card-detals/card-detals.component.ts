import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../housing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-detals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-detals.component.html',
  styleUrls: ['./card-detals.component.css'],
})
export class CardDetalsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  AllData!: any;
  itemIdI!: any;
  stars: number[] = [0, 1, 2, 3, 4];

  constructor() {}

  ngOnInit() {
    this.housingService.getDataFromAPI().subscribe((data: any) => {
      this.AllData = data.products;
      console.log(data.products);
      console.log(data);

      const itemId = Number(this.route.snapshot.params['id']);
      this.itemIdI = this.getItemById(itemId);
      console.log(this.itemIdI);
    });
  }

  getItemById(id: number): any {
    return this.AllData
      ? this.AllData.find((item: any) => item.id === id)
      : null;
  }
}
