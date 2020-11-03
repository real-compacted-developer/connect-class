const io = require("../bin/www").io;
const SOCKET_TYPE = require("../constants/socket-type");

module.exports = function (socket) {
  socket.on(SOCKET_TYPE.CREATE_NEW_QUESTION, (data) => {
    // data : roomNumber, questionData
    const { roomNumber, questionData } = data;

    io.sockets.in(roomNumber).emit(SOCKET_TYPE.GET_NEW_QUESTION, questionData);
  });
};
