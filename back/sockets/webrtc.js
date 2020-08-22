module.exports = function (socket) {
  const SOCKET_TYPE = require("../constants/socket-type");

  socket.on(SOCKET_TYPE.CREATE_OFFER, (data) => {
    socket.broadcast.emit(SOCKET_TYPE.TRANSMIT_OFFER, data);
  });

  socket.on("askAudio", () => {
    socket.broadcast.emit("shareAudioModal", "HARDCODING USER");
  });
};
