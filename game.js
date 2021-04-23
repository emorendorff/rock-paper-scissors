class Game {
  constructor() {
    this.playerOne = new Player('Human', '🧑🏼‍🎤');
    this.playerTwo = new Player('Computer', '🖥');
    this.gameChoice = gameChoice;
    this.humanTurn = true;
    this.fighters = [];
  }
}

chooseGame() {
  if(this.gameChoice === 'Classic') {
    this.fighters = ['Rock', 'Paper', 'Scissors ']
  } else if (this.gameChoice === 'Difficult') {
    this.fighters = ['Boo', 'Chompy', 'Koopa', 'Mario', 'Piranha']
  }
}
//two player instances
//way to keep track of the data for the game board
//way to keep track of the selected game type
//way to keep tract of which players turn it is
//a way to check the games board data for win conditions
//way to detect when a gmae is a draw
//way to reset the Game's board to begin a new game
