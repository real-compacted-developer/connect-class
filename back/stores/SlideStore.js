class SlideStore {
  constructor() {
    this.slideIndex = 0;
    this.slideUrl = undefined;
  }

  setSlideIndex(index) {
    this.slideIndex = index;
    return this.slideIndex;
  }

  getSlideIndex() {
    return this.slideIndex;
  }

  resetSlideIndex() {
    this.slideIndex = 0;
    return this.slideIndex;
  }

  setSlideUrl(url) {
    this.slideUrl = url;
    return this.slideUrl;
  }

  getSlideUrl() {
    return this.slideUrl;
  }

  deleteSlideIndex() {
    this.slideUrl = undefined;
    return this.slideUrl;
  }
}

module.exports = SlideStore;
