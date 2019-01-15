import { HeroesService } from './heroes.service';
import { Component, OnInit } from '@angular/core';
import { IHero } from './hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
  heroes: IHero[];
  constructor(private heroesService: HeroesService) {
    this.heroes = this.heroesService.getHeroes();
   }

  addHero(formValues) {
    this.heroesService.addHero(formValues);
  }

}
