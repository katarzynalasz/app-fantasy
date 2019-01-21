import { Injectable } from '@angular/core';
import { IActionListSettings } from './action';

@Injectable()

export class ActionsService {
    getConditionalActions(currentHeroSkills) {
        const conditionalActions = ACTIONS.filter(element => !!element.assignSkillId);
            var arr =[];
            conditionalActions.map(function(x) {
                const result = currentHeroSkills.find(a1 => ((a1.skillId === x.assignSkillId)));
                console.log(result)
                if (typeof result === 'object') {arr.push( Object.assign(x,result))}
            });
            return arr;
    }

    addAction(formValues) {

        const action: IActionListSettings = {
            actionId: ACTION_LIST_SETTINGS.length + 1,
            actionName: formValues.actionName,
            dicesQuantity: +formValues.dicesQuantity,
            diceType: +formValues.diceType,
            assignSkillId: +formValues.assignSkillId
        };
        ACTION_LIST_SETTINGS.push(action);
        console.log(ACTION_LIST_SETTINGS)
    }
}
const ACTIONS = [
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

const ACTION_LIST_SETTINGS = [
    {
        actionId: 1,
        actionName: 'New action type',
        dicesQuantity: 2,
        diceType: 2,
        assignSkillId: 1
    }
]
