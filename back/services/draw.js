const Canvas = require("../app").CanvasInstance;
const SOCKET_TYPE = require("../constants/socket-type");

function initStoredDrawData(socket, slideId, userId) {
  const drawDataList = Canvas.getDrawData(slideId, userId);
  if (drawDataList === undefined) return;
  drawDataList.forEach((draw) => {
    socket.emit(SOCKET_TYPE.DRAW, draw);
  });
}

function sendStoredDrawData(socket, slideId, userId) {
  const drawDataList = Canvas.getDrawData(slideId, userId);
  if (drawDataList === undefined) return;
  drawDataList.forEach((draw) => {
    socket.emit(SOCKET_TYPE.DRAW, draw); // broadcast는 자기 자신을 제외하고 보냅니다.
    socket.broadcast.emit(SOCKET_TYPE.DRAW, draw);
  });
}

exports.initStoredDrawData = initStoredDrawData;
exports.sendStoredDrawData = sendStoredDrawData;