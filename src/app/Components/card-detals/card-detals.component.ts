import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../housing.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-detals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-detals.component.html',
  styleUrl: './card-detals.component.css',
})
export class CardDetalsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  housingService = inject(HousingService);

  itemIdI!: any;
  stars: number[] = [0, 1, 2, 3, 4];

  constructor() {
    const itemId = Number(this.route.snapshot.params['id']);
    this.itemIdI = this.housingService.getItemById(itemId);
    console.log(this.itemIdI);
  }

  ngOnInit(): void {}
}
