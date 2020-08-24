import React, { Component } from "react";
import SOCKET_TYPE from "../../../constants/socket-type";
import { socket } from "../../../index";
import { drawState } from "./SlideCanvas";

type Props = {};

type States = {
  index: number;
  urlInfo: string;
};

class SlideImage extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      index: 0,
      urlInfo: "",
    };

    this.onPrevImage = this.onPrevImage.bind(this);
    this.onNextImage = this.onNextImage.bind(this);
    this.renderImage = this.renderImage.bind(this);
  }
  // toggleImage = () => {
  //   const { index, urlInfo } = this.state;
  //   socket.emit("image Change", { index, urlInfo });
  // }
  componentDidMount() {
    socket.on(SOCKET_TYPE.SYNC, ({ idx, url }: any) => {
      this.setState({
        index: idx,
        urlInfo: url,
      });
    });
    socket.on(SOCKET_TYPE.IMAGE_CHANGE, (data: any) => {
      console.log("imageChange : ", data);
      this.setState({
        index: data.index,
        urlInfo: data.urlInfo,
      });
      drawState.slideId = data.index;
    });
  }
  onPrevImage() {
    let { index, urlInfo } = this.state;
    const data = { index: index, urlInfo: urlInfo };
    socket.emit(SOCKET_TYPE.IMAGE_PREV, data);
  }
  onNextImage() {
    const { index, urlInfo } = this.state;
    const data = { index: index, urlInfo: urlInfo };
    socket.emit(SOCKET_TYPE.IMAGE_NEXT, data);
  }
  renderImage() {
    let { urlInfo } = this.state;
    return (
      <div>
        <img src={urlInfo} alt="" />
      </div>
    );
  }
  render() {
    return (
      <div>
        <ul>
          <button onClick={this.onPrevImage}> 이전 슬라이드</button>
          <button onClick={this.onNextImage}> 다음 슬라이드</button>
        </ul>
        <div>{this.renderImage()}</div>
      </div>
    );
  }
}

export default SlideImage;
