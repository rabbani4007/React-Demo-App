import { createContext } from "react";
import { QuizState } from "./quiz-state";

interface QuizContext {
  quizState: QuizState;
  setQuizState: React.Dispatch<React.SetStateAction<QuizState>>;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  quizScore: number;
  setQuizScore: React.Dispatch<React.SetStateAction<number>>;
  quizCategory: string;
  setQuizCategory: React.Dispatch<React.SetStateAction<string>>;
  quizDifficulty: string;
  setQuizDifficulty: React.Dispatch<React.SetStateAction<string>>;
  totalQuestion: number;
  setTotalQuestion: React.Dispatch<React.SetStateAction<number>>;
}
export const QuizStateContext = createContext<QuizContext>({
  quizState: QuizState.START,
  setQuizState: () => {},
  userName: "Rabbani",
  setUserName: () => {},
  quizScore: 0,
  setQuizScore: () => {},
  quizCategory: "",
  setQuizCategory: () => {},
  quizDifficulty: "",
  setQuizDifficulty: () => {},
  totalQuestion: 10,
  setTotalQuestion: () => {},
});
