module.exports = function (io) {
  const SOCKET_TYPE = require("../constants/socket-type");

  io.on(SOCKET_TYPE.JOIN, (data) => {
    // TODO: 방 입장
  });
  io.on(SOCKET_TYPE.EXIT, (data) => {
    // TODO: 방 퇴장
  });
  io.on(SOCKET_TYPE.UPDATE_USER_LIST, (data) => {
    // TODO: 유저 목록 업데이트
  });
};
