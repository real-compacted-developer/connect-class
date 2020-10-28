import { useState, useEffect, useCallback } from "react";

import { IQuestionInfo } from "../types/question";
import getQuestionData from "../fetchs/getQuestionData";

export default (roomNumber: string) => {
  const [questions, setQuestions] = useState<null | IQuestionInfo[]>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const questionData = await getQuestionData(roomNumber);

        setQuestions(questionData);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [roomNumber]);

  const addQuestions = useCallback(
    (data: IQuestionInfo): void => {
      if (questions === null) return;
      setQuestions([...questions, data]);
    },
    [questions]
  );

  return { questions, error, addQuestions };
};
