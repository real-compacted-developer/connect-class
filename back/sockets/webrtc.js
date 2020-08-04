module.exports = function (io) {
  const SOCKET_TYPE = require("../constants/socket-type");

  io.on(SOCKET_TYPE.CREATE_OFFER, (data) => {
    // TODO: WebRTC
  });
  io.on(SOCKET_TYPE.TRANSMIT_OFFER, (data) => {
    // TODO: WebRTC
  });
};
