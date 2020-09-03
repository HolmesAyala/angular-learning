import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../services/hero.service';

import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-hero-detail-page',
  templateUrl: './hero-detail-page.component.html',
  styleUrls: ['./hero-detail-page.component.css'],
})
export class HeroDetailPageComponent implements OnInit {
  hero: Hero | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    const id: string = this.activatedRoute.snapshot.paramMap.get('id');

    this.heroService.getById(id).subscribe((hero: Hero | undefined) => {
      this.hero = hero;
    });
  }

  onClickInGoBackButton(): void {
    this.location.back();
  }

  onSaveChangesInHero(hero: Hero): void {
    this.heroService.update(hero).subscribe(() => {
      this.onClickInGoBackButton();
    });
  }
}
