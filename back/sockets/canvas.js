module.exports = function (io) {
  const SOCKET_TYPE = require("../constants/socket-type");
  const Canvas = require("../app").CanvasInstance;

  io.on(SOCKET_TYPE.DRAW, (data) => {
    const { slideId } = data;

    Canvas.addDraw(slideId, data);
    io.broadcast.emit(SOCKET_TYPE.DRAW, data);
  });
};
