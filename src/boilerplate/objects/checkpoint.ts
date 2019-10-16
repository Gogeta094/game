import { GameScene } from "../scenes/game";
import { Monster } from "./monster";
import { Creature } from "./creature";

export class Checkpoint extends Phaser.GameObjects.Sprite {   
    public creature: Creature;

    constructor(scene: GameScene, x: number, y: number){
        super(scene, x, y, null, null);
      
        this.setTexture('checkpoint');
        scene.add.existing(this);
    }

    public placeCreature(creature: Creature) {
        this.creature = creature;
    }

    public hasCreature(): boolean {
        return this.creature !== null && this.creature !== undefined;
    }

    update(){

    }
}