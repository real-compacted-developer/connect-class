import { IQuestionInfo } from "../types/question";

// import questionDummy from "../dummyDatas/QuestionDummy";
// async function getDummy(roomNumber: string): Promise<IQuestionInfo[]> {
//   return questionDummy;
// }

async function getQuestionData(roomNumber: string): Promise<IQuestionInfo[]> {
  const response = await fetch(
    `${process.env.REACT_APP_QUESTION_LAYER}/study/${roomNumber}/questions`,
    {
      method: "GET",
    }
  ).then((res) => res.json());

  if (response.success === false) {
    return [];
  }

  return response.data.questions;
}

export default getQuestionData;
