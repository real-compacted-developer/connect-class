const SOCKET_TYPE = require("../constants/socket-type");
const { sendStoredDrawData } = require("../services/draw");

const imagesPath = [
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-01.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-02.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-03.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-04.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-05.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-06.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-07.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-08.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-09.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-10.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-11.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-12.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-13.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-14.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-15.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-16.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-17.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-18.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-19.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-20.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-22.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-23.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-24.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-25.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-26.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-27.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-28.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-29.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-30.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-31.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-32.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-33.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-34.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-35.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-36.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-37.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-38.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-39.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-40.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-41.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-42.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-43.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-44.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-45.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-46.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup2/CONNECTCLASS_%EC%B5%9C%EC%A2%85.pdf-47.png",
];

const io = require("../bin/www").io;
const size = imagesPath.length;

module.exports = function (socket) {
  const { SlideInstance } = require("../app");

  SlideInstance.setSlideIndex(0);
  SlideInstance.setSlideUrl(imagesPath[0]);

  socket.emit(SOCKET_TYPE.SYNC, {
    idx: SlideInstance.getSlideIndex(),
    url: SlideInstance.getSlideUrl(),
  });

  socket.on(SOCKET_TYPE.IMAGE_PREV, (data) => {
    const { userId, roomId } = data;
    let { index, urlInfo } = data;

    if (index == 0) {
      index = size - 1;
    } else {
      index -= 1;
    }

    urlInfo = imagesPath[index];

    SlideInstance.setSlideIndex(index);
    SlideInstance.setSlideUrl(urlInfo);

    io.sockets.in(roomId).emit(SOCKET_TYPE.IMAGE_CHANGE, data);

    sendStoredDrawData(roomId, SlideInstance.getSlideIndex(), userId);
  });

  socket.on(SOCKET_TYPE.IMAGE_NEXT, (data) => {
    const { userId, roomId } = data;
    let { index, urlInfo } = data;
    
    if (index >= size - 1) {
      index = 0;
    } else {
      index += 1;
    }

    urlInfo = imagesPath[index];

    SlideInstance.setSlideIndex(index);
    SlideInstance.setSlideUrl(urlInfo);

    io.sockets.in(roomId).emit(SOCKET_TYPE.IMAGE_CHANGE, data);

    sendStoredDrawData(roomId, SlideInstance.getSlideIndex(), userId);
  });
};
