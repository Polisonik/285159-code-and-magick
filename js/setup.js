'use strict';
var userDialog = document.querySelector('.setup');

if (userDialog.classList.contains('hidden')) {
  userDialog.classList.remove('hidden');
}
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var names = [];
names = getName(WIZARD_NAMES, WIZARD_SURNAMES);
var randIndexcCoatColor = Math.floor(Math.random() * COAT_COLOR.length);

var wizards = [
	{
		name: names[0],
		coatColor: COAT_COLOR[randIndexcCoatColor],
		eyesColor: EYES_COLOR[0]
	},
	{
		name: names[1],
		coatColor: COAT_COLOR[randIndexcCoatColor],
		eyesColor: EYES_COLOR[0]
	},
	{
		name: names[2],
		coatColor: COAT_COLOR[0],
		eyesColor: EYES_COLOR[0]
	},
  {
		name: names[3],
		coatColor: COAT_COLOR[0],
		eyesColor: EYES_COLOR[0]
	}
];

function getName(arrayNames, arraySurnames) {
	var newArray=[];

  for (var i = 0; i < arrayNames.length; i++ ) {
	  var rand1 = Math.floor(Math.random() * arrayNames.length);
	  var rand2 = Math.floor(Math.random() * arraySurnames.length);
	  newArray[i] =  arrayNames[rand1] + ' ' + arraySurnames[rand2];
  }
	return newArray;
}

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
	
	wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
	//wizardsElement.querySelector('.wizard-eyes').fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}
