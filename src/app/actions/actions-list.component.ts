import { SkillsService } from './../skills/skills.service';
import { ActionsService } from './actions.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.scss'],
})
export class ActionsListComponent implements OnInit {
  private parentRouteId: number;
  actionsLog = [];
  showLogs = false;
  completeActionsList;
  constructor(private actionsService: ActionsService, private skillsService: SkillsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.parentRouteId = +params['id'];
    });
    const currentHeroSkills = this.skillsService.getSkills(this.parentRouteId);
    const heroConditionalActions = this.actionsService.getConditionalActions(currentHeroSkills);
    const actionSettings = this.actionsService.getActionsSettings(currentHeroSkills);
    this.completeActionsList = heroConditionalActions.concat(actionSettings);
  }

  logRollDice(action) {
    this.showLogs = true;

    if (!action.hasOwnProperty('diceType')) {
      // czy tak mogę??
      const rollResult = this.rollDices(1, 100, 0);
      const actionSucceeded = action.value < rollResult ? 'true' : 'false';
      action.actionSucceeded = actionSucceeded;
      action.rollResult = rollResult;
    } else {
      const rollResult = this.rollDices(action.dicesQuantity, action.diceType, 0) + action.value;
      action.rollResult = rollResult;
    }
    const newAction = Object.assign({}, action);
    this.actionsLog.push(newAction);
  }

  rollDices(dicesQuantity: number, diceType: number, modifier: number): number {
    const min = 1;
    let sum = 0;
    for (let i = 0; i < dicesQuantity; i++) {
      const result = Math.floor(Math.random() * (diceType - min + 1) + min);
      sum += result;
    }
    sum += modifier;
    return sum;
  }
}
