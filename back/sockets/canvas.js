module.exports = function (io) {
  const SOCKET_TYPE = require("../constants/socket-type");

  io.on(SOCKET_TYPE.DRAW, (data) => {
    console.log(data);
    // TODO: 필기 관련 소켓
  });
};
