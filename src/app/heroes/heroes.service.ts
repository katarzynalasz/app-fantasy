import { Injectable } from '@angular/core';
import { IHero } from './hero';

@Injectable()

export class HeroesService {

    addHero(formValues) {
        const Hero: IHero = {
            heroId: HEROES.length + 1,
            heroName: formValues.heroName
        };
        HEROES.push(Hero);
    }

    getHeroes() {
     return HEROES;
    }

    getHero(id: number) {
        return HEROES.find(hero => hero.heroId === id);
    }


}

const HEROES: IHero[] = [
        {
           heroId: 1,
           heroName: 'dwarf'
        }
        ,
        {
            heroId: 2,
            heroName: 'elf'
        }
];
