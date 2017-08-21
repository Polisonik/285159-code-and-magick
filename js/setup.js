'use strict';
var wizardNames = getNames();
var wizardSurnames = getSurnames();
var coatColor = getCoatColor();
var eyesColor = getEyesColor();
var wizards = fillWizardsArray(wizardNames, wizardSurnames, coatColor, eyesColor);

openWindowSetup();
addContentWizardsList(wizards);
openWindowWizardFriends();

function getNames() {
  return ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
}

function getSurnames() {
  return ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
}

function getCoatColor() {
  return ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
}

function getEyesColor() {
  return ['black', 'red', 'blue', 'yellow', 'green'];
}

function openWindowSetup() {
  document.querySelector('.setup').classList.remove('hidden');
}

function openWindowWizardFriends() {
  var userDialog = document.querySelector('.setup');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
}

function getRandIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function fillWizardsArray(namesArray, surnamesArray, coatArray, eyesArray) {
  var wizardsArray = [];
  for (var j = 0; j < 4; j++) {
    var randIndexNames = getRandIndex(namesArray);
    var randIndexSurnames = getRandIndex(surnamesArray);
    var randIndexCoat = getRandIndex(coatArray);
    var randIndexEyes = getRandIndex(eyesArray);

    wizardsArray.push({name: namesArray[randIndexNames] + ' ' + surnamesArray[randIndexSurnames], coatColor: coatArray[randIndexCoat], eyesColor: eyesArray[randIndexEyes]});
  }
  return wizardsArray;
}

function drawWizard(wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

function addContentWizardsList(wizardsArray) {
  var similarListElement = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 4; i++) {
    fragment.appendChild(drawWizard(wizardsArray[i]));
  }
  similarListElement.appendChild(fragment);
}
