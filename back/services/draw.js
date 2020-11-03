const Canvas = require("../app").CanvasInstance;
const SOCKET_TYPE = require("../constants/socket-type");

function initStoredDrawData(socket, slideId, userId) {
  const drawDataList = Canvas.getDrawData(slideId, userId);
  if (drawDataList === undefined) return;
  drawDataList.forEach((draw) => {
    socket.emit(SOCKET_TYPE.DRAW, draw);
  });
}

function sendStoredDrawData(roomId, slideId, userId) {
  const io = require("../bin/www").io;
  const drawDataList = Canvas.getDrawData(slideId, userId);
  if (drawDataList === undefined) return;
  drawDataList.forEach((draw) => io.sockets.in(roomId).emit(SOCKET_TYPE.DRAW, draw));
}

exports.initStoredDrawData = initStoredDrawData;
exports.sendStoredDrawData = sendStoredDrawData;
