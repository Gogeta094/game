import { Checkpoint } from "./checkpoint";
import { GameScene } from "../scenes/game";

export class Creature extends Phaser.GameObjects.Sprite {

    get hp():number {
        return this._hp;
    }

    get damage(): number {
        return this._dmg;
    }

    get isAlive(): boolean {
        return this._hp > 0;
    }  

    constructor (scene : GameScene, public checkpoint: Checkpoint, private _hp: number, private _dmg: number)
    {
        super(scene, checkpoint.x, checkpoint.y, null, null);
        checkpoint.placeCreature(this);

        scene.add.existing(this);
    }

    attack(creature: Creature) {
        creature.takeDamage(this.damage);
    }

    takeDamage(damage: number) {
        this._hp -= damage;
    }
}