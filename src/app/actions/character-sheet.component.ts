import { SkillsService } from './../skills/skills.service';
import { HeroesService } from './../heroes/heroes.service';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {

  currentHeroSkills;
  private parentRouteId: number;

  constructor(private heroesService: HeroesService,
    private route: ActivatedRoute,
    private skillService: SkillsService
    ) {}

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.parentRouteId = +params['id'];
    });
    const heroSkills = this.skillService.getSkills(this.parentRouteId);
    this.currentHeroSkills = heroSkills.map(a => Object.assign({}, a));
  }

  editSkills() {
    this.skillService.updateHeroSkills(this.currentHeroSkills);
  }
}
