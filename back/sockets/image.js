module.exports = function (io) {
  const SOCKET_TYPE = require("../constants/socket-type");
  const Canvas = require("../app").CanvasInstance;

  function sendStoredDrawData(io, slideId) {
    const drawDataList = Canvas.getDrawData(slideId);
    drawDataList.forEach((draw) => {
      io.broadcast.emit(SOCKET_TYPE.DRAW, draw);
    });
  }

  io.on(SOCKET_TYPE.IMAGE_PREV, (data) => {
    // TODO: 자료 이전으로 넘기기
    const slideId = ""; // 이미지를 넘길 때 슬라이드 ID 가져오는 부분이 필요

    sendStoredDrawData(io, slideId);
  });
  io.on(SOCKET_TYPE.IMAGE_NEXT, (data) => {
    // TODO: 자료 다음으로 넘기기
    const slideId = ""; // 이미지를 넘길 때 슬라이드 ID 가져오는 부분이 필요

    sendStoredDrawData(io, slideId);
  });
};
