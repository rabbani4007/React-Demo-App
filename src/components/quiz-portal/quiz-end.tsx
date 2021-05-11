import React, { useContext } from "react";
import { QuizState } from "../../helpers/quiz-state";
import { QuizStateContext } from "../../helpers/quiz-state-context";
import { QuizQuestions } from "../../helpers/quiz-questions";

const QuizEnd = () => {
  const {
    quizState,
    setQuizState,
    userName,
    quizScore,
    setQuizScore,
    totalQuestion,
    quizCategory,
    quizDifficulty,
  } = useContext(QuizStateContext);

  const restartQuiz = () => {
    setQuizScore(0);
    setQuizState(QuizState.START);
  };
  return (
    <div>
      <div className="d-flex justify-content-center row">
        <div className="col-md-10 col-lg-10">
          <div>
            <h1>Quiz Finished</h1>
            <h3>{userName}</h3>
            <h1>
              Score :{quizScore}/{totalQuestion}
            </h1>
            <h1>Category :{quizCategory.split(",")[1]}</h1>
            <h1>Quiz Difficulty :{quizDifficulty}</h1>
            <button className="btn btn-primary btn-lg" onClick={restartQuiz}>
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizEnd;
