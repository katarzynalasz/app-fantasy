import { GamesService } from './../games/games.service';
import { HeroesService } from './heroes.service';
import { Component, OnInit } from '@angular/core';
import { IHero } from './hero';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
  heroes;
  gameId;
  constructor(private heroesService: HeroesService,
    private gameService: GamesService,
    private route: ActivatedRoute) {
   }

   ngOnInit() {
      this.route.params.subscribe(params => {
        this.gameId = +params['id'];
      });
      this.gameService.getHeroesForGame(this.gameId).subscribe(x => {
        this.heroes = x.heroes;
      });
   }

  addHero(formValues) {
    this.heroesService.addHero(formValues).subscribe(x => {
      this.heroes.push(x);
      });
  }

}
