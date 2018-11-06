import { createPlayer } from "./player";
import { createEnemy } from "./enemy";
import { setupListeners } from "./inputManager";
import preload from "./preload";

let wall = null;

export default function() {
this.add.image(400, 300, "background")
wall = this.physics.add.staticGroup();
wall.create(400, 200, 'walls');
wall.create(400, 400, 'walls');
wall.create(400, 200, 'walls');
wall.create(100, 100, 'walls');
const enemy = createEnemy(this);
const player = createPlayer({ scene: this, enemy });
setupListeners(this);
this.physics.add.collider(enemy, wall);
this.physics.add.collider(player, wall)

}