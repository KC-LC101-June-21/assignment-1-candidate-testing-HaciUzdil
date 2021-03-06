const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question= 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';
let questions= [
    'True or false: 5 kilometer == 5000 meters? ',
  '(5 + 3)/2 * 10 = ? ',
  'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? ',
  'What is the minimum crew size for the ISS? '
];
let correctAnswers = [
  'Sally Ride',
  'true',
  '40',
  'Trajectory',
  '3'
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question('What is your name? ')
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswer  = input.question(question)
  candidateAnswers[0] = input.question(questions[0])
  candidateAnswers[1] = input.question(questions[1])
  candidateAnswers[2] = input.question(questions[2])
  candidateAnswers[3] = input.question(questions[3])
  candidateAnswers[4] = input.question(questions[4])
  
  

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  candidateAnswer == correctAnswer ? console.log('correct') : console.log('incorrect')
  let grade= 0
  for(let i in candidateAnswers) {
    candidateAnswers.indexOf(correctAnswers[i]) != -1 && grade++
  }
  console.log(`${grade}/5 = ${(grade/5) * 100 }%`)
 
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log('Hello, ' + candidateName)
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};