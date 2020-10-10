import React from "react";
import PencilButton from "./PencilButton";

export default {
  title: "Buttons",
  component: PencilButton,
};

export const PencilButtonStory = () => {
  return <PencilButton />;
};

PencilButtonStory.story = {
  name: "PencilButton",
};
