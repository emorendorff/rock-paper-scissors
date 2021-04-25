// var Player = require('./Player')

class Game {
  constructor(gameChoice) {
    this.playerOne = new Player('Human', '🧑🏼‍🎤')
    this.playerTwo = new Player('Computer', '🖥')
    this.gameChoice = gameChoice;
    this.computerChoice = null;
    this.humanChoice = null
    this.fighters = [];
  }

pickGame() {
  if(this.gameChoice === 'Classic') {
    this.fighters.push('Rock', 'Paper', 'Scissors ')
  } else if (this.gameChoice === 'Difficult') {
    this.fighters.push('Boo', 'Chompy', 'Koopa', 'Mario', 'Piranha')
  }
};

randomizeFighter() {
  var index = Math.floor(Math.random() * this.fighters.length)
    this.computerChoice = this.fighters[index]
  }
};

drawGame() {
  if (this.computerChoice === this.humanChoice) {
    return true;
  }
};

fight() {
  if(this.humanChoice === 'Rock' && this.computerChoice === 'Paper' || this.humanChoice === 'Paper' && this.computerChoice === 'Rock' || this.humanChoice === 'Scissors' && this.computerChoice === 'Paper') {
      return true;
  } else {
      return false;
  }
};




//   if((this.humanChoice === 'Rock' && this.computerChoice === 'Paper') ||
//     (this.humanChoice === 'Paper' && this.computerChoice == 'Rock') ||
//     (this.humanChoice === 'Scissors' && this.computerChoice === 'Paper')) {
//       this.playerOne.wins += 1;
//       return true
//     } else if ((this.computerChoice === 'Rock' && this.computerChoice === 'Paper') ||
//               (this.computerChoice === 'Paper' && this.computerChoice === 'Rock')
//               (this.computerChoice === 'Scissors' && thid.computerChoice === 'Paper') {
//
//     }
//how the fuck do i link this array to the click images as the data model vs displaying on the dom
//two player instances
//way to keep track of the data for the game board
//way to keep track of the selected game type
//way to keep tract of which players turn it is
//a way to check the games board data for win conditions
//way to detect when a gmae is a draw
//way to reset the Game's board to begin a new game
