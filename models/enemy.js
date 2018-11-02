//Defining the Enemy model
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enemy = sequelize.define('Enemy', {
    name: DataTypes.STRING,
    stat1: DataTypes.INTEGER,
    stat2: DataTypes.INTEGER,
    stat3: DataTypes.INTEGER
  }, {});

  //Defining the association between the Enemy model and the Game model
  Enemy.associate = (models) => {
    Enemy.belongsTo(models.Game, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Enemy;
};
