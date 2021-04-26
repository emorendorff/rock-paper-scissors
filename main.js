var classicContainer = document.getElementById('classicContainer');
var difficultContainer = document.getElementById('difficultContainer')
var chooseGameText = document.getElementById('chooseGameText');
var chooseFighterText = document.getElementById('chooseFighterText');
var classicFighters = document.getElementById('classicFighters');
var difficultFighters = document.getElementById('difficultFighters');
var displayFighters = document.getElementById('displayFighters');
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
      game.randomizeFighter()
      hide(classicContainer)
      displayFighters(game.humanChoice, game.computerChoice);
    }
  };

  function displayFighters (humanChoice, computerChoice) {
    displayFighters.innerHTML += `
    <section class="display-fighters" id="displayFighters">
      <img class="${humanChoice}" id="${humanChoice}" src="./assets/${humanChoice}.png">
      <img class="${computerChoice}"id="${computerChoice}" src="./assets/${computerChoice}.png">
    </section>
    `
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
