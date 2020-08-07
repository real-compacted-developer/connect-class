class RoomStore {
  constructor() {
    this.roomList = [];
  }

  addRoom(roomId, data) {
    this.roomList[roomId] = data;
    return this.roomList[roomId];
  }

  getRoom(roomId) {
    return this.roomList[roomId];
  }

  deleteRoom(roomId) {
    const tempRoom = this.roomList[roomId];
    delete this.roomList[roomId];
    return tempRoom;
  }

  updateRoom(roomId, data) {
    if (!this.roomList[roomId]) {
      return undefined;
    }

    this.roomList[roomId] = data;
    return this.roomList[roomId];
  }

  addUser(roomId, userId, userData) {
    this.roomList[roomId].users[userId] = userData;
    return this.roomList[roomId].users[userId];
  }

  deleteUser(roomId, userId) {
    const tempUser = this.roomList[roomId].users[userId];
    delete this.roomList[roomId].users[userId];
    return tempUser;
  }
}

module.exports = RoomStore;
