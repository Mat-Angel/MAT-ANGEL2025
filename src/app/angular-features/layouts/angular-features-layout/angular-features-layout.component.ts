import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

const types: string[] = [
  "change_detection",
  "control_flow",
  "defer_options",
  "defer_views",
  "user_list",
  "view_transitions",
]



@Component({
  selector: 'app-angular-features-layout',
  imports: [MatTabsModule],
  styles: ``,
  templateUrl: './angular-features-layout.component.html',
})
export class AngularFeaturesLayoutComponent {
  activatedRoute = inject(ActivatedRoute);
  //selected = signal(0);

  selected = toSignal(
    this.activatedRoute.params.pipe(
      map(params => params['id']),
      map((page) => types.indexOf(page) ?? 0)
    )
  )
  constructor() {

    console.log(this.selected());

  }

}
