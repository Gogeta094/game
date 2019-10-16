import { GameScene } from "../scenes/game";

import { Checkpoint } from "./checkpoint";
import { Creature } from "./creature";

export class Monster extends Creature {  

    constructor (scene : GameScene, checkpoint: Checkpoint, hp: number, dmg: number)
    {
        super(scene, checkpoint, hp, dmg);       

        this.setTexture('monster');
        
        this.setPosition(checkpoint.x, checkpoint.y);       
        this.setScale(0.3);

        scene.add.existing(this);        
    }
}