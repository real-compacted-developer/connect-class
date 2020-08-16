module.exports = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    nickname: {
      type: DataTypes.STRING(40),
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    gender: { // m or f
      type: DataTypes.STRING(10),
    },
    age: {
      type: DataTypes.INTEGER,
    },
    birthday: {
      type: DataTypes.DATEONLY
    },
    isPremium: {
      type: DataTypes.BOOLEAN,
      defaultValues: false,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    paranoid: true,
  });
};