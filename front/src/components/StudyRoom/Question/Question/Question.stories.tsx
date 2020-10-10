import React from "react";
import Question from "./Question";
import { withKnobs, text } from "@storybook/addon-knobs";
import questionDummyData from "../../../../dummyDatas/QuestionDummy";

export default {
  title: "Components",
  component: Question,
  decorators: [withKnobs],
};

export const QuestionStory = () => {
  const content = text("content", "이부분을 잘 모르겠어요");

  return (
    <Question userInfo={questionDummyData[0].userInfo} content={content} />
  );
};

QuestionStory.story = {
  name: "Question",
};
