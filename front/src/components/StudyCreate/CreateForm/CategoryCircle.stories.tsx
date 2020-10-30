import React from "react";
import CategoryCircle from "./CategoryCircle";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Components",
  component: CategoryCircle,
  decorators: [withKnobs],
};

export const CategoryCircleStory = () => {
  const value = text("Content", "");
  return <CategoryCircle>{value}</CategoryCircle>;
};

CategoryCircleStory.story = {
  name: "CategoryCircle",
};
