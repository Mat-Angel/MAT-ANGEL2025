import { Component, computed } from '@angular/core';
import { environment } from '@environments/environment';



@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './nabvar.component.html',
})
export class NabvarComponent {
  readonly baseUrl = computed(()=> environment.gitRawUrl)
 }
