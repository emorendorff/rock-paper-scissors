class Game {
  constructor(gameChoice) {
    this.playerOne = new Player('Human', '🧑🏼‍🎤')
    this.playerTwo = new Player('Computer', '🖥')
    this.gameChoice = gameChoice;
    this.humanTurn = true;
    this.computerTurn = false;
    this.computerChoice = null;
    this.humanChoice = null
    this.fighters = [];
  }

pickGame() {
  if (this.gameChoice === 'Classic') {
   this.fighters = ['rock', 'tp', 'scissors']
  } else if (this.gameChoice === 'Difficult') {
    this.fighters = ['boo', 'chompy', 'koopa', 'mario', 'piranha']
  }
};

  randomizeFighter() {
  var index = Math.floor(Math.random() * this.fighters.length)
    this.computerChoice = this.fighters[index]
    return this.computerChoice
  };

  drawGame() {
  if (this.computerChoice === this.humanChoice) {
    return true;
  }
};

  fightClassic() {
  if (this.humanChoice === 'rock' && this.computerChoice === 'scissors' || this.humanChoice === 'tp' && this.computerChoice === 'rock' || this.humanChoice === 'scissors' && this.computerChoice === 'tp') {
      return true;
  } else {
      return false;
    }
  };

  pickWinnerClasic() {
    if (this.fightClassic()) {
      this.playerOne.wins++;
    } else if (!this.fightClassic()) {
      this.playerTwo.wins++;
    } else {
        this.drawGame()
    }
  };

  // setTimeout(game.resetBoard, 3000){}

  resetGame() {
    setTimeout(function() {
      hide(chooseFighterText)
      hide(displayFightersSection)
      show(chooseGameText)
      show(classicFighters)
    }, 1000)
    // displayChooseFighter()
  };

}

//in set time out set the value of this.


//how the fuck do i link this array to the click images as the data model vs displaying on the dom
//two player instances
//way to keep track of the data for the game board
//way to keep track of the selected game type
//way to keep tract of which players turn it is
//a way to check the games board data for win conditions
//way to detect when a gmae is a draw
//way to reset the Game's board to begin a new game
