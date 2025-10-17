import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'navbar-header',
  imports: [MatCardModule],
  styleUrl: './navbar-header.component.scss',
  templateUrl: './navbar-header.component.html',
})
export class NavbarHeaderComponent { }
