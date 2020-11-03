module.exports = function (socket) {
  const io = require("../bin/www").io;
  const SOCKET_TYPE = require("../constants/socket-type");
  const Canvas = require("../app").CanvasInstance;

  socket.on(SOCKET_TYPE.DRAW, (data) => {
    const { roomId, slideId, userId } = data;

    Canvas.addDraw(roomId, slideId, userId, data);
    io.sockets.in(roomId).emit(SOCKET_TYPE.DRAW, data);
  });

  socket.on(SOCKET_TYPE.ERASE, (data) => {
    const { roomId, slideId, userId } = data;

    Canvas.deleteDraw(roomId, slideId, userId);
    io.sockets.in(roomId).emit(SOCKET_TYPE.ERASE, data);
  });
};
