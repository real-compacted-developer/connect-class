const canvasSocket = require("./canvas");
const imageSocket = require("./image");
const webrtcSocket = require("./webrtc");
const roomSocket = require("./room");
const question = require("./question");

module.exports = function () {
  const io = require("../bin/www").io;

  io.on("connect", (socket) => {
    canvasSocket(socket);
    imageSocket(socket);
    webrtcSocket(socket);
    roomSocket(socket);
    question(socket);
  });
};
