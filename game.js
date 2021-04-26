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


  fightDifficult() {
    if ((this.humanChoice === 'boo' && this.computerChoice === 'koopa' || this.computerChoice === 'piranha') ||
        (this.humanChoice === 'mario' && this.computerChoice === 'boo' || this.computerChoice === 'chompy') ||
        (this.humanChoice === 'koopa' && this.computerChoice === 'piranha' || this.computerChoice === 'mario')||
        (this.humanChoice === 'piranha' && this.computerChoice === 'mario' || this.computerChoice === 'chompy') ||
        (this.humanChoice === 'chompy' && this.computerChoice === 'koopa' || this.computerChoice === 'boo'))
        {
            return true;
    } else {
            return false;
    }
  };

  pickWinnerClassic() {
    if (this.fightClassic()) {
        this.playerOne.wins++;
        this.playerOne.saveWinsToStorage()
    } else if (!this.fightClassic()) {
        this.playerTwo.wins++;
        this.playerTwo.saveWinsToStorage()
    } else {
        this.drawGame()
    }
  };

  pickWinnerDifficult() {
    if (this.fightDifficult()) {
      this.playerOne.wins++;
      this.playerOne.saveWinsToStorage()
    } else if (!this.fightDifficult()) {
      this.playerTwo.wins++;
      this.playerTwo.saveWinsToStorage()
    } else {
        this.drawGame()
    }
  };

  resetGame() {
    // this.fighters = [];
    this.computerChoice = null;
    this.humanChoice = null;
  }


}
