const Canvas = require("../app").CanvasInstance;
const SOCKET_TYPE = require("../constants/socket-type");

function sendStoredDrawData(socket, slideId) {
  const drawDataList = Canvas.getDrawData(slideId);
  if (drawDataList === undefined) return;
  drawDataList.forEach((draw) => {
    socket.emit(SOCKET_TYPE.DRAW, draw);
  });
}

exports.sendStoredDrawData = sendStoredDrawData;