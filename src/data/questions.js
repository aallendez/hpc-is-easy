// Import questions from all modules
import { questions as module1Questions } from './module-1/questions.js';
import { questions as module2Questions } from './module-2/questions.js';
import { questions as module3Questions } from './module-3/questions.js';
import { questions as module4Questions } from './module-4/questions.js';
import { questions as module5Questions } from './module-5/questions.js';

// Combine all questions from all modules
export const questions = [
  ...module1Questions,
  ...module2Questions,
  ...module3Questions,
  ...module4Questions,
  ...module5Questions
];

