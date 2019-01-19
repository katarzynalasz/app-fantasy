import { Injectable } from '@angular/core';

@Injectable()

export class ActionsService {
    getConditionalActions(currentHeroSkills) {
        const conditionalActions = ACTIONS.filter(element => !!element.assignSkillId);
            // console.log(currentHeroSkills)

            // console.log(conditionalActions)
            var arr =[];
            conditionalActions.map(function(x) {
                const result = currentHeroSkills.find(a1 => ((a1.skillId === x.assignSkillId)));
                console.log(result)
                if (typeof result === 'object') {arr.push( Object.assign(x,result))}
            });
            console.log(arr)
            return arr;


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


