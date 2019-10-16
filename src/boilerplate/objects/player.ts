import { Hero } from "./hero";
import { GameScene } from "../scenes/game";
import { Creature } from "./creature";

export class Player {
    public Heroes: Hero[] = [];    

    constructor(private scene: GameScene){

    }

    public addHero(hero: Hero): void {
        this.Heroes.push(hero);
        this.scene.add.existing(hero);
    }

    public selectHero(hero: Hero): void {
        this.Heroes = this.Heroes.map(hero => {
            hero.isSelected = false;
            return hero;
        })

        hero.Select();
    }

    public getSelectedHero(): Hero {
        return this.Heroes.filter(h => h.isSelected)[0];
    }    

    public isAlliedCreature(creature: Creature) {
        return this.Heroes.some(h => h == creature);
    }
}