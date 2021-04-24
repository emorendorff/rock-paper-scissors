class Player {
  constructor(name, token) {
    this.name = name
    this.token = token
    this.wins = 0
  }
  takeTurn() {

  }


  saveWinsToStorage() {

  }

  retrieveWinsFromStorage() {

  }
}

var playerOne = new Player('Human', '🧑🏼‍🎤')
var playerTwo = new Player('Computer', '🖥')
// var userChoice = prompt("Do you choose rock, paper or scissor?");
// var computerChoice = Math.random();
// if (computerChoice > 0 && computerChoice < 0.33) {
//   computerChoice = "Rock";
// } else if (computerChoice > 0.34 && computerChoice < 0.67) {
//   computerChoice = "Paper";
// } else {
//   computerChoice = "Scissor";
// }
// console.log(computerChoice);
