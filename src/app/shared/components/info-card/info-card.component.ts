import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'info-card',
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './info-card.component.html',
})
export class InfoCardComponent {
  cardData = input.required<CardData>();
}
