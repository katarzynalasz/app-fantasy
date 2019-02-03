import { HeroesService } from './heroes.service';
import { Component, OnInit } from '@angular/core';
import { IHero } from './hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent {
  heroes: IHero[];
  constructor(private heroesService: HeroesService) {
   this.heroesService.getHeroes().subscribe(x => {
    this.heroes = x;
    });
   }

  addHero(formValues) {
    this.heroesService.addHero(formValues).subscribe(x => {
      this.heroes.push(x);
      });
  }

}
