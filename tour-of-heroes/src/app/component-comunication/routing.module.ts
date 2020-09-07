import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ParentToChildWithInputBindingPageComponent } from './parent-to-child-with-input-binding-page/parent-to-child-with-input-binding-page.component';
import { InterceptInputPropertyChangesWithASetterComponent } from './intercept-input-property-changes-with-a-setter/intercept-input-property-changes-with-a-setter.component';

const routes: Routes = [
  {
    path: 'component-comunication',
    component: MainPageComponent,
    children: [
      {
        path: 'parent-to-child-with-input-binding-page',
        component: ParentToChildWithInputBindingPageComponent,
      },
      {
        path: 'intercept-input-property-changes-with-a-setter',
        component: InterceptInputPropertyChangesWithASetterComponent
      }
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
