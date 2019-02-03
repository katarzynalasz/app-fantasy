import { Injectable } from '@angular/core';
import { IHero } from './hero';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()

export class HeroesService extends BaseService {

    constructor(private http: HttpClient) {
        super();
      }

    addHero(formValues) {
        const Hero: IHero = {
            gameId: 1,
            name: formValues.heroName
        };
      return this.http.post<IHero>(this.apiUrl + 'Hero', Hero)
      .pipe(
        catchError(this.handleError),
      );
    }

    getHeroes() {
     return this.http.get<IHero[]>(this.apiUrl + 'Hero')
      .pipe(
        catchError(this.handleError),
      );
    }

    getHero(id: number) {
        return this.http.get<IHero>(this.apiUrl + 'Hero/' + id)
        .pipe(
          catchError(this.handleError),
        );
    }
}