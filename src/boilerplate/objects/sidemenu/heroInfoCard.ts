import { Hero } from "../hero";
import { GameScene } from "../../scenes/game";

export class HeroInfoCard {
    constructor(scene: GameScene, hero: Hero, x:number, y: number) {
        // super(scene, x, y, null, null);

        let rt = scene.add.renderTexture(x, y, hero.width, hero.height);
        rt.setScale(hero.scale * 2);
        rt.draw(hero.texture.key);
        // this.setTexture('heroInfoCard');
        // this.setScale(0.3);        
        // scene.add.existing(this);
    }
}