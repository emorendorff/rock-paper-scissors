var classicContainer = document.getElementById('classicContainer');
var difficultContainer = document.getElementById('difficultContainer')
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



//----------Event Handlers------------//
classicContainer.addEventListener('click', function() {
playGame('Classic')});

difficultContainer.addEventListener('click', function() {
  playGame('Difficult')
});

changeGameBtn.addEventListener('click', changeGame);

classicFighters.addEventListener('click', function() {
  chooseFighter(event)
});


//-------------Functions--------------//


function playGame(type) {
  displayChooseFighter()

  if(type === 'Classic') {
      game = new Game('Classic')
      show(classicFighters)
      game.pickGame()
    }
  if(type === 'Difficult') {
      game = new Game('Difficult')
      show(difficultFighters)
      game.pickGame()
    }
  };

  function chooseFighter(event) {
    if(event.target.id === 'rock') {
      game.humanChoice = 'rock'
    };
    if (event.target.id === 'tp') {
      game.humanChoice = 'tp'
    };
    if (event.target.id === 'scissors') {
      game.humanChoice = 'scissors'
    };
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
      gameChoice.humanChoice = 'mario'
    };
    if (event.target.id === 'piranha') {
      gameChoice.humanChoice = 'pirhana'
    }
    game.randomizeFighter()
    hide(classicFighters)
    displayFighters(game.humanChoice, game.computerChoice)
    declareWinner()
    displayWins()
    game.resetGame()
  };

  function displayFighters(humanChoice, computerChoice) {
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
    }
    game.pickWinnerClasic()
    displayWins()
  };

  function displayWins() {
    winsHuman.innerText = `${game.playerOne.wins}`
    winsComputer.innerText = `${game.playerTwo.wins}`
  }

  function show(element) {
    element.classList.remove('hidden');
  };

  function hide(element) {
    element.classList.add('hidden');
  };

  function displayChooseFighter() {
    hide(classicContainer)
    hide(difficultContainer)
    hide(chooseGameText)
    show(chooseFighterText)
    show(changeGameBtn)
  };

  function changeGame() {
    hide(chooseFighterText)
    hide(changeGameBtn)
    hide(classicFighters)
    hide(difficultFighters)
    show(chooseGameText)
    show(classicContainer)
    show(difficultContainer)
  };
