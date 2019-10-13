import { GameScene } from "../scenes/game";

export class Checkpoint extends Phaser.GameObjects.Sprite {   

    constructor(scene: GameScene, x: number, y: number){
        super(scene, x, y, null, null);
      
        this.setTexture('checkpoint');
        scene.add.existing(this);
    }

    update(){

    }
}