import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  imports: [],
  templateUrl: './maintenance.component.html',
})
export class maintenanceComponent {
  location = inject(Location)

  goBack() {
    this.location.back();  //* Esta función, propia de @angular-common, nos pormite navegar entre localizaciones, en este caso nos regresa a la ruta anterior
  }
}
