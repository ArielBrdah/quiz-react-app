import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizCtx, setQuizCtx] = useState({page: "start"});

  return <QuizContext.Provider value={{ quizCtx, setQuizCtx }}>{children}</QuizContext.Provider>;
};