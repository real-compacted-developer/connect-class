module.exports = function (socket) {
  const SOCKET_TYPE = require("../constants/socket-type");
  const RoomModel = require("../models/index").StudyGroup;
  const StudyMemeberModel = require("../models/index").studyMember;

  const { initStoredDrawData } = require("../services/draw");
  const { SlideInstance } = require("../app");

  const Sequelize = require("sequelize");
  const Op = Sequelize.Op;

  socket.on(SOCKET_TYPE.JOIN, async (data) => {
    const { roomId, userId } = data;

    // const room = await RoomModel.findOne({
    //   where: {
    //     title: roomId,
    // //   },
    // // });
    // if (!room) {
    //   throw new Error("스터디 방이 존재하지 않습니다.");
    // }

    // await StudyMemeberModel.create({
    //   nickname: userId,
    //   studyTitle: roomId,
    // });

    socket.join(roomId);

    console.log(`${userId}가 ${roomId} 스터디룸에 입장하였습니다.`);

    setTimeout(() => {
      initStoredDrawData(socket, SlideInstance.getSlideIndex(), userId);
    }, 100);
  });

  socket.on(SOCKET_TYPE.EXIT, async (data) => {
    const { roomId, userId } = data;

    // const room = await RoomModel.findOne({
    //   where: {
    //     title: roomId,
    //   },
    // });
    // if (!room) {
    //   throw new Error("스터디 방이 존재하지 않습니다.");
    // }

    // await StudyMemeberModel.destroy({
    //   where: {
    //     [Op.and]: [{ nickname: userId }, { studyTitle: roomId }],
    //   },
    // });

    socket.leave(roomId);

    console.log(`${userId}가 ${roomId} 스터디룸에 퇴장하였습니다.`);
  });

  socket.on(SOCKET_TYPE.UPDATE_USER_LIST, (data) => {
    // TODO: 유저 목록 업데이트
  });
};
