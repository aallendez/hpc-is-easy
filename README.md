# MCQ Quiz Practice App

A simple and elegant React application for practicing Multiple Choice Questions (MCQ) with module filtering and instant feedback.

## Features

- ✅ Choose the number of questions for your quiz
- ✅ Filter questions by module (1-5)
- ✅ Get immediate feedback after each question
- ✅ See your final grade with a complete breakdown
- ✅ Support for code snippets in questions
- ✅ Clean and modern UI

## Getting Started

### Installation

```bash
npm install
```

### Running the App

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── QuizSetup.jsx       # Setup screen for quiz configuration
│   │   ├── Question.jsx        # Individual question display
│   │   ├── Results.jsx         # Final results and grade
│   │   └── *.css              # Component styles
│   ├── data/
│   │   └── questions.js       # Question bank (mock data)
│   ├── App.jsx                # Main app component
│   ├── main.jsx              # App entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Adding Real Questions

To add your real question bank, edit `/src/data/questions.js` and follow this format:

```javascript
{
  id: 1,                    // Unique identifier
  module: 1,               // Module number (1-5)
  question: "Your question text here",
  code: "Optional code snippet",  // Optional
  options: [               // Dynamic number of options (2 for T/F, 3, 4, 5, or more)
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  correctAnswer: [1],      // Array of correct answer indices (0-based)
                          // Use [0, 2] for multiple correct answers
  multipleCorrect: false   // Set to true if multiple answers should be selected
}
```

### Examples:

**True/False Question:**
```javascript
{
  id: 1,
  module: 1,
  question: "Is the sky blue?",
  options: ["True", "False"],
  correctAnswer: [0],
  multipleCorrect: false
}
```

**Multiple Correct Answers:**
```javascript
{
  id: 2,
  module: 2,
  question: "Which are primary colors? (Select all that apply)",
  options: ["Red", "Green", "Blue", "Yellow", "Purple"],
  correctAnswer: [0, 2, 3],  // Red, Blue, Yellow
  multipleCorrect: true
}
```

## Technologies Used

- React 18
- Vite
- CSS3

## License

MIT

