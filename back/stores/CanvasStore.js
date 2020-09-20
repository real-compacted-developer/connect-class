class CanvasStore {
  constructor() {
    this.canvasList = [];
  }

  addDraw(slideId, data) {
    if (this.canvasList[slideId] === undefined) {
      this.canvasList[slideId] = new Set([]);
    }

    this.canvasList[slideId].add(data);

    return this.canvasList[slideId][this.canvasList.length - 1];
  }

  getDrawData(slideId) {
    return this.canvasList[slideId];
  }

  deleteDrawWithIndex(slideId, index) {
    const tempEachDraw = this.canvasList[slideId][index];
    delete this.canvasList[slideId][index];
    return tempEachDraw;
  }

  deleteDraw(slideId) {
    const tempDraw = this.canvasList[slideId];
    delete this.canvasList[slideId];
    return tempDraw;
  }

  updateDraw(slideId, index, data) {
    if (!this.roomList[slideId]) {
      return undefined;
    }

    this.canvasList[slideId][index] = data;
    return this.canvasList[slideId][index];
  }
}

module.exports = CanvasStore;
