import React from "react";
import Form from "./Form";

export default {
  title: "Components",
  component: Form,
};

const dummyFunction = (): void => {};

export const QuestionFormStory = () => {
  return <Form addQuestions={dummyFunction} />;
};

QuestionFormStory.story = {
  name: "QuestionForm",
};
