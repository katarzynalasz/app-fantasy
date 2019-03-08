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
  selectedGameId: number;

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.getGames();
  }

  newGameForm = new FormGroup({
    name: new FormControl(''),
  });

  editGameForm = new FormGroup({
    name: new FormControl(''),
  });

  getGames() {
    this.gamesService.getGames().subscribe(x => {
      this.games = x;
    });
  }

  enableGameEdit(game: Game) {
    this.selectedGameId = game.id;
    this.editGameForm.patchValue({
      name: game.name,
    });
  }

  addNewGame() {
    this.gamesService.addGame(this.newGameForm.value).subscribe(_ => {
      this.getGames();
    });
  }

  editGame(game: Game) {
    game['name'] = this.editGameForm.value.name;
    this.gamesService.updateGames(game).subscribe(_ => {
      this.getGames();
      this.selectedGameId = -1;
    });
  }

  deleteGame(gameId: number) {
    this.gamesService.deleteGame(gameId).subscribe(_ => {
      this.getGames();
    });
  }
}
