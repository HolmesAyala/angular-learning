import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HEROES } from '../../mock/mock-heroes';
import { Hero } from '../../interfaces/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb(): { heroes: Hero[] } {
    return {
      heroes: HEROES,
    };
  }

  genId(heroes: Hero[]): string {
    return String(Math.round(Math.random() * 1000000));
  }
}
