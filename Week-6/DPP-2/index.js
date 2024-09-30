// Import readline module to handle user input in Node.js
const readline = require('readline');

// Create an interface for reading input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Quiz questions and answers
const question1 = "What is 2 + 6?";
const answer1 = 8;

const question2 = "What is the capital of Japan?";
const answer2 = "tokyo";

const question3 = "Is JavaScript case-sensitive? (yes/no)";
const answer3 = "yes";

// Initialize score
let score = 0;
const totalQuestions = 3;

// Function to ask questions
const askQuestion = (query) => {
    return new Promise((resolve) => rl.question(query, resolve));
};

(async () => {
    // Question 1
    let userAnswer1 = await askQuestion(question1 + " ");
    if (Number(userAnswer1) === answer1) {
        score++;
    }

    // Question 2
    let userAnswer2 = await askQuestion(question2 + " ");
    if (userAnswer2.toLowerCase() === answer2) {
        score++;
    }

    // Question 3
    let userAnswer3 = await askQuestion(question3 + " ");
    if (userAnswer3.toLowerCase() === answer3) {
        score++;
    }

    // Calculate percentage score
    const percentageScore = (score / totalQuestions) * 100;

    // Use bitwise OR to round down the percentage score
    const roundedScore = percentageScore | 0;

    // Prepare result message
    let resultMessage = "Quiz Results:\n\n";
    resultMessage += "Questions answered correctly: " + score + " out of " + totalQuestions + "\n";
    resultMessage += "Your score: " + roundedScore + "%\n\n";

    // Evaluate performance using logical operators and conditional statements
    if (score === totalQuestions) {
        resultMessage += "Excellent! You got all questions right!";
    } else if (score > 0 && score < totalQuestions) {
        resultMessage += "Good job! You got some questions right.";
    } else if (score === 0) {
        resultMessage += "Keep practicing! You'll do better next time.";
    }

    // Display final result
    console.log(resultMessage);

    // Close the readline interface
    rl.close();
})();
