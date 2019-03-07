import { GamesService } from './games.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  games;

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.gamesService.getGames().subscribe(x => {
      this.games = x;
    });
  }
}
