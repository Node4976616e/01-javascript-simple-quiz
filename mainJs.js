/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

// 2. Store the rank of a player

// 3. Select the <main> HTML element

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

// 6. Output results to the <main> element

let correctAnswers = 0;
let playerRank = "";
let playerAnswer = "";

const main = document.querySelector("main");

playerAnswer = prompt("In which year started WW1 (The Great War) ?");
if (playerAnswer === "1914") {
  correctAnswers += 1;
}
console.log(correctAnswers);
playerAnswer = prompt("In which year WW1 ended ?");
if (playerAnswer === "1918") {
  correctAnswers += 1;
}
console.log(correctAnswers);
playerAnswer = prompt("Which planet is closest to Earth ?");
if (playerAnswer.toUpperCase() === "VENUS") {
  correctAnswers += 1;
}
console.log(correctAnswers);
playerAnswer = prompt(
  "What is the name of main character in Hitman game series ?"
);
playerAnswer = playerAnswer.toString();
playerAnswer = playerAnswer.replace(/\s+/g, "");
if (playerAnswer.toLowerCase() === "agent47") {
  correctAnswers += 1;
}
console.log(correctAnswers);
playerAnswer = prompt("Name 1 of the fundamental front-end languages");
if (
  playerAnswer.toLowerCase() === "html" ||
  playerAnswer.toLowerCase() === "css" ||
  playerAnswer.toLowerCase() === "javascript"
) {
  correctAnswers += 1;
}
console.log(correctAnswers);

if (correctAnswers === 5) {
  playerRank = "GOLD";
} else if (correctAnswers >= 3 && correctAnswers < 5) {
  playerRank = "SILVER";
} else if (correctAnswers >= 1 && correctAnswers < 3) {
  playerRank = "BRONZE";
} else {
  dplayerRank = "None";
}

main.innerHTML = `
  <h2> You got ${correctAnswers} out of 5 correct answers. </h2>
  <p>You earned: <strong>${playerRank}</strong> crown. </p>
`;
