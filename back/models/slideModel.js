module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Slide", {
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    createdAt: {
      type: "TIMESTAMP",
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false
    },
  }, {
    freezeTableName: true,
  });
};