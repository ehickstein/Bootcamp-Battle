import { createPlayer } from "./player";
import { createEnemy } from "./enemy";
import { setupListeners } from "./inputManager";
import { createWall } from "./walls.js";

export default function() {
  const enemy = createEnemy(this);
  const wall = createWall(this);
  createPlayer({ scene: this, enemy, wall });
  setupListeners(this);
}
