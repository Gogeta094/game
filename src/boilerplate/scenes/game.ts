import { Hero } from "../objects/hero";
import { Map } from "../objects/map";
import { Player } from "../objects/player";
import { SideMenu } from "../objects/sidemenu/sidemenu";

export class GameScene extends Phaser.Scene
{   
    constructor() {
        super({key: "GameScene"});        
    }

    preload() {
        this.load.image('hero', "./src/boilerplate/assets/hero.png");
        this.load.image('checkpoint', "./src/boilerplate/assets/checkpoint.png");
        this.load.image('heroInfoCard', "./src/boilerplate/assets/heroInfo.png")
    }

    create() {
        let sideMenu = new SideMenu(this);
        let map = Map.GenerateTestMap(this);      
        var player = new Player(this);       

        var hero = new Hero(this, map.Checkpoints[0]);
        player.addHero(hero);

        map.Checkpoints.forEach(element => {
            element.setInteractive()
                .on('pointerdown', function(pointer, localX, localY, event){
                    let selectedHero = player.getSelectedHero();
                    if (selectedHero && map.HasPath(hero.currentCheckpoint, element)){
                        selectedHero.MoveTo(element);
                    }
            });
        });

        player.Heroes.forEach(h => {
            h.setInteractive()
            .on('pointerdown', function(pointer, localX, localY, event){
                player.selectHero(h);
                sideMenu.displaySelectedHeroCard(h);
            });
        });
    }
}