var classicContainer = document.getElementById('Classic');
var difficultContainer = document.getElementById('Difficult')
var chooseGameText = document.getElementById('chooseGameText');
var chooseFighterText = document.getElementById('chooseFighterText');
var classicFighters = document.getElementById('classicFighters');
var difficultFighters = document.getElementById('difficultFighters');
var displayFightersSection = document.getElementById('displayFighters');
var winsHuman = document.getElementById('zeroHuman');
var winsComputer = document.getElementById('zeroComp')
var rock = document.getElementById('rock');
var tp = document.getElementById('tp');
var scissors = document.getElementById('scissors');
var chompy = document.getElementById('chomp');
var boo = document.getElementById('boo');
var koopa = document.getElementById('koopa');
var mario = document.getElementById('mario');
var piranha = document.getElementById('piranha');
var changeGameBtn = document.getElementById('changeGame')

var game = new Game();

//----------Event Handlers------------//
classicContainer.addEventListener('click', newGame)
difficultContainer.addEventListener('click', newGame)
changeGameBtn.addEventListener('click', changeGame);
classicFighters.addEventListener('click', chooseFighterClassic);
difficultFighters.addEventListener('click', chooseFighterDifficult);
window.addEventListener('load', retrieveWins);

//-------------Functions--------------//
function newGame() {
  if(event.target.id === 'Classic') {
      game.gameChoice = 'Classic'
      game.pickGame()
      show(classicFighters)
      displayChooseFighter()
    };
  if(event.target.id === 'Difficult') {
      game.gameChoice = 'Difficult'
      game.pickGame()
      show(difficultFighters)
      displayChooseFighter()
    };
  };

function chooseFighterClassic() {
  if(event.target.id === 'rock') {
      game.humanChoice = 'rock'
    };
  if (event.target.id === 'tp') {
      game.humanChoice = 'tp'
    };
  if (event.target.id === 'scissors') {
      game.humanChoice = 'scissors'
    };
    game.randomizeFighter();
    hide(classicFighters);
    show(displayFightersSection);
    displayFighters(game.humanChoice, game.computerChoice);
    declareWinner();
    displayWins();
    resetAll();
  };

  function chooseFighterDifficult() {
    if (event.target.id === 'boo') {
        game.humanChoice = 'boo'
    };
    if (event.target.id === 'chompy') {
        game.humanChoice = 'chompy'
    };
    if (event.target.id === 'koopa') {
        game.humanChoice = 'koopa'
    };
    if (event.target.id === 'mario') {
        game.humanChoice = 'mario'
    };
    if (event.target.id === 'piranha') {
      game.humanChoice = 'piranha'
    };
    game.randomizeFighter();
    hide(difficultFighters);
    show(displayFightersSection);
    displayFighters(game.humanChoice, game.computerChoice);
    declareDifficultWinner();
    displayWins();
    resetAll();
  };

  function displayFighters(humanChoice, computerChoice) {
    if (game.gameChoice === 'Classic') {
      hide(classicFighters)
    } else if (game.gameChoice === 'Difficult') {
      hide(difficultFighters)
    };
    displayFightersSection.innerHTML = ''
    displayFightersSection.innerHTML += `
      <img id=${humanChoice} src="assets/${humanChoice}.png">
      <img id=${computerChoice} src="assets/${computerChoice}.png">
    `
  };

  function declareWinner() {
    if (game.fightClassic()) {
      chooseFighterText.innerText = 'HUMAN WINS THIS ROUND!'
    } else if (game.drawGame()) {
      chooseFighterText.innerText = 'DRAW! PLAY AGAIN!'
    } else {
      chooseFighterText.innerText = 'COMPUTER WINS THIS ROUND'
    };
    displayWins();
  };
function declareDifficultWinner() {
    if (game.fightDifficult()) {
      chooseFighterText.innerText = 'HUMAN WINS THIS ROUND!'
    } else if (game.drawGame()) {
      chooseFighterText.innerText = 'DRAW! PLAY AGAIN!'
    } else {
      chooseFighterText.innerText = 'COMPUTER WINS THIS ROUND'
    };
    displayWins();
  };

  function displayWins() {
    winsHuman.innerText = `${game.playerOne.wins}`;
    winsComputer.innerText = `${game.playerTwo.wins}`;
  };

  function resetAll() {
    game.resetGame();
    window.setTimeout(returnGameBoard, 1500);
  };

  function returnGameBoard() {
    if (game.gameChoice === 'Classic') {
      show(classicFighters)
    } else if (game.gameChoice === 'Difficult') {
      show(difficultFighters)
    };
    show(changeGameBtn);
    displayChooseFighter();
    hide(displayFightersSection);
    chooseFighterText.innerText = 'Choose your fighter!';
  };

  function retrieveWins() {
    winsHuman.innerText = game.playerOne.retrieveWinsFromStorage();
    winsComputer.innerText = game.playerTwo.retrieveWinsFromStorage();
  };

  function show(element) {
    element.classList.remove('hidden');
  };

  function hide(element) {
    element.classList.add('hidden');
  };

  function displayChooseFighter() {
    hide(classicContainer);
    hide(difficultContainer);
    hide(chooseGameText);
    show(chooseFighterText);
  };

  function changeGame() {
    hide(chooseFighterText);
    hide(changeGameBtn);
    hide(classicFighters);
    hide(difficultFighters);
    show(chooseGameText);
    show(classicContainer);
    show(difficultContainer);
  };
