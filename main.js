var classicContainer = document.getElementById('classicContainer');
var difficultContainer = document.getElementById('difficultContainer')
var chooseGameText = document.getElementById('chooseGameText');
var chooseFighterText = document.getElementById('chooseFighterText');
var rock = document.getElementById('rock');
var tp = document.getElementById('tp');
var scissors = document.getElementById('scissors');
var classicFighters = document.getElementById('classicFighters')

//----------Event Listeners------------//
classicContainer.addEventListener('click', displayGame)
difficultContainer.addEventListener('click', displayGame)

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function displayGame() {
  hide(classicContainer)
  hide(difficultContainer)
  hide(chooseGameText)
  show(chooseFighterText)
  if(classicContainer) {
    show(classicFighters)
  }
}
