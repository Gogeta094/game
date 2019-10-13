import { GameScene } from "../../scenes/game";
import { Hero } from "../hero";
import { HeroInfoCard } from "./heroInfoCard";

export class SideMenu {
    private x: number = 0;
    private y: number = 0;
    private width: number = 150;

    constructor(private scene: GameScene) {
        let graphics = scene.add.graphics();
        let layout = new Phaser.Geom.Rectangle(this.x, this.y, this.width, scene.game.canvas.height);
        graphics.fillStyle(0xCFCFCF);
        graphics.fillRectShape(layout);
    }
    
    displaySelectedHeroCard(selectedHero: Hero): void {
        let infoCard = new HeroInfoCard(this.scene, selectedHero, 25 , this.y + 10);        
    }
}