import { GamesService } from './games.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Game } from './game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  games: Game[];

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.getGames();
  }

  newGameForm = new FormGroup({
    name: new FormControl(''),
  });

  getGames() {
    this.gamesService.getGames().subscribe(x => {
      this.games = x;
    });
  }

  addNewGame() {
    this.gamesService.updateGames(this.newGameForm.value).subscribe(_ => {
      this.getGames();
    });
  }

  deleteGame(gameId: number) {
    this.gamesService.deleteGame(gameId).subscribe(_ => {
      this.getGames();
    });
  }
}
