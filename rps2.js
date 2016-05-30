//object that hold each players move
var playersMoves = {};

//get user move. I have commented out the fucntion because prompt doesn't work on my editor.
/*
function getPlayerMove() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
*/
var playerMove = "scissors";

//get the computers choice
function computerChoice() {
  var computerPick = Math.random();
  if (computerPick <= 0.33) {
    return "rock";
  } else if (computerPick >= 0.34 && computerPick <= 0.66) {
    return "paper";
  } else {
    return "scissors"
  }
};

//addes each players moves to the array ever round
function addMovesToArray(playerMove, compMove) {
  playersMoves.user = playerMove;
  playersMoves.comp = compMove;
  return playersMoves
};
//compare and choose round winner
function getWinner(playersMoves) {
  //show who has choosen what
  console.log("The Computer has thrown " + playersMoves.comp);
  console.log("The User has thrown " + playersMoves.user);
  if (playersMoves.user === playersMoves.comp){
    console.log("It is a tie!");
    return "tie";
  }
  //check to see if the computer has won
  if (playersMoves.user === "rock" && playersMoves.comp === "paper") {
    console.log("The Computer has won this round!");
    return "comp";
  } else if (playersMoves.user === "paper" && playersMoves.comp === "scissors") {
    console.log("The Computer has won this round!");
    return "comp";
  } else if (playersMoves.user === "scissors" && playersMoves.comp === "rock") {
    console.log("The Computer has won this round!");
    return "comp";
    //If not, then the user has won.
  } else {
    console.log("The User has won this round!")
    return "user";
  }
};

//play until someone gets to five wins
function game() {
  console.log("Welcome To Rock Paper Scissor! Play against the Computer until someone gets five wins!")
  //track wins and ties
  var user = 0
  var comp = 0
  //play until someone gets five wins
  while(true){
    addMovesToArray(playerMove, computerChoice());
    //check too see if the user won
    if(user === 5) {
      gameWinner = "User";
      break;
    }
    // check to see if the comptuer won the round
    if (comp === 5) {
      gameWinner = "Computer";
      break;
    }
    //track round winner and the get the game winner
    var roundWinner = getWinner(playersMoves);
    var gameWinner;
    //check to see if user or computer have won the round and update their number of wins
    if (roundWinner === "user") {
      user += 1;
      console.log("User " + user + " |  Comptuer " + comp);
    } else if (roundWinner === "comp") {
      comp += 1;
      console.log("User " + user + " |  Comptuer " + comp);
    }
  }
  //print of the winner of the game
  console.log("The Winner of the game is the " + gameWinner);
};

game();
