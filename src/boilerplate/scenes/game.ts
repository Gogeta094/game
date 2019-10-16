import { Hero } from "../objects/hero";
import { Map } from "../objects/map";
import { Player } from "../objects/player";
import { SideMenu } from "../objects/sidemenu/sidemenu";
import { Monster } from "../objects/monster";
import { Creature } from "../objects/creature";

export class GameScene extends Phaser.Scene
{   
    constructor() {
        super({key: "GameScene"});        
    }

    preload() {
        this.load.image('hero', "./src/boilerplate/assets/hero.png");
        this.load.image('checkpoint', "./src/boilerplate/assets/checkpoint.png");
        this.load.image('heroInfoCard', "./src/boilerplate/assets/heroInfo.png")
        this.load.image('monster', "./src/boilerplate/assets/monster.png")
    }

    create() {
        let sideMenu = new SideMenu(this);
        let map = Map.GenerateTestMap(this);      
        var player = new Player(this);       

        var hero = new Hero(this, map.Checkpoints[0], 100, 10);
        player.addHero(hero);

        let monster = new Monster(this, map.Checkpoints[1], 50, 10);

        let self = this;
        map.Checkpoints.forEach(checkpoint => {
            checkpoint.setInteractive()
                .on('pointerdown', function(pointer, localX, localY, event){
                    let selectedHero = player.getSelectedHero();
                    if (selectedHero && map.HasPath(hero.checkpoint, checkpoint)){
                        selectedHero.MoveTo(checkpoint);

                        if (checkpoint.hasCreature && !player.isAlliedCreature(checkpoint.creature)) {
                            // fight
                            self.fight(selectedHero, checkpoint.creature);                            
                        }
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

    private fight(hero: Hero, enemy:Creature) {
        while(hero.isAlive && enemy.isAlive) {
            hero.attack(enemy);
            enemy.attack(hero);
            console.log(`Hero hp - ${hero.hp}. Enemy hp - ${enemy.hp}`);
        }
    }
}