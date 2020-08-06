module.exports = function (io) {
  const SOCKET_TYPE = require("../constants/socket-type");

  io.on(SOCKET_TYPE.IMAGE_PREV, (data) => {
    // TODO: 자료 이전으로 넘기기
  });
  io.on(SOCKET_TYPE.IMAGE_NEXT, (data) => {
    // TODO: 자료 다음으로 넘기기
  });
};
