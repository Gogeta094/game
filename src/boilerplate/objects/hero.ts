import { GameScene } from "../scenes/game";
import { Checkpoint } from "./checkpoint";
import { SelectedHeroOverlay } from "./selectedHeroOverlay";
import { Creature } from "./creature";

export class Hero extends Creature {    
    private _selectionOverlay: SelectedHeroOverlay;  
    public isSelected: boolean = false;
    private _initialCheckpoint: Checkpoint;
    private _totalHp: number;

    constructor (scene : GameScene, startingCheckpoint: Checkpoint, hp: number, dmg: number)
    {
        super(scene, startingCheckpoint, hp, dmg);
        this._initialCheckpoint = startingCheckpoint;
        this._totalHp = hp;
        this.setTexture('hero');
        this.setScale(0.1);

        scene.add.existing(this);

        this._selectionOverlay = new SelectedHeroOverlay(scene, this);
    }

    public ressurect() : void {
        this.MoveTo(this._initialCheckpoint);
        this._hp = this._totalHp;
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