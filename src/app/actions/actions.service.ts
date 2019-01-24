import { Injectable } from '@angular/core';
import { IActionListSettings, IAction } from './action';

@Injectable()

export class ActionsService {
    getConditionalActions(currentHeroSkills) {
        const conditionalActions = ACTIONS.filter(element => !!element.assignSkillId);
        const arr = [];
        conditionalActions.map(function(x) {
            const result = currentHeroSkills.find(a1 => ((a1.skillId === x.assignSkillId)));
            if (typeof result === 'object') {arr.push( Object.assign(x, result)); }
        });
        return arr;
    }

    getActionsSettings(currentHeroSkills) {
        const arr = [];
        ACTION_LIST_SETTINGS.map(function(x) {
            const result = currentHeroSkills.find(a1 => ((a1.skillId === x.assignSkillId)));
            if (typeof result === 'object') {arr.push( Object.assign(x, result)); }
        });
        return arr;
    }

    refreshActionsSettings(heroId) {
        return  ACTION_LIST_SETTINGS.filter(element => element.heroId === heroId);
    }

    addAction(formValues, heroId) {
        const action: IActionListSettings = {
            actionId: ACTION_LIST_SETTINGS.length + 1,
            actionName: formValues.actionName,
            dicesQuantity: +formValues.dicesQuantity,
            diceType: +formValues.diceType,
            assignSkillId: +formValues.assignSkillId,
            heroId: heroId
        };
        ACTION_LIST_SETTINGS.push(action);
    }

    updateActionsStatistics(currentActionsSettings) {
        currentActionsSettings.forEach(element => {
            element.dicesQuantity = Number(element.dicesQuantity);
        });

        ACTION_LIST_SETTINGS.forEach(element => {
          currentActionsSettings.forEach(item => {
              if (item.actionId === element.actionId && item.heroId === element.heroId) {
                    Object.assign(element, item);
              }
          });
      });
      return ACTION_LIST_SETTINGS;
    }
}

const ACTIONS: IAction[] = [
    {
        actionId: 1,
        actionName: 'Cast a spell',
        assignSkillId: null
        },
    {
        actionId: 2,
        actionName: 'Use an object',
        assignSkillId: 1
    },
    {
        actionId: 3,
        actionName: 'Shoot a wolf',
        assignSkillId: 3
    }
];

const ACTION_LIST_SETTINGS: IActionListSettings[] = [
    {
        actionId: 1,
        actionName: 'New action type',
        dicesQuantity: 2,
        diceType: 2,
        assignSkillId: 1,
        heroId: 1
    },
    {
        actionId: 2,
        actionName: 'New action type 2',
        dicesQuantity: 3,
        diceType: 5,
        assignSkillId: 3,
        heroId: 1
    },
    {
        actionId: 3,
        actionName: 'New action type 3',
        dicesQuantity: 8,
        diceType: 4,
        assignSkillId: 2,
        heroId: 2
    }
];

