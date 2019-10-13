import { Hero } from "../hero";
import { GameScene } from "../../scenes/game";

export class HeroInfoCard {
    constructor(scene: GameScene, hero: Hero, x:number, y: number) {
        // super(scene, x, y, null, null);

        let rt = scene.add.renderTexture(x, y, hero.width, hero.height);
        rt.setScale(hero.scale * 2);
        rt.draw(hero.texture.key);

        let hpText = scene.add.text(x, y + rt.y + rt.height * rt.scale + 10, `HP: ${hero.hp}`, {color: "#000000"});
        let dmgText = scene.add.text(x, y + hpText.y + hpText.height, `Damage: ${hero.damage}`,  {color: "#000000"} );
    }
}