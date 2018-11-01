//Defining the User model
'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    charname: DataTypes.STRING,
    class: DataTypes.STRING,
    stat1: DataTypes.INTEGER,
    stat2: DataTypes.INTEGER,
    stat3: DataTypes.INTEGER
  }, {});
  return User;
};
