import { Checkpoint } from "./checkpoint";
import { GameScene } from "../scenes/game";

export class Path extends Phaser.GameObjects.Graphics {
    public From: Checkpoint;
    public To: Checkpoint;

    constructor(scene : GameScene, fromCheckpoint: Checkpoint, toCheckpoint: Checkpoint){
        super(scene, {x: 0, y: 0});

        this.From = fromCheckpoint;
        this.To = toCheckpoint;
        
        this.lineStyle(8, 0x999999, 1.0);
        this.beginPath();
        this.moveTo(this.calculatePathStartXPoint(fromCheckpoint, toCheckpoint), this.calculatePathStartYPoint(fromCheckpoint, toCheckpoint));
        this.lineTo(this.calculatePathEndXPoint(fromCheckpoint, toCheckpoint), this.calculatePathEndYPoint(fromCheckpoint, toCheckpoint));
        this.closePath();
        this.strokePath();

        scene.add.existing(this);
    }

    private calculatePathStartXPoint(fromCheckpoint: Checkpoint, toCheckpoint: Checkpoint): number {
        if (fromCheckpoint.x < toCheckpoint.x){
            return fromCheckpoint.x + fromCheckpoint.width / 2;
        }        
    }

    private calculatePathStartYPoint(fromCheckpoint: Checkpoint, toCheckpoint: Checkpoint): number {
        if (fromCheckpoint.y < toCheckpoint.y){
            return fromCheckpoint.y + fromCheckpoint.height / 2;
        }
        if (fromCheckpoint.y > toCheckpoint.y){
            return fromCheckpoint.y - fromCheckpoint.height / 2;
        }
        if (fromCheckpoint.y === toCheckpoint.y){
            return fromCheckpoint.y;
        }        
    }

    private calculatePathEndXPoint(fromCheckpoint: Checkpoint, toCheckpoint: Checkpoint): number {
        if (fromCheckpoint.x < toCheckpoint.x){
            return toCheckpoint.x - toCheckpoint.width / 2
        }        
    }

    private calculatePathEndYPoint(fromCheckpoint: Checkpoint, toCheckpoint: Checkpoint): number {
        if (fromCheckpoint.y < toCheckpoint.y){
            return toCheckpoint.y - toCheckpoint.height / 2;
        }
        if (fromCheckpoint.y > toCheckpoint.y){
            return toCheckpoint.y + toCheckpoint.height / 2;
        }
        if (fromCheckpoint.y === toCheckpoint.y){
            return toCheckpoint.y;
        }        
    }
}