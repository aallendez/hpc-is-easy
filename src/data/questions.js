// Mock MCQ Dataset
export const questions = [
  {
    id: 1,
    module: 1,
    question: "What is the primary purpose of High-Performance Computing (HPC)?",
    options: [
      "To run simple desktop applications",
      "To solve complex computational problems that require significant processing power",
      "To store large amounts of data",
      "To create basic websites"
    ],
    correctAnswer: [1], // array of correct answer indices
    multipleCorrect: false // true if multiple answers can be selected
  },
  {
    id: 2,
    module: 2,
    question: "What does the following Python code snippet output?",
    code: `def multiply(a, b):
    return a * b

result = multiply(3, 4)
print(result)`,
    options: [
      "7",
      "12",
      "34",
      "Error"
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 3,
    module: 3,
    question: "Which of the following are benefits of parallel computing? (Select all that apply)",
    options: [
      "Faster execution time for large problems",
      "Lower memory usage per node",
      "Better resource utilization",
      "Automatic code optimization",
      "Reduced development time"
    ],
    correctAnswer: [0, 1, 2], // multiple correct answers
    multipleCorrect: true
  },
  {
    id: 4,
    module: 4,
    question: "Is HPC only used in scientific research?",
    options: [
      "True",
      "False"
    ],
    correctAnswer: [1],
    multipleCorrect: false
  },
  {
    id: 5,
    module: 5,
    question: "What is Amdahl's Law primarily used to describe?",
    code: `Speedup = 1 / ((1 - P) + P/N)
where P = parallel portion
      N = number of processors`,
    options: [
      "The cost of hardware",
      "The theoretical speedup limit when parallelizing a program",
      "The amount of memory needed"
    ],
    correctAnswer: [1],
    multipleCorrect: false
  }
];

