import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import CreateButton from "./CreateButton";

export default {
  title: "Components",
  component: CreateButton,
  decorators: [withKnobs],
};

export const CreateButtonStory = () => {
  return <CreateButton />;
};

CreateButtonStory.story = {
  name: "CreateButton",
};
