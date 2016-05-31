//guess the number game. five chances

//get a random number between 1 and 10
var randomNum = Math.ceil(Math.random() * 10);

//prompt the user for a number
//prompt doesn't run in atom
/*
function guessNum() {
  var guess = prompt("Pick a number between 1 and 10.");
  return guess;
};
*/
//for test purposes we will use a random number and change that number with each wrong guess
function userNum() {
  return Math.ceil(Math.random() * 10);
};

function numberCompare(num, guessNum) {
  if (num === guessNum){
    return true;
  } else {
    return false;
  }
};

function game(){
  //count number of guess
  var count = 0;
  //play till win or 5 guesses
  while(count < 6) {
    //number varabiles
    var number = randomNum;
    var numberGuess = userNum()
    //see if 5 guess have been used
    if(count === 5) {
      console.log("You have used all your guesses! Sorry but you have lost the guessing game!");
      console.log("The number was " + number);
      break;
    }
    //try to guess the number
    if (numberCompare(number, numberGuess) === false) {
      count += 1;
      console.log("You guessed " + numberGuess)
      console.log(count)
      console.log("You have " + (5 - count) + " guesses left.")
      //return guessNum;
    } else {
      console.log("You guessed " + numberGuess)
      console.log("You have guessed the number! Thanks for playing!")
      break;
    }
  }
};

game()
