let wall = null;
let physicsGroup = null
import preload from 'preload.js'
export const createWall = scene => {
    wall = scene.add.sprite('walls', 100, 100, 10, 350 );
    wall = scene.add.sprite('walls', 300, 100, 400, 10 );
    wall = scene.add.sprite('walls', 450, 250, 10, 300);

    return wall
}