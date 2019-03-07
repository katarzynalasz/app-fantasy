import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BaseService } from '../base.service';
import { Games } from './games';
import { Game } from './game';

@Injectable()
export class GamesService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  getHeroesForGame(id: number) {
    return this.http.get<Games>(this.apiUrl + 'games/' + id).pipe(catchError(this.handleError));
  }

  getGames() {
    return this.http.get<Game[]>(this.apiUrl + 'games').pipe(catchError(this.handleError));
  }

  updateGames(game: Game) {
    return this.http.post(this.apiUrl + 'games', game).pipe(catchError(this.handleError));
  }
}
