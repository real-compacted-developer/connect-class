module.exports = function (io) {
  const crypto = require("crypto");
  const SOCKET_TYPE = require("../constants/socket-type");
  const Room = require("../app").RoomInstance;
  const RoomModel = require("../models/index").StudyGroup;

  io.on(SOCKET_TYPE.CREATE_ROOM, async (data) => {
    const { title, category, password, limitCount, isPremium } = data;

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
      isPremium: (isPremium === "true"),
      people: 0,
      salt: salt.toString("base64"),
      password: encodePassword.toString("base64"),
    });

    Room.addRoom(title, data);

    console.log(`새로운 방 생성: ${JSON.stringify(data)}`);

    io.emit(SOCKET_TYPE.CREATE_ROOM, data);
  });

  io.on(SOCKET_TYPE.DELETE_ROOM, (data) => {
    const deleteRoom = Room.deleteRoom(data);

    console.log(`방 삭제: ${JSON.stringify(deleteRoom)}`);

    io.emit(SOCKET_TYPE.DELETE_ROOM, deleteRoom);
  });

  io.on(SOCKET_TYPE.JOIN, (data) => {
    const { roomId, userId } = data;
    if (!Room.getRoom(roomId)) return;
    Room.addUser(roomId, userId);
    io.join(roomId);
  });

  io.on(SOCKET_TYPE.EXIT, (data) => {
    const { roomId, userId } = data;
    if (!Room.getRoom(roomId)) return;
    Room.deleteUser(roomId, userId);
    io.leave(roomId);
  });

  io.on(SOCKET_TYPE.UPDATE_USER_LIST, (data) => {
    // TODO: 유저 목록 업데이트
  });
};
