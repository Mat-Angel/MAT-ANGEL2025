import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MenuDataService } from '../../data/menu-data.service';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  public routeDataService = inject(MenuDataService);
  readonly baseUrl = computed(()=> environment.gitRawUrl);


  socialData = computed<MenuItem[]>(() => this.routeDataService.socialNetworks);

}
