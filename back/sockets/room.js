module.exports = function (io) {
  io.on("join", (data) => {
    // TODO: 방 입장
  });
  io.on("exit", (data) => {
    // TODO: 방 퇴장
  });
  io.on("updateUserList", (data) => {
    // TODO: 유저 목록 업데이트
  });
};
