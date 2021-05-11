import React, { useState } from "react";
import QuizStart from "./quiz-start";
import QuizEnd from "./quiz-end";
import QuestionCard from "./question-card";
import { QuizStateContext } from "../../helpers/quiz-state-context";
import { QuizState } from "../../helpers/quiz-state";

const QuizComponent = () => {
  const [quizState, setQuizState] = useState(QuizState.START);
  const [userName, setUserName] = useState("");
  const [quizScore, setQuizScore] = useState(0);
  const [quizCategory, setQuizCategory] = useState("");
  const [quizDifficulty, setQuizDifficulty] = useState("");
  const [totalQuestion, setTotalQuestion] = useState(10);

  return (
    <div className="jumbotron">
      <QuizStateContext.Provider
        value={{
          quizState,
          setQuizState,
          userName,
          setUserName,
          quizScore,
          setQuizScore,
          quizCategory,
          setQuizCategory,
          quizDifficulty,
          setQuizDifficulty,
          totalQuestion,
          setTotalQuestion,
        }}
      >
        {quizState == QuizState.START && <QuizStart />}
        {quizState == QuizState.RUUNING && <QuestionCard />}
        {quizState == QuizState.END && <QuizEnd />}
      </QuizStateContext.Provider>
    </div>
  );
};
export default QuizComponent;
