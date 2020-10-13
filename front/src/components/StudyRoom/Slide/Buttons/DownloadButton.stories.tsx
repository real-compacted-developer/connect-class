import React from "react";
import DownloadButton from "./DownloadButton";

export default {
  title: "Buttons",
  component: DownloadButton,
};

export const DownloadButtonStory = () => {
  return <DownloadButton />;
};

DownloadButtonStory.story = {
  name: "DownloadButton",
};
