class RoomStore {
  constructor() {
    this.roomList = [];
  }

  addRoom(id, data) {
    this.roomList[id] = data;
    return this.roomList[id];
  }

  getRoom(id) {
      return this.roomList[id];
  }

  deleteRoom(id) {
    const tempRoom = this.roomList[id];
    delete this.roomList[id];
    return tempRoom;
  }

  updateRoom(id, data) {
    if (!this.roomList[id]) {
      return undefined;
    }

    this.roomList[id] = data;
    return this.roomList[id];
  }
}

module.exports = RoomStore;
