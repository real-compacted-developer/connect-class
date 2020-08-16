module.exports = function (io) {
  const SOCKET_TYPE = require("../constants/socket-type");
  const Room = require("../app").RoomInstance;
  const RoomModel = require("../models/index").StudyGroup;
  const StudyMemeberModel = require("../models/index").studyMember;

  const Sequelize = require("sequelize");
  const Op = Sequelize.Op;

  io.on(SOCKET_TYPE.JOIN, async (data) => {
    const { roomId, userId } = data;

    const room = await RoomModel.findOne({
      where: {
        title: roomId,
      },
    });
    if (!room) {
      throw new Error("스터디 방이 존재하지 않습니다.");
    }
    if (!Room.getRoom(roomId)) {
      throw new Error("스터디 방이 존재하지 않습니다.");
    }

    await StudyMemeberModel.create({
      nickname: userId,
      studyTitle: roomId,
    });

    Room.addUser(roomId, userId);
    io.join(roomId);
  });

  io.on(SOCKET_TYPE.EXIT, async (data) => {
    const { roomId, userId } = data;

    const room = await RoomModel.findOne({
      where: {
        title: roomId,
      },
    });
    if (!room) {
      throw new Error("스터디 방이 존재하지 않습니다.");
    }
    if (!Room.getRoom(roomId)) {
      throw new Error("스터디 방이 존재하지 않습니다.");
    }

    await StudyMemeberModel.destroy({
      where: {
        [Op.and]: [{ nickname: userId }, { studyTitle: roomId }],
      },
    });

    Room.deleteUser(roomId, userId);
    io.leave(roomId);
  });

  io.on(SOCKET_TYPE.UPDATE_USER_LIST, (data) => {
    // TODO: 유저 목록 업데이트
  });
};
