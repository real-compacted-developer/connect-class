module.exports = function (socket) {
  const SOCKET_TYPE = require("../constants/socket-type");
  const Canvas = require("../app").CanvasInstance;

  socket.on(SOCKET_TYPE.DRAW, (data) => {
    const { slideId, userId } = data;

    Canvas.addDraw(slideId, userId, data);
    socket.broadcast.emit(SOCKET_TYPE.DRAW, data);
  });

  socket.on(SOCKET_TYPE.ERASE, (data) => {
    const { slideId, userId } = data;

    Canvas.deleteDraw(slideId, userId);
    socket.broadcast.emit(SOCKET_TYPE.ERASE, data);
  });
};
