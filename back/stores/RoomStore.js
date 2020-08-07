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
}

module.exports = RoomStore;
