import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailPageComponent } from './hero-detail-page/hero-detail-page.component';
import { ObservablesPageComponent } from './observables-page/observables-page.component';
import { CacheHttpRequestPageComponent } from './cache-http-request-page/cache-http-request-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'heroes/:id',
    component: HeroDetailPageComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'observables',
    component: ObservablesPageComponent,
  },
  {
    path: 'cache',
    component: CacheHttpRequestPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
