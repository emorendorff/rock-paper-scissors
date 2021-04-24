var classicContainer = document.getElementById('classicContainer');
var difficultContainer = document.getElementById('difficultContainer')
var chooseGameText = document.getElementById('chooseGameText');
var chooseFighterText = document.getElementById('chooseFighterText');
var rock = document.getElementById('rock');
var tp = document.getElementById('tp');
var scissors = document.getElementById('scissors');
var classicFighters = document.getElementById('classicFighters');
var difficultFighters = document.getElementById('difficultFighters');

//----------Event Listeners------------//
classicContainer.addEventListener('click', function() {
playGame('Classic')});
difficultContainer.addEventListener('click', function() {
  playGame('Difficult')
});
//-------------Functions--------------//
function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function playGame(type) {
  hide(classicContainer)
  hide(difficultContainer)
  hide(chooseGameText)
  show(chooseFighterText)

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
  }
