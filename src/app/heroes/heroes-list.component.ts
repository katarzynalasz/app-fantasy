import { GamesService } from './../games/games.service';
import { HeroesService } from './heroes.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Games } from '../games/games';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  gameWrapper: Games;
  gameId: number;
  RACES = ['Dragonborn', 'Dwarf', 'Eladrin', 'Elf', 'Gnome', 'Half-elf', 'Half-orc', 'Halfling', 'Human', 'Tiefling'];
  GENDER = ['Men', 'Women'];
  isNewHeroAdded: boolean = false;
  selectedGender: string;
  selectedRace: string;

  constructor(
    private heroesService: HeroesService,
    private toastr: ToastrService,
    private gameService: GamesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gameId = +params['id'];
    });
    this.getGame();
  }

  getGame() {
    this.gameService.getGame(this.gameId).subscribe(x => {
      this.gameWrapper = x;
    });
  }

  toggleAddHero() {
    this.isNewHeroAdded = !this.isNewHeroAdded;
  }

  addHero(formValues) {
    const hero = new Hero({
      name: formValues.name,
      gameId: this.gameId,
      race: this.selectedRace,
      gender: this.selectedGender,
    });
    this.heroesService.addHero(hero).subscribe(x => {
      this.gameWrapper.heroes.push(x);
      this.toastr.success('New hero added');
    });
  }

  deleteHero(heroId: number) {
    this.heroesService.deleteHero(heroId).subscribe(x => {
      this.getGame();
      this.toastr.success('Hero deleted');
    });
  }
}
