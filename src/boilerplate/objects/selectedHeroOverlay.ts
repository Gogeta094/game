import { GameScene } from "../scenes/game";
import { Hero } from "./hero";

export class SelectedHeroOverlay {
    private _graphics: Phaser.GameObjects.Graphics;    
    private _circle: Phaser.Geom.Circle;

    constructor(private scene: GameScene, private hero: Hero) {
        this._graphics = this.scene.add.graphics();        
    }

    public activate(): void {
        this._circle = new Phaser.Geom.Circle(this.hero.x, this.hero.y, this.hero.width * this.hero.scale);
        this._graphics.lineStyle(1, 0x00FF00);
        this._graphics.strokeCircleShape(this._circle)
    }

    public deactivate(): void {
        this._graphics.clear();
    }

    public updatePosition(): void {
        this._graphics.clear();        
        this._circle = new Phaser.Geom.Circle(this.hero.x, this.hero.y, this.hero.width * this.hero.scale);
        this._graphics.lineStyle(1, 0x00FF00);
        this._graphics.strokeCircleShape(this._circle);
    } 
}