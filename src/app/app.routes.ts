import { Routes } from '@angular/router';
import { TestPageComponent } from './pages/test-page/test-page';
import { HomePageComponent } from './pages/home-page/home-page';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { maintenanceComponent } from './pages/maintenance/maintenance.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { NotAuthenticatedGuard } from './auth/guards/not-authenticated.guard';
import { AngularFeaturesLayoutComponent } from './angular-features/layouts/angular-features-layout/angular-features-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'projects',
    component: ProjectsPageComponent
  },
  {
    path: "test",
    component: TestPageComponent
  },
  {
    path: "number_mentalist",
    loadComponent: () => import('./pages/number-mentalist/number-mentalist.component').then(m => m.NumberMentalistComponent)
  },
  /*
  {
    path: "angular_features",
    component: AngularFeaturesLayoutComponent
  },
  {
    path: "angular_features/:id",
    component: AngularFeaturesLayoutComponent
  },
  */
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.routes'),
    canMatch: [NotAuthenticatedGuard]
  },
  {
    path: "maintenance",
    component: maintenanceComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];
