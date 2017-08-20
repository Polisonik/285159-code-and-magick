'use strict';
var userDialog = document.querySelector('.setup');

if (userDialog.classList.contains('hidden')) {
  userDialog.classList.remove('hidden');
}
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var wizards = [
  {
    name:'',
    coatColor: '',
		eyesColor: ''
  },
  {
    name: WIZARD_NAMES[1],
    coatColor: 'rgb(215, 210, 55)',
		eyesColor: ''
  },
  {
    name: WIZARD_NAMES[2],
    coatColor: 'rgb(101, 137, 164)',
		eyesColor: ''
  },
  {
    name: WIZARD_NAMES[3],
    coatColor: 'rgb(127, 127, 127)',
		eyesColor: ''
  }
];

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
	
	wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
	//wizardsElement.querySelector('.wizard-eyes').fill = wizards[i].eyesColor;
  similarListElement.appendChild(wizardElement);
}