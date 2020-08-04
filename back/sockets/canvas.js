module.exports = function (io) {
  const SOCKET_TYPE = require("../constants/socket-type");

  io.on(SOCKET_TYPE.DRAW, (data) => {
    io.broadcast.emit(SOCKET_TYPE.DRAW, data);
  });
};
