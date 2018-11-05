'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    userId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
    },
    score: DataTypes.INTEGER
  }, {});
  Game.associate = function(models) {
    Game.hasMany(models.Enemy, {
      onDelete: "cascade"
    });
  };
  return Game;
};
