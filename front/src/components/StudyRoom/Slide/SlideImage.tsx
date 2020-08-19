import React, { Component, Fragment } from "react";
import SOCKET_TYPE from "../../../constants/socket-type";
import { socket } from "../../../index";

type Props = {};

type States = {
  index: number;
  urlInfo: string;
};

class Slide extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      index: 0,
      urlInfo: "",
    };
    socket.on(SOCKET_TYPE.IMAGE_CHANGE, (data: any) => {
      this.setState({
        index: data.index,
        urlInfo: data.urlInfo,
      });
    });

    this.onPrevImage = this.onPrevImage.bind(this);
    this.onNextImage = this.onNextImage.bind(this);
    this.renderImage = this.renderImage.bind(this);
  }
  // toggleImage = () => {
  //   const { index, urlInfo } = this.state;
  //   socket.emit("image Change", { index, urlInfo });
  // }
  componentDidMount() {
    socket.on(SOCKET_TYPE.SYNC, (data: any) => {
      console.log("SYNC");
      this.setState({
        index: data.idx,
        urlInfo: data.urlInfo,
      });
    });
    socket.on(SOCKET_TYPE.IMAGE_CHANGE, (data: any) => {
      this.setState({
        index: data.idx,
        urlInfo: data.urlInfo,
      });
    });
  }
  onPrevImage() {
    let { index, urlInfo } = this.state;
    const data = { index: index, urlInfo: urlInfo };
    socket.emit(SOCKET_TYPE.IMAGE_PREV, data);
    socket.on(SOCKET_TYPE.IMAGE_CHANGE, (data: any) => {
      this.setState({
        index: data.idx,
        urlInfo: data.urlInfo,
      });
    });
  }
  onNextImage() {
    const { index, urlInfo } = this.state;
    const data = { index: index, urlInfo: urlInfo };
    socket.emit(SOCKET_TYPE.IMAGE_NEXT, data);
    socket.on(SOCKET_TYPE.IMAGE_CHANGE, (data: any) => {
      this.setState({
        index: data.idx,
        urlInfo: data.urlInfo,
      });
    });
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

export default Slide;
