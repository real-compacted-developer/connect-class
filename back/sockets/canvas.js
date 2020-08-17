module.exports = function (socket) {
  const SOCKET_TYPE = require("../constants/socket-type");
  const Canvas = require("../app").CanvasInstance;

  socket.on(SOCKET_TYPE.DRAW, (data) => {
    const { slideId } = data;
    delete data["slideId"];

    Canvas.addDraw(slideId, data);
    socket.broadcast.emit(SOCKET_TYPE.DRAW, data);
  });
};
