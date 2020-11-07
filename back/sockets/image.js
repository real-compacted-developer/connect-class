const SOCKET_TYPE = require("../constants/socket-type");
const { sendStoredDrawData } = require("../services/draw");
const io = require("../bin/www").io;
const { SlideInstance } = require("../app");

const studyData = require("../stores/study-datas");

module.exports = function (socket) {
  SlideInstance.setSlideIndex(0);

  socket.on(SOCKET_TYPE.IMAGE_PREV, async (data) => {
    const { userId, roomId } = data;

    const imagesPath = await studyData.find(roomId);
    const size = imagesPath.length;

    if (data.index == 0) {
      data.index = size - 1;
    } else {
      data.index -= 1;
    }

    data.urlInfo = imagesPath[data.index];

    SlideInstance.setSlideIndex(data.index);
    SlideInstance.setSlideUrl(data.urlInfo);

    io.sockets.in(roomId).emit(SOCKET_TYPE.IMAGE_CHANGE, data);

    sendStoredDrawData(roomId, SlideInstance.getSlideIndex(), userId);
  });

  socket.on(SOCKET_TYPE.IMAGE_NEXT, async (data) => {
    const { userId, roomId } = data;

    const imagesPath = await studyData.find(roomId);
    const size = imagesPath.length;

    if (data.index >= size - 1) {
      data.index = 0;
    } else {
      data.index += 1;
    }

    data.urlInfo = imagesPath[data.index];

    SlideInstance.setSlideIndex(data.index);
    SlideInstance.setSlideUrl(data.urlInfo);

    io.sockets.in(roomId).emit(SOCKET_TYPE.IMAGE_CHANGE, data);

    sendStoredDrawData(roomId, SlideInstance.getSlideIndex(), userId);
  });
};
