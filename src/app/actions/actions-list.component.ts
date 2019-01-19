import { HeroesService } from './../heroes/heroes.service';
import { SkillsService } from './../skills/skills.service';
import { ActionsService } from './actions.service';
import { Component, OnInit } from '@angular/core';
import { ILocation } from 'selenium-webdriver';
import { ActivatedRoute } from '@angular/router';
import { IHero } from '../heroes/hero';

@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.css']
})
export class ActionsListComponent implements OnInit {
  private sub: any;
  private parentRouteId: number;
  heroConditionalActions: any;
  currentHeroSkills: any;
  actionsLog = [];
  showLogs = false;


  constructor( private actionsService: ActionsService,
    private skillsService: SkillsService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.parentRouteId = +params["id"];
    });

    this.currentHeroSkills = this.skillsService.getSkills(this.parentRouteId);
    this.heroConditionalActions = this.actionsService.getConditionalActions(this.currentHeroSkills);
  }

  logRollDice(action) {
      const rollResult = this.rollDices(1, 100, 0);
     const actionSucceeded = action.value > rollResult ? 'true' : 'false';
     action.actionSucceeded = actionSucceeded;
     const newAction = Object.assign({}, action);
     this.actionsLog.push(newAction);
     console.log(newAction)
     this.showLogs = true;
  }

  rollDices(dicesQuantity: number, diceType: number, modifier: number) {
    const min = 1;
    let sum = 0;
    for (let i = 0; i < dicesQuantity; i++) {
      const result =  Math.floor(Math.random() * (diceType - min + 1 ) + min);
      sum += result;
    }
    sum += modifier;
    return sum;
  }
}

