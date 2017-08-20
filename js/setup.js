'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');

userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var wizards = fillWizardsArray(WIZARD_NAMES, WIZARD_SURNAMES, COAT_COLOR, EYES_COLOR);

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
	fragment.appendChild(drawWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

function fillWizardsArray (namesArray, surnamesArray, coatArray, eyesArray) {
	var wizardsArray = [];
  for (var i = 0; i < 4; i++) {
    var randIndexNames = getRandIndex(namesArray);
    var randIndexSurnames = getRandIndex(surnamesArray);
    var randIndexCoat = getRandIndex(coatArray);
    var randIndexEyes = getRandIndex(eyesArray);
		
		wizardsArray.push({name: namesArray[randIndexNames] + ' ' + surnamesArray[randIndexSurnames], 
								       coatColor: coatArray[randIndexCoat], 
								       eyesColor: eyesArray[randIndexEyes]});
	}
	return wizardsArray;
}

function drawWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  
	return wizardElement;
}

function getRandIndex (array) {
	return Math.floor(Math.random() * array.length);
}
