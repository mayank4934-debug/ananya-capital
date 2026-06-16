// Unified quiz data — merges all part quiz files into one lookup record.
// Use this everywhere instead of importing from individual quiz files.

import { PART_QUIZZES } from "./partQuizData";
import { EXTRA_QUIZZES_1 } from "./partQuizDataExtra1";
import { EXTRA_QUIZZES_2 } from "./partQuizDataExtra2";
import { FRONTEND_BACKEND_QUIZZES } from "./partQuizDataFrontendBackend";

export const ALL_PART_QUIZZES = {
  ...PART_QUIZZES,
  ...FRONTEND_BACKEND_QUIZZES,
  ...EXTRA_QUIZZES_1,
  ...EXTRA_QUIZZES_2,
};

export default ALL_PART_QUIZZES;
