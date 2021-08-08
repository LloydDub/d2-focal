// function to roll a 6 sided dice x amount of times.
// an empty variable to store rolls as a string
// for loop to check the amount of times to roll
// process.argv to take command line argument
// string to store the results of each roll
// join the dice rolled etc statement twith results +=

let numOfDice = process.argv.slice(2);
 console.log(numOfDice)
// numOfDice = Number(numOfDice);
// console.log(numOfDice)

function diceRoller(numOfDice) {
  let finalDice = "";
  for (let i = 0; i < Number(numOfDice[0]); i++) {
    let eachDice = "";
    eachDice = 1 + Math.floor(Math.random() * 6);    
    finalDice += eachDice + ", ";
  }
  
  let lastComma = finalDice.lastIndexOf(", ");
  finalDice = finalDice.slice(0, lastComma);

  return finalDice
}

console.log("Rolled " + numOfDice + " dice: " + diceRoller(numOfDice));

