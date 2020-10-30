class CanvasStore {
  constructor() {
    this.canvasList = [];
  }

  initDrawData(slideId, userId) {
    if (this.canvasList[slideId] === undefined) {
      this.canvasList[slideId] = [];
    }

    if (this.canvasList[slideId][userId] === undefined) {
      this.canvasList[slideId][userId] = new Set([]);
    }
  }

  addDraw(slideId, userId, data) {
    this.initDrawData(slideId, userId);

    this.canvasList[slideId][userId].add(data);

    return this.canvasList[slideId][userId][this.canvasList.length - 1];
  }

  getDrawData(slideId, userId) {
    this.initDrawData(slideId, userId);

    return this.canvasList[slideId][userId];
  }

  deleteDrawWithIndex(slideId, userId, index) {
    const tempEachDraw = this.canvasList[slideId][userId][index];
    delete this.canvasList[slideId][userId][index];
    return tempEachDraw;
  }

  deleteDraw(slideId, userId) {
    const tempDraw = this.canvasList[slideId][userId];
    delete this.canvasList[slideId][userId];
    return tempDraw;
  }

  updateDraw(slideId, userId, index, data) {
    if (!this.roomList[slideId][userId]) {
      return undefined;
    }

    this.canvasList[slideId][userId][index] = data;
    return this.canvasList[slideId][userId][index];
  }
}

module.exports = CanvasStore;
