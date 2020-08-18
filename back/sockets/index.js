module.exports = function () {
  const io = require("../bin/www").io;

  const canvasSocket = require("./canvas");
  const imageSocket = require("./image");
  const webrtcSocket = require("./webrtc");
  const roomSocket = require("./room");

  io.on("connect", (socket) => {
    canvasSocket(socket);
    imageSocket(socket);
    webrtcSocket(socket);
    roomSocket(socket);
  });
};
