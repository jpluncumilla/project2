module.exports = function(sequelize, DataTypes) {
  var House = sequelize.define("House", {
    // Giving the House model a name of type STRING
    address: DataTypes.STRING,
    point: {
      type: DataTypes.GEOMETRY("POINT"),
      allowNull: false
    }
  });

  House.associate = function(models) {
    // Associating House with People
    // When a House is deleted, also delete any associated People
    House.hasMany(models.People, {
      onDelete: "cascade"
    });
  };
  return House;
};
