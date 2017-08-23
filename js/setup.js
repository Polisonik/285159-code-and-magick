'use strict';

openSetup();
addContentWizards();
openSetupFriend();

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
// Создание массива из объектов, которые описывают друзей волшебника
function generateWizardsArray() {
  var wizardsOptions = [];
  var numberWizards = 4;
  var names = getNames();
  var surnames = getSurnames();
  var coatColors = getCoatColor();
  var eyesColors = getEyesColor();

  for (var i = 0; i < numberWizards; i++) {
    var indexFirst = getRandIndex(names);
    var indexSecond = getRandIndex(surnames);
    var indexThird = getRandIndex(coatColors);
    var indexFourth = getRandIndex(eyesColors);
    var choiceSurname = surnames.splice(indexSecond, 1);

    wizardsOptions.push({name: names[indexFirst] + ' ' + choiceSurname, coatColor: coatColors[indexThird], eyesColor: eyesColors[indexFourth]});
  }
  return wizardsOptions;
}

// Открытие окна с настройками игрока
function openSetup() {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
}
// Создание волшебника по шаблону
function renderWizard(wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}
// Добавление новых DOM-элементов (волшебников) в список .setup-similar-list
function addContentWizards() {
  var arrayWizards = generateWizardsArray();
  var similarListElement = document.querySelector('.setup-similar-list');
  var wizardsNumber = 4;
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardsNumber; i++) {
    fragment.appendChild(renderWizard(arrayWizards[i]));
  }
  similarListElement.appendChild(fragment);
}
// Открытие окна настоек друзей волшебника 
function openSetupFriend() {
  var userDialog = document.querySelector('.setup');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
}
// Генерация случайного элемента массива
function getRandIndex(array) {
  return Math.floor(Math.random() * array.length);
}
