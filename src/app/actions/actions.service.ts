import { Injectable } from '@angular/core';

@Injectable()

export class ActionsService {
    getConditionalActions(currentHeroSkills) {
        const conditionalActions = ACTIONS.filter(element => !!element.assignSkillId);
        const result =  conditionalActions.map(x => Object.assign(x, currentHeroSkills.find(y => (y.skillId === x.assignSkillId) ));
        return result;
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
    }
];


