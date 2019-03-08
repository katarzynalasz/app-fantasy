import { GamesService } from './../games/games.service';
import { HeroesService } from './heroes.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[];
  gameId: number;
  constructor(private heroesService: HeroesService, private gameService: GamesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gameId = +params['id'];
    });
    this.getHeroes();
  }

  getHeroes() {
    this.gameService.getHeroesForGame(this.gameId).subscribe(x => {
      this.heroes = x.heroes;
    });
  }

  addHero(formValues) {
    const hero = new Hero({ name: formValues.name, gameId: this.gameId });
    this.heroesService.addHero(hero).subscribe(x => {
      this.heroes.push(x);
    });
  }

  deleteHero(heroId: number) {
    this.heroesService.deleteHero(heroId).subscribe(x => {
      this.getHeroes();
    });
  }
}
