class Player {
  constructor(name, token) {
    this.name = name
    this.token = token
    this.wins = 0
  }


  saveWinsToStorage() {
    localStorage.setItem();
  };

  retrieveWinsFromStorage() {
    localStorage.getItem()
  };
}

// module.exports = Player
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
