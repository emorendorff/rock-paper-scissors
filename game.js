class Game {
  constructor(gameChoice) {
    this.playerOne = new Player('Human', '🧑🏼‍🎤')
    this.playerTwo = new Player('Computer', '🖥')
    this.gameChoice = gameChoice;
    this.computerChoice = null;
    this.humanChoice = null;
    this.fighters = [];
  };

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
    return this.computerChoice;
  };

  drawGame() {
  if (this.computerChoice === this.humanChoice) {
    return true;
  }
};

  fightClassic() {
    this.playerOne.wins = this.playerOne.retrieveWinsFromStorage();
    this.playerTwo.wins = this.playerTwo.retrieveWinsFromStorage();
    
  if (this.humanChoice === 'rock' && this.computerChoice === 'scissors' || this.humanChoice === 'tp' && this.computerChoice === 'rock' || this.humanChoice === 'scissors' && this.computerChoice === 'tp') {
    this.playerOne.wins+= 1;
    this.playerOne.saveWinsToStorage();
      return true;
  } else if (this.drawGame()) {
      return false;
    } else {
      this.playerTwo.wins+= 1;
      this.playerTwo.saveWinsToStorage();
        return false;
    }
  };

  fightDifficult() {
    this.playerOne.wins = this.playerOne.retrieveWinsFromStorage();
    this.playerTwo.wins = this.playerTwo.retrieveWinsFromStorage();

    if ((this.humanChoice === 'boo' && (this.computerChoice === 'koopa' || this.computerChoice === 'piranha')) ||
        (this.humanChoice === 'mario' && (this.computerChoice === 'boo' || this.computerChoice === 'chompy')) ||
        (this.humanChoice === 'koopa' && (this.computerChoice === 'piranha' || this.computerChoice === 'mario'))||
        (this.humanChoice === 'piranha' && (this.computerChoice === 'mario' || this.computerChoice === 'chompy')) ||
        (this.humanChoice === 'chompy' && (this.computerChoice === 'koopa' || this.computerChoice === 'boo')))
        {
          this.playerOne.wins+= 1;
          this.playerOne.saveWinsToStorage();
            return true;
        }
      else if (this.drawGame()) {
            return false;
        } else {
            this.playerTwo.wins+= 1;
            this.playerTwo.saveWinsToStorage()
            return false;
    }
  };

  resetGame() {
    this.computerChoice = null;
    this.humanChoice = null;
  };

  resetArray() {
    this.fighters = [];
    this.gameChoice = null;
  };
};
