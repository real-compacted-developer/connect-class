module.exports = function (socket) {
  const SOCKET_TYPE = require("../constants/socket-type");
  const RoomModel = require("../models/index").StudyGroup;
  const StudyMemeberModel = require("../models/index").studyMember;
  const sendStoredDrawData = require("../services/draw").sendStoredDrawData;

  const Sequelize = require("sequelize");
  const Op = Sequelize.Op;

  socket.on(SOCKET_TYPE.JOIN, async (data) => {
    const { roomId, userId } = data;

    const room = await RoomModel.findOne({
      where: {
        title: roomId,
      },
    });
    if (!room) {
      throw new Error("스터디 방이 존재하지 않습니다.");
    }

    await StudyMemeberModel.create({
      nickname: userId,
      studyTitle: roomId,
    });

    socket.join(roomId);

    const slideId = 1; // TODO: 첫번째 슬라이드 아이디를 가져오는 코드로 대체
    sendStoredDrawData(socket, slideId);
  });

  socket.on(SOCKET_TYPE.EXIT, async (data) => {
    const { roomId, userId } = data;

    const room = await RoomModel.findOne({
      where: {
        title: roomId,
      },
    });
    if (!room) {
      throw new Error("스터디 방이 존재하지 않습니다.");
    }

    await StudyMemeberModel.destroy({
      where: {
        [Op.and]: [{ nickname: userId }, { studyTitle: roomId }],
      },
    });

    socket.leave(roomId);
  });

  socket.on(SOCKET_TYPE.UPDATE_USER_LIST, (data) => {
    // TODO: 유저 목록 업데이트
  });
};
