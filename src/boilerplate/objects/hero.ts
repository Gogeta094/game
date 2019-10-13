import { GameScene } from "../scenes/game";
import { Checkpoint } from "./checkpoint";
import { SelectedHeroOverlay } from "./selectedHeroOverlay";

export class Hero extends Phaser.GameObjects.Sprite {
    private _hp: number;
    private _damage: number;
    private _scene: GameScene;
    private _selectionOverlay: SelectedHeroOverlay;

    public currentCheckpoint: Checkpoint;
    public isSelected: boolean = false;

    get hp():number {
        return this._hp;
    }

    get damage(): number {
        return this._damage;
    }

    constructor (scene : GameScene, startingCheckpoint: Checkpoint)
    {
        super(scene, startingCheckpoint.x, startingCheckpoint.y, null, null);
        this._scene = scene;

        this.currentCheckpoint = startingCheckpoint;

        this.setTexture('hero');
        this.setScale(0.1);

        scene.add.existing(this);

        this._selectionOverlay = new SelectedHeroOverlay(scene, this);
    }

    public MoveTo(checkpoint: Checkpoint): void{
        this.currentCheckpoint = checkpoint;
        this.setPosition(this.currentCheckpoint.x, this.currentCheckpoint.y);
        this._selectionOverlay.updatePosition();
    }

    public Select() {
        this.isSelected = true;
        this._selectionOverlay.activate();
    }
}