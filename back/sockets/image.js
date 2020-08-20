const SOCKET_TYPE = require("../constants/socket-type");

// const { Slide, StudyData } = require("../models/index");
const imagesPath = [
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week2/test.pdf-01.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week2/test.pdf-02.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week2/test.pdf-03.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week2/test.pdf-04.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week2/test.pdf-05.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week2/test.pdf-06.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week2/test.pdf-07.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week2/test.pdf-08.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week2/test.pdf-09.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week2/test.pdf-10.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week2/test.pdf-11.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week2/test.pdf-12.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week2/test.pdf-13.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week2/test.pdf-14.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week2/test.pdf-15.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week2/test.pdf-16.png",
  "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week2/test.pdf-17.png",
];
const io = require("../bin/www").io;
const size = imagesPath.length;
let idx = 0;
let url = imagesPath[0];
module.exports = function (socket) {
  socket.emit(SOCKET_TYPE.SYNC, { idx, url });
  socket.on(SOCKET_TYPE.IMAGE_PREV, (data) => {
    // TODO: 자료 이전으로 넘기기
    if (data.index == 0) {
      data.index = size - 1;
    } else {
      data.index -= 1;
    }
    data.urlInfo = imagesPath[data.index];
    idx = data.index;
    url = data.urlInfo;
    io.emit(SOCKET_TYPE.IMAGE_CHANGE, data);
  });
  socket.on(SOCKET_TYPE.IMAGE_NEXT, (data) => {
    // TODO: 자료 다음으로 넘기기
    if (data.index >= size - 1) {
      data.index = 0;
    } else {
      data.index += 1;
    }
    data.urlInfo = imagesPath[data.index];
    idx = data.index;
    url = data.urlInfo;
    io.emit(SOCKET_TYPE.IMAGE_CHANGE, data);
  });
};
