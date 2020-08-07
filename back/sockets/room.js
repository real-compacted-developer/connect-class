module.exports = function (io) {
  const SOCKET_TYPE = require("../constants/socket-type");
  const Room = require("../app").RoomInstance;

  io.on(SOCKET_TYPE.CREATE_ROOM, (data) => {
    // const createRoom = RoomModel.insert(data);
    const id = 1; // TODO: DB Model 추가 후 DB에서 id 가져오기

    Room.addRoom(id, data);

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
    if(!Room.getRoom(roomId)) return;
    Room.addUser(roomId, userId);
  });
  io.on(SOCKET_TYPE.EXIT, (data) => {
    const { roomId, userId } = data;
    if(!Room.getRoom(roomId)) return;
    Room.deleteUser(roomId, userId);
  });
  io.on(SOCKET_TYPE.UPDATE_USER_LIST, (data) => {
    // TODO: 유저 목록 업데이트
  });
};
