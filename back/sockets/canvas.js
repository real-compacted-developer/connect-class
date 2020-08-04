module.exports = function (io) {
  io.on("draw", (data) => {
    console.log(data);
    // TODO: 필기 관련 소켓
  });
};
