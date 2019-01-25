import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkillsService } from '../skills/skills.service';
import { ActionsService } from './actions.service';

@Component({
  selector: 'app-actions-settings',
  templateUrl: './actions-settings.component.html',
  styleUrls: ['./actions-settings.component.scss']
})

export class ActionsSettingsComponent implements OnInit {

  DICES = [
    { value: 1, name: 'k1' },
    { value: 2, name: 'k2', },
    { value: 3, name: 'k3' },
    { value: 4, name: 'k4' },
    { value: 5, name: 'k5' },
    { value: 6, name: 'k6' },
    { value: 7, name: 'k7' },
    { value: 8, name: 'k8' },
    { value: 9, name: 'k9' },
    { value: 10, name: 'k10' }
  ];
  private parentRouteId: number;
  currentHeroSkills;
  currentActionsSettings;

  constructor(private route: ActivatedRoute,
    private skillsService: SkillsService,
    private actionService: ActionsService) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.parentRouteId = +params['id'];
    });
    const heroSkills = this.skillsService.getSkills(this.parentRouteId);
    this.currentHeroSkills = heroSkills.map(a => Object.assign({}, a));
    const actionsSettings = this.actionService.getActionsSettings(this.currentHeroSkills);
    this.currentActionsSettings = actionsSettings.map(a => Object.assign({}, a));
  }

  editActions() {
    this.actionService.updateActionsStatistics(this.currentActionsSettings);
  }

  addAction(formvalues) {
    this.actionService.addAction(formvalues, this.parentRouteId);
    const actionsSettings = this.actionService.refreshActionsSettings(this.parentRouteId);
    this.currentActionsSettings = actionsSettings.map(a => Object.assign({}, a));
  }
}

