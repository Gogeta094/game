import { Hero } from "../objects/hero";
import { Map } from "../objects/map";
import { Player } from "../objects/player";
import { SideMenu } from "../objects/sidemenu/sidemenu";
import { Monster } from "../objects/monster";
import { Creature } from "../objects/creature";

export class GameScene extends Phaser.Scene
{   
    private _sideMenu: SideMenu;
    private _player: Player;

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
        this._sideMenu = new SideMenu(this);
        let map = Map.GenerateTestMap(this);      
        this._player = new Player(this);       

        var hero = new Hero(this, map.Checkpoints[0], 100, 10);
        this._player.addHero(hero);

        let monster = new Monster(this, map.Checkpoints[1], 50, 10);

        let self = this;
        map.Checkpoints.forEach(checkpoint => {
            checkpoint.setInteractive()
                .on('pointerdown', function(pointer, localX, localY, event){
                    let selectedHero = this._player.getSelectedHero();
                    if (selectedHero && map.HasPath(hero.checkpoint, checkpoint)){
                        selectedHero.MoveTo(checkpoint);

                        if (checkpoint.hasCreature && !this._player.isAlliedCreature(checkpoint.creature)) {
                            // fight
                            self.fight(selectedHero, checkpoint.creature);      
                            
                            if (!checkpoint.creature.isAlive) {
                                checkpoint.creature.destroy();
                            }

                            if (!selectedHero.isAlive){
                                selectedHero.ressurect();
                            }
                        }
                    }
            });
        });

        this._player.Heroes.forEach(h => {
            h.setInteractive()
            .on('pointerdown', function(pointer, localX, localY, event){
                this._player.selectHero(h);
                self._sideMenu.displaySelectedHeroCard(h);
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

    public update() {
        this._sideMenu.updateSelectedHeroCardInfo();
    }
}