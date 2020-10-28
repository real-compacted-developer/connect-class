const SOCKET_TYPE = require("../constants/socket-type");

module.exports = function (socket) {
  socket.on(SOCKET_TYPE.CREATE_NEW_QUESTION, (data) => {
    // data : roomNumber, questionData
    const { questionData } = data;

    socket.broadcast.emit(SOCKET_TYPE.GET_NEW_QUESTION, questionData);
  });
};
