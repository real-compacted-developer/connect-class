module.exports = function (io) {
  const crypto = require("crypto");
  const SOCKET_TYPE = require("../constants/socket-type");
  const Room = require("../app").RoomInstance;
  const RoomModel = require("../models/index").StudyGroup;

  io.on(SOCKET_TYPE.CREATE_ROOM, async (data) => {
    const { title, category, password, limitCount, isPremium } = data;

    const room = await RoomModel.findOne({
      where: {
        title,
      },
    });
    if (room) {
      throw new Error("이미 스터디 방이 존재합니다.");
    }

    const salt = crypto.randomBytes(64);
    const encodePassword = crypto.pbkdf2Sync(
      password,
      salt.toString("base64"),
      100000,
      64,
      "sha512"
    );

    await RoomModel.create({
      title,
      category,
      limitCount: parseInt(limitCount, 10),
      isPremium: isPremium === "true",
      people: 0,
      salt: salt.toString("base64"),
      password: encodePassword.toString("base64"),
    });

    Room.addRoom(title, data);

    console.log(`새로운 방 생성: ${JSON.stringify(data)}`);

    io.emit(SOCKET_TYPE.CREATE_ROOM, data);
  });

  io.on(SOCKET_TYPE.DELETE_ROOM, async (data) => {
    const room = await RoomModel.findOne({
      where: {
        title: data,
      },
    });
    if (!room) {
      throw new Error("스터디 방이 존재하지 않습니다.");
    }

    await RoomModel.destroy({
      where: {
        title: data,
      },
    });

    const deleteRoom = Room.deleteRoom(data);

    console.log(`방 삭제: ${JSON.stringify(deleteRoom)}`);

    io.emit(SOCKET_TYPE.DELETE_ROOM, deleteRoom);
  });

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

    Room.deleteUser(roomId, userId);
    io.leave(roomId);
  });

  io.on(SOCKET_TYPE.UPDATE_USER_LIST, (data) => {
    // TODO: 유저 목록 업데이트
  });
};
