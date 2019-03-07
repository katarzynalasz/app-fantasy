import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { BaseService } from "../base.service";
import { Games } from "./games";

@Injectable()
export class GamesService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  getHeroesForGame(id: number) {
    return this.http
      .get<Games>(this.apiUrl + "games/" + id)
      .pipe(catchError(this.handleError));
  }

  getGames() {
    return this.http
      .get(this.apiUrl + "games")
      .pipe(catchError(this.handleError));
  }
}
