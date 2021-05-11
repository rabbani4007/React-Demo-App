import React, { useContext, useState, useEffect } from "react";
import { QuizState } from "../../helpers/quiz-state";
import { QuizStateContext } from "../../helpers/quiz-state-context";
//import { QuizQuestions } from "../../helpers/quiz-questions"; // types

import CountDownTimer from "../layout/count-down-timer";
import ReactLoading from "react-loading";
import {
  QuestionsState,
  Difficulty,
  fetchQuizQuestions,
} from "../../services/quiz-question-api";

const QuestionCard = () => {
  const {
    quizState,
    setQuizState,
    quizScore,
    setQuizScore,
    quizDifficulty,
    quizCategory,
    totalQuestion,
  } = useContext(QuizStateContext);
  const [loading, setLoading] = useState(true);
  const [quizQuestions, setQuizQuestions] = useState<QuestionsState[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerChosen, setAnswerChosen] = useState("");
  const [percentComplete, setPercentComplete] = useState(0);

  const nextQuestion = () => {
    //debugger;
    if (quizQuestions[currentQuestion].correct_answer[0] == answerChosen) {
      setQuizScore(quizScore + 1);
    }
    setAnswerChosen("");

    setCurrentQuestion(currentQuestion + 1);
    let percent = ((currentQuestion + 1 + 1) * 100) / quizQuestions.length;
    setPercentComplete(percent);
  };
  const prevQuestion = () => {
    if (quizQuestions[currentQuestion].correct_answer[0] == answerChosen) {
      setQuizScore(quizScore + 1);
    }
    setAnswerChosen("");
    setCurrentQuestion(currentQuestion - 1);
  };
  const finishQuiz = () => {
    if (quizQuestions[currentQuestion].correct_answer[0] == answerChosen) {
      setQuizScore(quizScore + 1);
    }
    //answerChosen;
    setQuizState(QuizState.END);
  };
  async function startTrivia() {
    let quizId = quizCategory.split(",")[0];
    const newQuestions = await fetchQuizQuestions(
      totalQuestion,
      quizDifficulty,
      parseInt(quizId)
    );
    setQuizQuestions(newQuestions);
  }
  useEffect(() => {
    setLoading(true);
    startTrivia();
    console.log(quizQuestions);
    setLoading(false);
  }, []);
  return (
    <div>
      <div className="container1 mt-51">
        <div className="d-flex justify-content-center row">
          <div className="col-md-10 col-lg-10">
            {quizQuestions.length == 0 ? (
              <div style={{ marginLeft: "45%" }}>
                Loading Questions...
                <ReactLoading type="bars" color="green" />
              </div>
            ) : null}
            {!loading && quizQuestions.length > 0 ? (
              <div className="border">
                <div className="question bg-white p-3 border-bottom">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: percentComplete + "%",
                      }}
                      data-aria-valuenow={percentComplete}
                      data-aria-valuemin="0"
                      data-aria-valuemax="100"
                    >
                      {percentComplete}%
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between align-items-center mcq">
                    <h4>{quizCategory.split(",")[1]}</h4>
                    <span style={{ textAlign: "center" }}>
                      Time Remaining :
                      <CountDownTimer initialMinute={5} initialSeconds={0} />
                    </span>
                    <span>
                      ({currentQuestion + 1} of {quizQuestions.length})
                    </span>
                  </div>
                </div>
                <div className="question bg-white p-3 border-bottom">
                  <div className="d-flex flex-row align-items-center question-title">
                    <h3 className="text-danger">Q.{currentQuestion + 1} </h3>
                    <h5 className="mt-1 ml-2">
                      {quizQuestions[currentQuestion].question}
                    </h5>
                  </div>
                  <div className="ans ml-2">
                    <label className="radio">
                      <input
                        type="radio"
                        name="option"
                        key="A"
                        onChange={() => {
                          setAnswerChosen(
                            quizQuestions[currentQuestion].answers[0]
                          );
                        }}
                        defaultChecked={false}
                      />
                      <span>{quizQuestions[currentQuestion].answers[0]}</span>
                    </label>
                  </div>
                  <div className="ans ml-2">
                    <label className="radio">
                      <input
                        type="radio"
                        name="option"
                        key="B"
                        onChange={() => {
                          setAnswerChosen(
                            quizQuestions[currentQuestion].answers[1]
                          );
                        }}
                        defaultChecked={false}
                      />
                      <span>{quizQuestions[currentQuestion].answers[1]}</span>
                    </label>
                  </div>
                  <div className="ans ml-2">
                    <label className="radio">
                      <input
                        type="radio"
                        name="option"
                        key="C"
                        onChange={() => {
                          setAnswerChosen(
                            quizQuestions[currentQuestion].answers[2]
                          );
                        }}
                        defaultChecked={false}
                      />
                      <span>{quizQuestions[currentQuestion].answers[2]}</span>
                    </label>
                  </div>
                  <div className="ans ml-2">
                    <label className="radio">
                      <input
                        type="radio"
                        name="option"
                        key="D"
                        onChange={() => {
                          setAnswerChosen(
                            quizQuestions[currentQuestion].answers[3]
                          );
                        }}
                        defaultChecked={false}
                      />
                      <span>{quizQuestions[currentQuestion].answers[3]}</span>
                    </label>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                  <button
                    style={{
                      visibility: currentQuestion == 0 ? "hidden" : "visible",
                    }}
                    className="btn btn-primary d-flex align-items-center btn-danger"
                    type="button"
                    onClick={prevQuestion}
                  >
                    <i className="fa fa-angle-left mt-1 mr-1"></i>&nbsp;Previous
                    Question
                  </button>
                  {currentQuestion == quizQuestions.length - 1 ? (
                    <button
                      onClick={finishQuiz}
                      id="nextQuestion"
                      type="button"
                      className="btn btn-primary border-success align-items-center btn-success"
                    >
                      Finish Quiz
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary border-success align-items-center btn-success"
                      onClick={nextQuestion}
                      id="nextQuestion"
                      type="button"
                    >
                      Next Question<i className="fa fa-angle-right ml-2"></i>
                    </button>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
