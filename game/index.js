import Phaser from "phaser";
import create from "./createScene.js";
import update from "./update.js";
import preload from "./preload.js";
const engineConfig = {
  type: Phaser.AUTO,
  width: 1200,
  height: 499,
  parent: 'gameWindow',
  physics: {
    default: "arcade",
    arcade: {
      // gravity: { y: 200},
    }
    
  },
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(engineConfig);
$(document).ready(function() {
          var timer=0;
          var gameEnd=false;
            var gameTimer = setInterval(myTimer, 1000);
            function myTimer() {
              timer++;
            
              if (gameEnd===false) {
                console.log("time is"+timer);
              };
              if(gameEnd===true) {
                clearInterval(myTimer)
                console.log("The game is over and your time is: "+timer)
                var localUserId = localStorage.getItem("userId");
                $.ajax({
                  method: "GET",
                  url: "/game",
                  data: {userId: localUserId}
                }).then(getResult => {
                  $.ajax({
                    method: "PUT",
                    url: "/time",
                    data: {time: timer} && {gameId: getResult.id}
                  }).then(putResult => {
                    console.log(putResult);
                  });
                });
              }
            };
              

        }) 
            
