import { ISkill } from './skill';
import { Injectable } from '@angular/core';

@Injectable()
export class SkillsService {
  getSkills(heroId) {
    const heroSkills = HERO_SKILLS.filter(element => heroId === element.heroId);
    heroSkills.map(x => Object.assign(x, SKILLS.find(y => y.skillId === x.skillId)));
    return heroSkills;
  }

  updateHeroSkills(currentHeroSkills) {
    HERO_SKILLS.map(function(x) {
      delete x.skillName;
      const result = currentHeroSkills.filter(a1 => a1.skillId === x.skillId && a1.heroId === x.heroId);
      if (result.length > 0) {
        x.value = Number(result[0].value);
      }
      return x;
    });
  }
}
// TO DO: mistrz gry ma mozliwosc dodania do gry wybranych skili z listy

const SKILLS: ISkill[] = [
  {
    skillId: 1,
    skillName: 'shooting',
  },
  {
    skillId: 2,
    skillName: 'flying',
  },
  {
    skillId: 3,
    skillName: 'Dancing',
  },
];

const HERO_SKILLS: any[] = [
  {
    skillId: 2,
    heroId: 2,
    value: 34,
  },
  {
    skillId: 1,
    heroId: 1,
    value: 15,
  },

  {
    skillId: 3,
    heroId: 1,
    value: 34,
  },
];
