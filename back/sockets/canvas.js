module.exports = function (socket) {
  const SOCKET_TYPE = require("../constants/socket-type");
  const Canvas = require("../app").CanvasInstance;

  socket.on(SOCKET_TYPE.DRAW, (data) => {
    const { slideId } = data;

    Canvas.addDraw(slideId, data);
    socket.broadcast.emit(SOCKET_TYPE.DRAW, data);
  });

  socket.on(SOCKET_TYPE.ERASE, (data) => {
    const { slideId } = data;

    Canvas.deleteDraw(slideId);
    socket.broadcast.emit(SOCKET_TYPE.ERASE, data);
  });
};
