import React from "react";
import CreateButton from "./CreateButton";

export default {
  title: "Components",
  component: CreateButton,
};

export const CreateButtonStory = () => {
  return <CreateButton />;
};

CreateButtonStory.story = {
  name: "CreateButton",
};
