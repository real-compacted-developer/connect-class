import { useState, useEffect, useCallback } from "react";

import { IQuestionInfo } from "../types/question";
import getQuestionData from "../fetchs/getQuestionData";

export default (roomNumber: string) => {
  const [questions, setQuestions] = useState<IQuestionInfo[]>([]);
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

  const addQuestion = useCallback((data: IQuestionInfo) => {
    setQuestions((questionsData) => [...questionsData, data]);
  }, []);

  return { questions, error, addQuestion };
};
