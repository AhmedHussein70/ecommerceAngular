import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { IMAGE_CONFIG } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule, ButtonModule, CommonModule, RouterLink, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  providers: [
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
  @Input() item: any;
  constructor(private router: Router) {}
  // gotoDetails(id: any) {
  //   this.router.navigate(['/ditals', id]);
  // }
  stars: number[] = [0, 1, 2, 3, 4];
}
