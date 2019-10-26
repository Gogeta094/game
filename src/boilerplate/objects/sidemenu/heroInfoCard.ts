import { Hero } from "../hero";
import { GameScene } from "../../scenes/game";

export class HeroInfoCard {
    private hpText: Phaser.GameObjects.Text;
    private dmgText: Phaser.GameObjects.Text;

    constructor(private scene: GameScene, hero: Hero, private x:number, private y: number) {
        let rt = this.scene.add.renderTexture(this.x, this.y, hero.width, hero.height);
        rt.setScale(hero.scale * 2);
        rt.draw(hero.texture.key);

        this.hpText = this.scene.add.text(this.x, this.y + rt.y + rt.height * rt.scale + 10, `HP: ${hero.hp}`, {color: "#000000"});
        this.dmgText = this.scene.add.text(this.x, this.y + this.hpText.y + this.hpText.height, `Damage: ${hero.damage}`,  {color: "#000000"} );
    }

    public updateHeroInfo(hero: Hero) {
        this.hpText.setText(`HP: ${hero.hp}`);
        this.dmgText.setText(`Damage: ${hero.damage}`)
    }
}