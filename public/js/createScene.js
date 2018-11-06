import { createPlayer } from "./player";
import { createEnemy } from "./enemy";
import { setupListeners } from "./inputManager";

export default function() {
  const enemy = createEnemy(this);
  createPlayer({ scene: this, enemy });
  setupListeners(this);
  this.addImage(400,300, "bg.png")
        
	
}
