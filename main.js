var classicContainer = document.getElementById('classicContainer');
var difficultContainer = document.getElementById('difficultContainer')
var chooseGameText = document.getElementById('chooseGameText');
var chooseFighterText = document.getElementById('chooseFighterText');
var rock = document.getElementById('rock');
var tp = document.getElementById('tp');
var scissors = document.getElementById('scissors');
var classicFighters = document.getElementById('classicFighters');
var difficultFighters = document.getElementById('difficultFighters');
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

changeGameBtn.addEventListener('click', changeGame)

//-------------Functions--------------//
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
}

function changeGame() {
  hide(chooseFighterText)
  show(chooseGameText)
  hide(changeGameBtn)
  show(classicContainer)
  show(difficultContainer)
  hide(classicFighters)
  hide(difficultFighters)
}

function playGame(type) {
  displayChooseFighter()

  if(type === 'Classic') {
      game = new Game('Classic')
      show(classicFighters)
      // game.pickGame()
    }
  if(type === 'Difficult') {
      game = new Game('Difficult')
      show(difficultFighters)
      // game.pickGame()
    }
  }
