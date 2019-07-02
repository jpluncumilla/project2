module.exports = function(sequelize, DataTypes) {
  var People = sequelize.define("People", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pets: DataTypes.BOOLEAN,
    disability: DataTypes.STRING,
    picture: {
      type: DataTypes.BLOB("long")
    }
  });
  People.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    People.belongsTo(models.House, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return People;
};
