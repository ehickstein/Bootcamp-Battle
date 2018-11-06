import Phaser from "phaser";
import create from "./createScene.js";
import update from "./update.js";
import preload from "./preload.js";
const engineConfig = {
  type: Phaser.AUTO,
  width: 850,
  height: 499,
  parent: 'gameWindow',
  physics: {
    default: "arcade",
    arcade: {
      // gravity: { y: 200 },
    }
  },
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(engineConfig);
