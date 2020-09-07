import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  ellipsisLength = 5;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getAll().subscribe((heroes: Hero[]) => {
      this.heroes = heroes.slice(0, 4);
    });
  }
}
