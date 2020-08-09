module.exports = (sequelize) => {
  return sequelize.define("StudyMember", {
  }, {
    freezeTableName: true,
  });
};