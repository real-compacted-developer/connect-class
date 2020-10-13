import React from "react";
import ExitButton from "./ExitButton";

export default {
  title: "Buttons",
  component: ExitButton,
};

export const ExitButtonStory = () => {
  return <ExitButton>종료</ExitButton>;
};

ExitButtonStory.story = {
  name: "ExitButton",
};
