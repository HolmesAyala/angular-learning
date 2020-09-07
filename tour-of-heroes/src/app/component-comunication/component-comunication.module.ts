import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing.module';
/**
 * Pages
 */
import { MainPageComponent } from './main-page/main-page.component';
import { ParentToChildWithInputBindingPageComponent } from './parent-to-child-with-input-binding-page/parent-to-child-with-input-binding-page.component';
import { InterceptInputPropertyChangesWithASetterComponent } from './intercept-input-property-changes-with-a-setter/intercept-input-property-changes-with-a-setter.component';

/**
 * Components
 */
import { HeroChildComponent } from './components/hero-child/hero-child.component';
import { HeroParentComponent } from './components/hero-parent/hero-parent.component';
import { NameChildComponent } from './components/name-child/name-child.component';
import { NameParentComponent } from './components/name-parent/name-parent.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ParentToChildWithInputBindingPageComponent,
    InterceptInputPropertyChangesWithASetterComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
  ],
  imports: [BrowserModule, RoutingModule],
})
export class ComponentComunicationModule {}
