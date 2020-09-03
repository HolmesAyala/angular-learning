import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/**
 * Components
 */
import { HeroesComponent } from './heroes.component';
import { HeroListComponent } from '../components/heroes/hero-list/hero-list.component';
import { HeroListItemComponent } from '../components/heroes/hero-list-item/hero-list-item.component';
import { AddHeroComponent } from '../components/heroes/add-hero/add-hero.component';

@NgModule({
  imports: [FormsModule, BrowserModule],
  declarations: [HeroesComponent, HeroListComponent, HeroListItemComponent, AddHeroComponent],
  exports: [HeroesComponent],
})
export class HeroesModule {}
