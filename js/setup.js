'use strict';

init();

function init() {
  openSetup();
  addContentWizards();
  openSetupFriend();
}
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
// Создание массива из друзей волшебника
function generateWizardsArray() {
  var wizardsOptions = [];
  var numberWizards = 4;
  var names = getNames();
  var surnames = getSurnames();
  var coatColors = getCoatColor();
  var eyesColors = getEyesColor();

  for (var i = 0; i < numberWizards; i++) {
    wizardsOptions.push(generateWizard(names, surnames, coatColors, eyesColors));
  }
  return wizardsOptions;
}
// Создание одного волшебника
function generateWizard(namesArray, surnamesArray, coatColorsArray, eyesColorsArray) {
  var indexFirst = getRandIndex(namesArray);
  var indexSecond = getRandIndex(surnamesArray);
  var indexThird = getRandIndex(coatColorsArray);
  var indexFourth = getRandIndex(eyesColorsArray);
  var choiceSurname = surnamesArray.splice(indexSecond, 1);
  var wizard = {};
  wizard.name = namesArray[indexFirst] + ' ' + choiceSurname;
  wizard.coatColor = coatColorsArray[indexThird];
  wizard.eyesColor = eyesColorsArray[indexFourth];
  return wizard;
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
