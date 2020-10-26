import React from "react";

import { IQuestionInfo } from "../types/question";
import questionDummy from "../dummyDatas/QuestionDummy";

export default (url: RequestInfo, options: RequestInit) => {
  const [response, setResponse] = React.useState<null | IQuestionInfo[]>(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await fetch(url, options);
        // const json = await res.json();

        setResponse(questionDummy);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return { response, error };
};
