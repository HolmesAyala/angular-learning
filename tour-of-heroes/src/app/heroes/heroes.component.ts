import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../services/message.service';
import { Hero } from '../../interfaces/hero';
import * as _ from 'lodash';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.heroService.getAll().subscribe((heroes: Hero[]) => {
      this.heroes = heroes;
      this.messageService.add('Heroes loaded!');
    });
  }

  onClickItemInList(hero: Hero): void {
    this.messageService.add(`Selected hero: ${hero.name}`);
    this.router.navigateByUrl(`/heroes/${hero.id}`);
  }

  onAddHero(name: string): void {
    this.heroService.add(name).subscribe((hero: Hero) => {
      this.heroes.push(hero);
    });
  }

  onRemoveHero(hero: Hero): void {
    this.heroService.remove(hero.id).subscribe(() => {
      _.remove(this.heroes, { id: hero.id });
    });
  }
}
