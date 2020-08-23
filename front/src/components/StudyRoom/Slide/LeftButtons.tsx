import React, { Component } from "react";
import styled from "styled-components";

import SyncButton from "./Buttons/SyncButton";
import ShareButton from "./Buttons/ShareButton";
import DownloadButton from "./Buttons/DownloadButton";

const Wrapper = styled.div`
  width: 300px;
  padding: 0 50px 0 50px;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  left: 0;
`;

type Props = {};

type States = {};

export default class StudyButton extends Component<Props, States> {
  render() {
    return (
      <Wrapper>
        <SyncButton />
        <ShareButton />
        <DownloadButton />
      </Wrapper>
    );
  }
}
