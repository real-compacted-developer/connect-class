module.exports = (sequelize, DataTypes) => {
  return sequelize.define("StudyGroup", {
    title: {
      type: DataTypes.STRING(100),
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    people: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValues: 1,
    },
    limitCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValues: 6,
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