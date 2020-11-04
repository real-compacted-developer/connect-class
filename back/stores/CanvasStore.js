class CanvasStore {
  constructor() {
    this.canvasList = {};
  }

  initDrawData(roomId, slideId, userId) {
    if (this.canvasList[roomId] === undefined) {
      this.canvasList[roomId] = {};
    }

    if (this.canvasList[roomId][slideId] === undefined) {
      this.canvasList[roomId][slideId] = {};
    }

    if (this.canvasList[roomId][slideId][userId] === undefined) {
      this.canvasList[roomId][slideId][userId] = new Set([]);
    }
  }

  addDraw(roomId, slideId, userId, data) {
    this.initDrawData(roomId, slideId, userId);

    this.canvasList[roomId][slideId][userId].add(data);

    return this.canvasList[roomId][slideId][userId][this.canvasList.length - 1];
  }

  getDrawData(roomId, slideId, userId) {
    this.initDrawData(roomId, slideId, userId);

    return this.canvasList[roomId][slideId][userId];
  }

  deleteDrawWithIndex(roomId, slideId, userId, index) {
    const tempEachDraw = this.canvasList[roomId][slideId][userId][index];
    delete this.canvasList[roomId][slideId][userId][index];
    return tempEachDraw;
  }

  deleteDraw(roomId, slideId, userId) {
    const tempDraw = this.canvasList[roomId][slideId][userId];
    delete this.canvasList[roomId][slideId][userId];
    return tempDraw;
  }

  updateDraw(roomId, slideId, userId, index, data) {
    if (!this.roomList[roomId][slideId][userId]) {
      return undefined;
    }

    this.canvasList[roomId][slideId][userId][index] = data;
    return this.canvasList[roomId][slideId][userId][index];
  }
}

module.exports = CanvasStore;
