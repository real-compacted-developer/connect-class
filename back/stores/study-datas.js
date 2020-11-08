const axios = require("axios");

class StudyDataMap {
  constructor() {
    this.dbLayerURL = "https://db.connectclass.io/studydata/";
    this.map = new Map();
  }

  async find(studyDataId) {
    if (this.map.has(studyDataId)) {
      return this.map.get(studyDataId);
    }

    const response = await axios
      .get(`${this.dbLayerURL}/${studyDataId}`)
      .then((response) => response.data);

    const { data, success } = response;
    if (!success) return undefined;

    this.map.set(studyDataId, data.slideInfo);

    return data.slideInfo;
  }
}

module.exports = new StudyDataMap();
