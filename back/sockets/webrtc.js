module.exports = function (socket) {
  const io = require("../bin/www").io;
  const SOCKET_TYPE = require("../constants/socket-type");

  socket.on(SOCKET_TYPE.CREATE_OFFER, (data) => {
    const { roomId, webrtc } = data;
    io.sockets.in(roomId).emit(SOCKET_TYPE.TRANSMIT_OFFER, webrtc);
  });

  socket.on("askAudio", (data) => {
    const { roomId } = data;
    io.sockets.in(roomId).broadcast.emit("shareAudioModal", "HARDCODING USER");
  });
};
