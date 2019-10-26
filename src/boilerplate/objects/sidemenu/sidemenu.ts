import { GameScene } from "../../scenes/game";
import { Hero } from "../hero";
import { HeroInfoCard } from "./heroInfoCard";

export class SideMenu {
    private x: number = 0;
    private y: number = 0;
    private width: number = 150;
    private heroInfoCard: HeroInfoCard;
    private selectedHero: Hero = null;

    constructor(private scene: GameScene) {
        let graphics = scene.add.graphics();
        let layout = new Phaser.Geom.Rectangle(this.x, this.y, this.width, scene.game.canvas.height);
        graphics.fillStyle(0xCFCFCF);
        graphics.fillRectShape(layout);       
    }
    
    displaySelectedHeroCard(selectedHero: Hero): void {
        this.selectedHero = selectedHero;
        if (!this.heroInfoCard) {
            this.heroInfoCard = new HeroInfoCard(this.scene, selectedHero, 25 , this.y + 10);
        }else {
            this.heroInfoCard.updateHeroInfo(selectedHero);
        }         
    }

    updateSelectedHeroCardInfo() {
        if(this.selectedHero){
            this.heroInfoCard.updateHeroInfo(this.selectedHero);
        }        
    }
}