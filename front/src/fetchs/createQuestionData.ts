import { IQuestionInfo } from "../types/question";

type DataType = {
  roomNumber: string;
  userId: string;
  slidePage: number;
  title: string;
  slideImageURL: string;
  content: string;
};

async function createQuestionData(data: DataType): Promise<IQuestionInfo[]> {
  const { roomNumber, userId, slidePage, slideImageURL, title, content } = data;

  const response = await fetch(
    `${process.env.REACT_APP_QUESTION_LAYER}/study/${roomNumber}/question`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        slidePage: slidePage,
        slideImageURL: slideImageURL,
        title: title,
        content: content,
      }),
    }
  ).then((res) => res.json());

  if (response.success === false) {
    return [];
  }

  return response.data.question;
}

export default createQuestionData;
