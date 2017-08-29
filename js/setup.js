'use strict';

(function () {
  controlUserDilog();
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
  function getFireball() {
    return ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
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

  // открытие окна настроек волшебника
  function controlUserDilog() {
    var setupOpen = document.querySelector('.setup-open');

    setupOpen.addEventListener('click', function () {
      openPopup();
    });
    setupOpen.addEventListener('keydown', onKeydowynEnter);
  }
  // Открытие окна и добавление обработчиков событий на элементы открывшегося окна;
  function openPopup() {
    var setup = document.querySelector('.setup');
    var setupClose = setup.querySelector('.setup-close');
    var saveButton = setup.querySelector('.setup-submit');
    var wizardOption = document.querySelector('.setup-wizard');
    var coatColor = wizardOption.querySelector('.wizard-coat');
    var colorEyes = wizardOption.querySelector('.wizard-eyes');
    var colorFireball = document.querySelector('.setup-fireball-wrap');

    setup.classList.remove('hidden');
    validateForm();
    document.addEventListener('keydown', onKeydownEsc);
    setupClose.addEventListener('click', onClickCross);
    setupClose.addEventListener('keydown', onKeydownCrossEnter);
    saveButton.addEventListener('click', onClikSaveButton);
    saveButton.addEventListener('keydown', onKeydownSaveButton);
    coatColor.addEventListener('click', onClickCoat);
    colorEyes.addEventListener('click', onClickEyes);
    colorFireball.addEventListener('click', onClickFireball);
  }
  // Закрытие окна с удалением событий;
  function closePopup() {
    var setup = document.querySelector('.setup');
    var setupClose = setup.querySelector('.setup-close');
    var userNameInput = setup.querySelector('.setup-user-name');
    var saveButton = setup.querySelector('.setup-submit');
    var wizardOption = document.querySelector('.setup-wizard');
    var coatColor = wizardOption.querySelector('.wizard-coat');
    var colorEyes = wizardOption.querySelector('.wizard-eyes');
    var colorFireball = document.querySelector('.setup-fireball-wrap');

    setup.classList.add('hidden');
    document.removeEventListener('keydown', onKeydownEsc);
    setupClose.removeEventListener('click', onClickCross);
    setupClose.removeEventListener('keydown', onKeydownCrossEnter);
    userNameInput.removeEventListener('invalid', onInputUserName);
    userNameInput.removeEventListener('invalid', onInputUserNameForEdge);
    saveButton.removeEventListener('click', onClikSaveButton);
    saveButton.removeEventListener('keydown', onKeydownSaveButton);
    coatColor.removeEventListener('click', onClickCoat);
    colorEyes.removeEventListener('click', onClickEyes);
    colorFireball.removeEventListener('click', onClickFireball);

  }
  // Обработчие события нажания на Esc; document.getElementById('some-focusable') === document.activeElement

  function onKeydownEsc(event) {
    var setup = document.querySelector('.setup');
    var userNameInput = setup.querySelector('.setup-user-name');
    var Esc = 27;

    if ((event.keyCode === Esc) && !(document.activeElement === userNameInput)) {
      setup.classList.add('hidden');
    }
  }
  // Обработчик события нажатия Enter на иконку для открытия окна
  function onKeydowynEnter(event) {
    var Enter = 13;

    event.preventDefault();
    if (event.keyCode === Enter) {
      openPopup();
    }
  }
  // Событие закрытия диалогового окна
  function onClickCross(event) {
    event.preventDefault();
    closePopup();
  }
  // Обработчик события нажатия Enter крестик для закрытия окна
  function onKeydownCrossEnter(event) {
    var Enter = 13;
    event.preventDefault();
    if (event.keyCode === Enter) {
      closePopup();
    }
  }
  function onClikSaveButton(event) {
    event.preventDefault();
    closePopup();
  }
  function onKeydownSaveButton(event) {
    var Enter = 13;
    event.preventDefault();
    if (event.keyCode === Enter) {
      closePopup();
    }
  }
  function validateForm() {
    var setup = document.querySelector('.setup');
    var userNameInput = setup.querySelector('.setup-user-name');

    userNameInput.addEventListener('invalid', onInputUserName);
    userNameInput.addEventListener('invalid', onInputUserNameForEdge);
  }
  function onInputUserName() {
    var setup = document.querySelector('.setup');
    var userNameInput = setup.querySelector('.setup-user-name');

    if (!userNameInput.validity.valid) {
      if (userNameInput.validity.tooShort) {
        userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
      } else if (userNameInput.validity.tooLong) {
        userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
      } else if (userNameInput.validity.valueMissing) {
        userNameInput.setCustomValidity('Обязательное поле');
      }
    } else {
      userNameInput.setCustomValidity('');
    }
  }
  function onInputUserNameForEdge(event) {
    var target = event.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  }
  function onClickCoat() {
    var wizardOption = document.querySelector('.setup-wizard');
    var coatColor = wizardOption.querySelector('.wizard-coat');
    var colorArray = getCoatColor();
    var index = getRandIndex(colorArray);

    coatColor.style.fill = colorArray[index];
  }
  function onClickEyes() {
    var wizardOption = document.querySelector('.setup-wizard');
    var colorEyes = wizardOption.querySelector('.wizard-eyes');
    var colorArray = getEyesColor();
    var index = getRandIndex(colorArray);

    colorEyes.style.fill = colorArray[index];
  }
  function onClickFireball() {
    var colorFireball = document.querySelector('.setup-fireball-wrap');
    var colorArray = getFireball();
    var index = getRandIndex(colorArray);

    event.preventDefault();
    colorFireball.style.background = colorArray[index];
  }

})();
