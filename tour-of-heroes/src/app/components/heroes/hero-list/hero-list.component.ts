import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/interfaces/hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  @Input() heroes: Hero[] = [];

  @Input() selectedHero: Hero | null = null;

  @Output() clickInItem = new EventEmitter<Hero>();

  @Output() removeHero = new EventEmitter<Hero>();

  constructor() {}

  ngOnInit(): void {}

  onRemoveHero(hero: Hero): void {
    this.removeHero.emit(hero);
  }
}
