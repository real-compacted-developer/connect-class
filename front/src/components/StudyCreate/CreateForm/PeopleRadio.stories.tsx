import React from "react";
import PeopleRadio from "./PeopleRadio";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Components",
  component: PeopleRadio,
  decorators: [withKnobs],
};

export const PeopleRadioStory = () => {
  const value = text("text", "2명");
  return <PeopleRadio text={value} />;
};

PeopleRadioStory.story = {
  name: "PeopleRadio",
};
