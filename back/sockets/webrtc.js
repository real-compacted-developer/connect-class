module.exports = function (socket) {
  const SOCKET_TYPE = require("../constants/socket-type");

  socket.on(SOCKET_TYPE.CREATE_OFFER, (data) => {
    // TODO: WebRTC
  });
  socket.on(SOCKET_TYPE.TRANSMIT_OFFER, (data) => {
    // TODO: WebRTC
  });
};
