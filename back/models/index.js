const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/database.json")[env];
const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require("./userModel")(sequelize, Sequelize);
db.StudyGroup = require("./studyGroupModel")(sequelize, Sequelize);
db.StudyData = require("./studyDataModel")(sequelize, Sequelize);
db.Slide = require("./slideModel")(sequelize, Sequelize);
db.Question = require("./questionModel")(sequelize, Sequelize);
db.studyMember = require("./studyMemberModel")(sequelize, Sequelize);

/** 1:N Study : Study_data
 * 스터디에 쓰이는 스터디 자료
 * */
db.StudyGroup.hasMany(db.StudyData, { foreignKey: "studyName" });
db.StudyData.belongsTo(db.StudyGroup, { foreignKey: "studyName" });

/** 1:N Study_data : Slide
 * 각 스터디 자료의 슬라이드
 * */
db.StudyData.hasMany(db.Slide);
db.Slide.belongsTo(db.StudyData);

/** 1:N User : Question 
 * writer(글쓴이(닉네임)를 얻어오기 위해) 
 * */
db.User.hasMany(db.Question, { foreignKey: "writer" });
db.Question.belongsTo(db.User, { foreignKey: "writer" });

/** 1:N Slide : Question 
 * slide 별로 질문 하므로
 * */
db.Slide.hasMany(db.Question);
db.Question.belongsTo(db.Slide);

/** N:M User : Study (User_list) */
db.User.belongsToMany(db.StudyGroup, { through: db.studyMember, foreignKey: "nickname" });
db.StudyGroup.belongsToMany(db.User, { through: db.studyMember, foreignKey: "studyTitle" });

module.exports = db;