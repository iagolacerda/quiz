// Utils
import type { QUESTION_DIFFICULTY, QUESTION_TYPE } from "@/utils/enums";

interface Choice {
  checked: boolean;
  option: string;
  text: string;
  isCorrect: boolean;
};

export interface IQuestion {
  question: string;
  difficulty: QUESTION_DIFFICULTY;
  type: QUESTION_TYPE
  choices: Choice[];
  context: string;
};
