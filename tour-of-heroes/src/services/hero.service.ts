import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';

import * as _ from 'lodash';

@Injectable()
export class HeroService {
  private HERO_API = '/api/heroes';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Hero[]> {
    return this.httpClient
      .get<Hero[]>(this.HERO_API)
      .pipe(catchError(this.handleError<Hero[]>('getAll', [])));
  }

  getById(id: string): Observable<Hero | undefined> {
    const url = `${this.HERO_API}/${id}`;

    return this.httpClient
      .get<Hero>(url)
      .pipe(catchError(this.handleError<Hero>(`get hero by id (${id})`)));
  }

  update(hero: Hero): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' }),
    };

    return this.httpClient
      .put<void>(this.HERO_API, hero, httpOptions)
      .pipe(catchError(this.handleError<void>(`update hero (${hero.id})`)));
  }

  add(name: string): Observable<Hero> {
    const httpOptions = {
      headers: new HttpHeaders({ 'content-type': 'application/json' }),
    };

    return this.httpClient
      .post<Hero>(this.HERO_API, { name }, httpOptions)
      .pipe(catchError(this.handleError<Hero>(`Add hero (${name})`)));
  }

  remove(id: string): Observable<void> {
    const url = `${this.HERO_API}/${id}`;

    return this.httpClient
      .delete<void>(url)
      .pipe(catchError(this.handleError<void>(`remove (${id})`)));
  }

  search(term: string): Observable<Hero[]> {
    if (!term || !term.trim()) {
      return of([]);
    }

    const url = `${this.HERO_API}/?name=${term}`;

    return this.httpClient
      .get<Hero[]>(url)
      .pipe(catchError(this.handleError<Hero[]>(`find hero (${term})`)));
  }

  /**
   * Manage a http error
   * @param operation - Name of operation performed
   * @param result - Optional value to return
   */
  private handleError<T>(
    operation: string = 'operation',
    result?: T
  ): (error: Error) => Observable<T> {
    return (error: Error): Observable<T> => {
      console.log(`Error -> ${operation}`);
      console.log(error);

      return of(result as T);
    };
  }
}
