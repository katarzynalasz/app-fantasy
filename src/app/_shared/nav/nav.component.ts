import { HeroesService } from './../../heroes/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/games/games';
import { GamesService } from 'src/app/games/games.service';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/heroes/hero';

@Component({
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  gameWrapper: Games;
  hero: Hero;
  gameId: number;
  private heroId: number;
  constructor(private gameService: GamesService, private heroService: HeroesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.gameId = +params['id'];
      this.heroId = +params['id2'];
    });
    this.getGame();
    this.getHero();
  }

  getHero() {
    this.heroService.getHero(this.heroId).subscribe(x => {
      this.hero = x;
    });
  }

  getGame() {
    this.gameService.getGame(this.gameId).subscribe(x => {
      this.gameWrapper = x;
    });
  }
}
