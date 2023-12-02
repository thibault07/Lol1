// Your JavaScript code goes here

// Define characters and their associated questions with points
const characters = {
  characterA: {
    questions: {
      question1: { A: 1, B: 0, C: 0 },question2: { A: 0, B: 1, C: 0 },
      // Add more questions and points as needed
    },
    totalPoints: 0,
  },
  characterB: {
    questions: {
      question1: { A: 0, B: 1, C: 0 },
      question2: { A: 0, B: 0, C: 1 },
      // Add more questions and points as needed
    },
    totalPoints: 0,
  },
  // Add more characters as needed
};

// Function to calculate points based on user answers
function calculatePoints(userAnswers) {
  for (const character in characters) {
    characters[character].totalPoints = 0;
    for (const question in characters[character].questions) {
      const userAnswer = userAnswers[question];
      characters[character].totalPoints += characters[character].questions[question][userAnswer];
    }
  }
}

// Example user answers (replace this with actual user input)
const userAnswers = {
  question1: 'A',
  question2: 'B',
  // Add more questions as needed
};

// Calculate points based on user answers
calculatePoints(userAnswers);

// Find the character with the highest points
let highestCharacter = null;
let highestPoints = -1;

for (const character in characters) {
  if (characters[character].totalPoints > highestPoints) {
    highestPoints = characters[character].totalPoints;
    highestCharacter = character;
  }
}

// Output the result
console.log(`Recommended character: ${highestCharacter}`);
console.log(`Percentage match: ${(highestPoints / totalPossiblePoints) * 100}%`);