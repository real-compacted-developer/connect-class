module.exports = function (socket) {
  const SOCKET_TYPE = require("../constants/socket-type");
  // const { Slide, StudyData } = require("../models/index");
  // S3에 있는 더미 이미지 사용
  const imagesPath = [
    "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week1/cat1.jpg",
    "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week1/cat2.jpg",
    "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week1/cat3.jpg",
    "https://connect-class-test.s3.ap-northeast-2.amazonaws.com/StudyGroup1/week1/puppy1.jpg"
  ];
  const io = require("../bin/www").io;
  const size = imagesPath.length;
  socket.on(SOCKET_TYPE.IMAGE_PREV, (data) => {
    // TODO: 슬라이드 이미지 이전으로 넘기기
    if (data.index == 0) {
      data.index = size - 1;
    } else {
      data.index -= 1;
    }
    data.urlInfo = imagesPath[data.index];
    io.in("roomNumber").emit("imageChange", data);
  });
  socket.on(SOCKET_TYPE.IMAGE_NEXT, (data) => {
    // TODO: 슬라이드 이미지 다음으로 넘기기
    if (data.index >= size - 1) {
      data.index = 0;
    } else {
      data.index += 1;
    }
    data.urlInfo = imagesPath[data.index];
    io.in("roomNumber").emit("imageChange", data);
  });
};
