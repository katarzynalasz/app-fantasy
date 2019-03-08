import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HeroesService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  addHero(hero: Hero) {
    return this.http.post<Hero>(this.apiUrl + 'Hero', hero).pipe(catchError(this.handleError));
  }

  getHeroes() {
    return this.http.get<Hero[]>(this.apiUrl + 'Hero').pipe(catchError(this.handleError));
  }

  getHero(id: number) {
    return this.http.get<Hero>(this.apiUrl + 'Hero/' + id).pipe(catchError(this.handleError));
  }

  deleteHero(heroId: number) {
    return this.http.delete<Hero>(this.apiUrl + 'Hero/' + heroId).pipe(catchError(this.handleError));
  }
}
