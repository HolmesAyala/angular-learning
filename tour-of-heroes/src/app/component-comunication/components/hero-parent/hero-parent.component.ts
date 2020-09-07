import { Component, OnInit } from '@angular/core';
import { Hero } from '@src/interfaces/hero';
import { HEROES } from '@src/mock/mock-heroes';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css'],
})
export class HeroParentComponent implements OnInit {
  heroes: Hero[] = HEROES;

  master = 'Master';

  constructor() {}

  ngOnInit(): void {}
}
