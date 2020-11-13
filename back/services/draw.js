const Canvas = require("../app").CanvasInstance;
const SOCKET_TYPE = require("../constants/socket-type");

function initStoredDrawData(socket, roomId, slideId, userId) {
  const drawDataList = Object.values(Canvas.getSlideDrawData(roomId, slideId));
  if (drawDataList === undefined) return;
  drawDataList.forEach((userDraw) => {
    userDraw.forEach((draw) => {
      socket.emit(SOCKET_TYPE.DRAW, draw);
    });
  });
}

function sendStoredDrawData(roomId, slideId, userId) {
  const io = require("../bin/www").io;
  const drawDataList = Object.values(Canvas.getSlideDrawData(roomId, slideId));
  if (drawDataList === undefined) return;
  drawDataList.forEach((userDraw) => {
    userDraw.forEach((draw) => {
      io.sockets.in(roomId).emit(SOCKET_TYPE.DRAW, draw);
    });
  });
}

exports.initStoredDrawData = initStoredDrawData;
exports.sendStoredDrawData = sendStoredDrawData;
