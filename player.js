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
    } else {
      game.humanTurn
      !game.computerTurn
    }
  }

  saveWinsToStorage() {
    localStorage.setItem(`${this.name}`, JSON.stringify(this.wins));
  };

  retrieveWinsFromStorage() {
    var wins = JSON.parse(localStorage.getItem(`${this.name}`) || 0);
    return wins;
  };
}
