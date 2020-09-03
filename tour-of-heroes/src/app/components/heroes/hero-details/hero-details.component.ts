import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '@src/interfaces/hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
})
export class HeroDetailsComponent {
  @Input() hero: Hero | null = null;

  @Output() saveChanges = new EventEmitter<Hero>();

  onClickInSaveButton(event: MouseEvent): void {
    this.saveChanges.emit(this.hero);
  }
}
