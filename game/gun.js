import Phaser from "phaser";

var $ = require("jquery");

let globalScene = null;

const SPEED = 500;

export const createGun = scene => {
  globalScene = scene;
};

export const shootGun = ({ fromX, fromY, toX, toY, enemy }) => {
  // draw the bullet
  const bullet = globalScene.add.sprite(fromX, fromY, "bullet");
  const physicsGroup = globalScene.physics.add.group({
    // angularDrag: 5,
    // angularVelocity: 60,
    collideWorldBounds: true,
    dragX: 10,
    dragY: 10
  });
  // add bullet to physics group
  physicsGroup.add(bullet);

  // calculate velocity towards the point
  const d = Math.sqrt(Math.pow(toX - fromX, 2) + Math.pow(toY - fromY, 2));
  const velocityX = (SPEED / d) * (toX - fromX);
  const velocityY = (SPEED / d) * (toY - fromY);
  physicsGroup.setVelocity(velocityX, velocityY);
  globalScene.physics.add.collider(enemy, physicsGroup, () => {
    bullet.destroy();
    enemy.health -= 10;

    if (enemy.health <= 0) {
      enemy.destroy();
      var localUserId = localStorage.getItem("userId");
      $.ajax({
        method: "GET",
        url: "/game",
        data: {userId: localUserId}
      }).then(getResult => {
        $.ajax({
          method: "PUT",
          url: "/enemy",
          data: {stat1: enemy.health} && {gameId: getResult.id}
        }).then(putResult => {
          console.log(putResult);
        });
      });
    }
  });

  setTimeout(() => bullet.destroy(), 2000);
  return bullet
};
