const SOCKET_TYPE = require("../constants/socket-type");
const { initStoredDrawData } = require("../services/draw");
const { SlideInstance } = require("../app");
const studyData = require("../stores/study-datas");

module.exports = function (socket) {
  socket.on(SOCKET_TYPE.JOIN, async (data) => {
    const { roomId, userId } = data;

    const imagePaths = await studyData.find(roomId);

    SlideInstance.setSlideIndex(0);
    SlideInstance.setSlideUrl(imagePaths[0]);

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
