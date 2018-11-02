'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    gameID: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {});
  Game.associate = function(models) {
    Game.hasMany(models.Enemy, {
      onDelete: "cascade"
    });
  };
  return Game;
};