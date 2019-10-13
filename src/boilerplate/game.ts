/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2019 digitsensitive
 * @license      Digitsensitive
 */

import "phaser";
import { GameScene } from "./scenes/game";

// main game configuration
const config: Phaser.Types.Core.GameConfig = {
  width: 1024,
  height: 768,
  type: Phaser.AUTO,
  parent: "game",
  scene: GameScene  
};

// game class
export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

// when the page is loaded, create our game instance
window.addEventListener("load", () => {
  var game = new Game(config);
});
