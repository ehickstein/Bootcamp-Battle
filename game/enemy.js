let enemy = null;
let physicsGroup = null;

export const createEnemy = scene => {
  physicsGroup = scene.physics.add.group({
    // Initial angular speed of 60 degrees per second.
    // Drag reduces it by 5 degrees/s per second, thus to zero after 12 seconds.
    bounceX: 1,
    bounceY: 1,
    collideWorldBounds: true,
    dragX: 40,
    dragY: 40
  });
  enemy = scene.add.sprite(200, 300, "mushroom");
  enemy.health = 100;
  physicsGroup.add(enemy);
  
  return enemy;
  // }
};
