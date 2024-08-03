import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar-section',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-bar-section.component.html',
  styleUrl: './nav-bar-section.component.css'
})
export class NavBarSectionComponent {

}
