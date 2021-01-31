'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {});
  City.associate = function(models) {
    City.hasMany(models.Airport, { foreignKey: 'cityId' });
  };
  
  return City;
};