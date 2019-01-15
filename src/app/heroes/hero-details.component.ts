import { SkillsService } from './skills.service';
import { HeroesService } from './heroes.service';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHero } from './hero';

@Component({
  templateUrl: './hero-details.component.html'
})
export class HeroDetailsComponent implements OnInit {
  hero: IHero;
  getSkills: Array<any>;
  currentHeroSkills;

  
  constructor(private heroesService: HeroesService,
    private route: ActivatedRoute,
    private skillService: SkillsService
    ) {}

  ngOnInit(): void {
    this.hero = this.heroesService.getHero(
      +this.route.snapshot.params['id']);
      this.getSkills = this.skillService.getSkills(this.hero);
      this.currentHeroSkills = this.getSkills.map(a => Object.assign({}, a));
  }

  editSkills() {
    this.skillService.updateHeroSkills(this.currentHeroSkills);
  }
}
