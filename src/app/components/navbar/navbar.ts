import { Component, inject, signal, HostListener, ViewChild, computed } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuItem, MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

import { MenuDataService } from '../../data/menu-data.service';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
import { ProfileInfoComponent } from "../../shared/components/profile-info/profile-info.component";
import { CommonModule } from '@angular/common';
import { environment } from '@environments/environment';



@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink, RouterLinkActive, CommonModule, MatMenuModule, MatIconModule, MatSidenavContainer, MatSidenav,
    MatMenuItem, MatIconButton, MatDividerModule, MatButtonModule, NavbarHeaderComponent, ProfileInfoComponent

],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'

})
export class Navbar {
  readonly baseUrl = computed(()=> environment.gitRawUrl)

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;
  @HostListener('window:resize', [])
  onResize() {
    this.ancho.set(document.body.clientWidth);
    if (this.ancho() <= 810) {
      // console.log('Modo mobile');
      this.validateScreenSize.set(false);
    }
    else {
      // console.log('Modo Desktop');
      this.validateScreenSize.set(true);
      if (this.sidenav.opened) {
        this.sidenav.close();
      }
    }
  };

  public routeDataService = inject(MenuDataService)
  router = inject(Router);

  menuData = signal<MenuItem[]>(this.routeDataService.menuData)
  ancho = signal<number>(document.body.clientWidth);
  validateScreenSize = signal<boolean>(this.ancho() <= 810 ? false : true);
  selectedChildOptions = signal<ChildMenuItem[]>([]);

  setChildOptions(childOptions: ChildMenuItem[]) {
    this.selectedChildOptions.set(childOptions);
  }


  someMethod() {
    this.trigger.openMenu();
  }

  open() {
    this.sidenav.toggle();
  }

  close() {
    this.sidenav.close();
  }


}
