export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
export const QuizCategories = [
  { id: "any", value: "Any Category" },
  { id: "9", value: "General Knowledge" },
  { id: "10", value: "Entertainment: Books" },
  { id: "11", value: "Entertainment: Film" },
  { id: "12", value: "Entertainment: Music" },
  { id: "13", value: "Entertainment: Musicals &amp; Theatres" },
  { id: "14", value: "Entertainment: Television" },
  { id: "15", value: "Entertainment: Video Games" },
  { id: "16", value: "Entertainment: Board Games" },
  { id: "17", value: "Science &amp; Nature" },
  { id: "18", value: "Science: Computers" },
  { id: "19", value: "Science: Mathematics" },
  { id: "20", value: "Mythology" },
  { id: "21", value: "Sports" },
  { id: "22", value: "Geography" },
  { id: "23", value: "History" },
  { id: "24", value: "Politics" },
  { id: "25", value: "Art" },
  { id: "26", value: "Celebrities" },
  { id: "27", value: "Animals" },
  { id: "28", value: "Vehicles" },
  { id: "29", value: "Entertainment: Comics" },
  { id: "30", value: "Science: Gadgets" },
];

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuestionsState = Question & { answers: string[] };

const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: string,
  category: number
): Promise<QuestionsState[]> => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
