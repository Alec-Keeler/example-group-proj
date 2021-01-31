'use strict';
module.exports = (sequelize, DataTypes) => {
  const Airport = sequelize.define('Airport', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    cityId: DataTypes.INTEGER
  }, {});
  Airport.associate = function(models) {
    Airport.belongsTo(models.City, { foreignKey: 'cityId' })
  };
  return Airport;
};