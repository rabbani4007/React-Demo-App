import React, { useContext, useState } from "react";
import { QuizState } from "../../helpers/quiz-state";
import { QuizStateContext } from "../../helpers/quiz-state-context";
import { QuizCategories } from "../../services/quiz-question-api";

const QuizStart = () => {
  const {
    quizState,
    setQuizState,
    userName,
    setUserName,
    setQuizCategory,
    setQuizDifficulty,
    setTotalQuestion,
  } = useContext(QuizStateContext);
  setUserName("Rabbani");

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <label>Enter your name</label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </div>
        <div className="col">
          <span>
            <button
              className="btn btn-primary"
              onClick={() => setQuizState(QuizState.RUUNING)}
            >
              Start Quiz
            </button>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <select
            className="dropdown"
            name="category"
            onChange={(event) => {
              setQuizCategory(event.target.value);
            }}
          >
            <option>--select category--</option>
            {QuizCategories.map((res) => (
              <option key={res.id} value={res.id + "," + res.value}>
                {res.value}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm-4">
          <select
            className="dropdown"
            name="totalQuestion"
            onChange={(event) => {
              setTotalQuestion(parseInt(event.target.value));
            }}
          >
            <option>--select total question--</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="col-sm-4">
          <select
            className="dropdown"
            name="difficulty"
            onChange={(event) => {
              setQuizDifficulty(event.target.value);
            }}
          >
            <option>--select diffculty--</option>
            <option value="any">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default QuizStart;
