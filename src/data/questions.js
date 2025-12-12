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
    correctAnswer: 1, // index of correct answer
    explanation: "HPC is designed to solve complex computational problems that require significant processing power, often using parallel processing techniques."
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
    correctAnswer: 1,
    explanation: "The function multiplies 3 * 4, which equals 12."
  },
  {
    id: 3,
    module: 3,
    question: "In parallel computing, what is the main benefit of using MPI (Message Passing Interface)?",
    options: [
      "It automatically speeds up any code",
      "It allows processes to communicate and coordinate in distributed memory systems",
      "It reduces memory usage",
      "It simplifies sequential programming"
    ],
    correctAnswer: 1,
    explanation: "MPI enables processes to communicate and coordinate work across distributed memory systems, which is essential for parallel computing across multiple nodes."
  },
  {
    id: 4,
    module: 4,
    question: "Which of the following is NOT a typical metric for measuring HPC performance?",
    options: [
      "FLOPS (Floating Point Operations Per Second)",
      "Speedup",
      "Font size",
      "Efficiency"
    ],
    correctAnswer: 2,
    explanation: "Font size is not a performance metric. FLOPS, speedup, and efficiency are all standard metrics for evaluating HPC performance."
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
      "The amount of memory needed",
      "The number of bugs in code"
    ],
    correctAnswer: 1,
    explanation: "Amdahl's Law describes the theoretical speedup limit when parallelizing a program, showing that the sequential portion of the code limits the overall speedup."
  }
];

