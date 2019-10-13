import { GameScene } from "../scenes/game";

import { Checkpoint } from "./checkpoint";

export class Monster extends Phaser.GameObjects.Sprite {
    constructor (scene : GameScene, checkpoint: Checkpoint)
    {
        super(scene, checkpoint.x, checkpoint.y, null, null);
        // this.currentCheckpoint = checkpoint;

        this.setTexture('hero');
        this.setScale(0.1);
        this.setPosition(checkpoint.x, checkpoint.y);       

        scene.add.existing(this);
    }
}