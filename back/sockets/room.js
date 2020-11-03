module.exports = function (socket) {
  const SOCKET_TYPE = require("../constants/socket-type");
  const { initStoredDrawData } = require("../services/draw");
  const { SlideInstance } = require("../app");

  socket.on(SOCKET_TYPE.JOIN, async (data) => {
    const { roomId, userId } = data;
    socket.join(roomId);
    socket.emit(SOCKET_TYPE.SYNC, {
      idx: SlideInstance.getSlideIndex(),
      url: SlideInstance.getSlideUrl(),
    });
    setTimeout(() => {
      initStoredDrawData(socket, roomId, SlideInstance.getSlideIndex(), userId);
    }, 100);
  });

  socket.on(SOCKET_TYPE.EXIT, async (data) => {
    const { roomId } = data;
    socket.leave(roomId);
  });
};
