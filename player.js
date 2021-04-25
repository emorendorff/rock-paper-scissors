class Player {
  constructor(name, token) {
    this.name = name
    this.token = token
    this.wins = 0
  }

  takeTurn() {
    if(!game.computerTurn) {
      game.computerTurn = true;
      game.humanTurn = false;
    }
  }

  saveWinsToStorage() {
    localStorage.setItem();
  };

  retrieveWinsFromStorage() {
    localStorage.getItem()
  };
}
