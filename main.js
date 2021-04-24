var classicContainer = document.getElementById('classicContainer');
var difficultContainer = document.getElementById('difficultContainer')
var chooseGameText = document.getElementById('chooseGameText');
var chooseFighterText = document.getElementById('chooseFighterText');

//----------Event Listeners------------//
classicContainer.addEventListener('click', playClassic)

function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function playClassic() {
  hide(classicContainer)
  hide(difficultContainer)
  hide(chooseGameText)
  show(chooseFighterText)
}
