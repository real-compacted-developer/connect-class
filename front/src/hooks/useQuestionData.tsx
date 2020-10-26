import React from "react";

import { IQuestionInfo } from "../types/question";
import getQuestionData from "../fetchs/getQuestionData";

export default (
  roomNumber: string
): { response: null | IQuestionInfo[]; error: null } => {
  const [response, setResponse] = React.useState<null | IQuestionInfo[]>(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const questionData = await getQuestionData(roomNumber);

        setResponse(questionData);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [roomNumber]);

  return { response, error };
};
