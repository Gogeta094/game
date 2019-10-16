import { GameScene } from "../scenes/game";
import { Checkpoint } from "./checkpoint";
import { SelectedHeroOverlay } from "./selectedHeroOverlay";
import { Creature } from "./creature";

export class Hero extends Creature {    
    private _selectionOverlay: SelectedHeroOverlay;  
    public isSelected: boolean = false;

    constructor (scene : GameScene, startingCheckpoint: Checkpoint, hp: number, dmg: number)
    {
        super(scene, startingCheckpoint, hp, dmg);

        this.setTexture('hero');
        this.setScale(0.1);

        scene.add.existing(this);

        this._selectionOverlay = new SelectedHeroOverlay(scene, this);
    }

    public MoveTo(checkpoint: Checkpoint): void{
        this.checkpoint = checkpoint;
        this.setPosition(this.checkpoint.x, this.checkpoint.y);
        this._selectionOverlay.updatePosition();
    }

    public Select() {
        this.isSelected = true;
        this._selectionOverlay.activate();
    }
}