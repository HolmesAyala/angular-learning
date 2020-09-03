import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '@src/interfaces/hero';

@Component({
  selector: 'app-hero-list-item',
  templateUrl: './hero-list-item.component.html',
  styleUrls: ['./hero-list-item.component.css'],
})
export class HeroListItemComponent implements OnInit {
  @Input() hero: Hero | null = null;

  @Input() selected = false;

  @Output() clickEvent = new EventEmitter<Hero>();

  @Output() remove = new EventEmitter<Hero>();

  constructor() {}

  onClick(): void {
    this.clickEvent.emit(this.hero);
  }

  onClickInRemoveButton(mouseEvent: MouseEvent): void {
    mouseEvent.stopPropagation();
    this.remove.emit(this.hero);
  }

  ngOnInit(): void {}
}
