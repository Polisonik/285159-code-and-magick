'use strict';

window.renderStatistics = function (ctx, names, times) {
  var width = 420;
  var height = 270;
  var coordinateX = 100;
  var coordinateY = 10;
  var shiftShadow = 10;
  var lineHeight = 20;
  var colorShadow = 'rgba(0 ,0 ,0, 0.7)';
  var colorBg = 'rgba(256, 256, 256, 1.0)';
  var colorText = '#000';
  var font = '14px PT Mono';
  var marginTop = 20;
  var marginLeft = 20;

  drawShadow(colorShadow, coordinateX, coordinateY, shiftShadow, width, height);
  drawCloud(colorBg, coordinateX, coordinateY, width, height);
  drawText(colorText, font, coordinateX, coordinateY, marginLeft, marginTop, lineHeight);
  drawHistogram(times, names, getMaxItem(times));

  function drawShadow(color, coordinateXShadow, coordinateYShadow, shift, widthShadow, heightShadow) {
    ctx.fillStyle = color;
    ctx.fillRect(coordinateXShadow + shift, coordinateYShadow + shift, widthShadow, heightShadow);
  }

  function drawCloud(color, coordinateXCloud, coordinateYCloud, widthCloud, heightCloud) {
    ctx.fillStyle = color;
    ctx.fillRect(coordinateXCloud, coordinateYCloud, widthCloud, heightCloud);
    ctx.strokeRect(coordinateXCloud, coordinateYCloud, widthCloud, heightCloud);
  }

  function drawText(color, fontText, coordinateXText, coordinateYText, marginLeftText, marginTopText, lineHeightText) {
    ctx.fillStyle = color;
    ctx.font = fontText;

    ctx.textBaseline = 'top';
    ctx.fillText('Ура вы победили!', coordinateXText + marginLeftText, coordinateYText + marginTopText);
    ctx.fillText('Список результатов:', coordinateXText + marginLeftText, coordinateYText + marginTopText + lineHeightText);
  }

  function getMaxItem(array) {
    var maxItem = -1;

    for (var i = 0; i < array.length; i++) {
      var item = array[i];

      if (item > maxItem) {
        maxItem = item;
      }
    }
    return maxItem;
  }

  function drawHistogram(arrayTimes, arrayNames, maxTime) {
    var histogramHeight = 150;
    var barWidth = 40;
    var barIndent = 50;
    var proportion = histogramHeight / (maxTime - 0);
    var stepX = barWidth + barIndent;
    var indentX = 140;
    var indentY = 90;
    var indentTop = 20;
    var indentBottom = 10;
    var opacity;

    for (var i = 0; i < arrayTimes.length; i++) {
      if (arrayNames[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        opacity = Math.random();
        ctx.fillStyle = 'rgba(000, 000, 255,' + opacity + ')';
      }

      ctx.fillRect(indentX + stepX * i, indentY + histogramHeight - arrayTimes[i] * proportion, barWidth, arrayTimes[i] * proportion);
      ctx.fillStyle = '#000';
      ctx.fillText(Math.round(arrayTimes[i]), indentX + stepX * i, indentY + histogramHeight - arrayTimes[i] * proportion - indentTop);
      ctx.fillText(arrayNames[i], indentX + stepX * i, indentY + histogramHeight + indentBottom);
    }
  }
};
