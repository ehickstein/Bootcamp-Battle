//Defining the Enemy model
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enemy = sequelize.define('Enemy', {
    name: DataTypes.STRING,
    stat1: DataTypes.INTEGER,
    stat2: DataTypes.INTEGER,
    stat3: DataTypes.INTEGER
  }, {});
  return Enemy;
};
