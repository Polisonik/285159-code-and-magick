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

  ctx.fillStyle = colorShadow;
  ctx.fillRect(coordinateX + shiftShadow, coordinateY + shiftShadow, width, height);

  ctx.fillStyle = colorBg;
  ctx.fillRect(coordinateX, coordinateY, width, height);
  ctx.strokeRect(coordinateX, coordinateY, width, height);

  ctx.fillStyle = colorText;
  ctx.font = font;
  ctx.textBaseline = 'top';

  ctx.fillText('Ура вы победили!', coordinateX + marginLeft, coordinateY + marginTop);
  ctx.fillText('Список результатов:', coordinateX + marginLeft, coordinateY + marginTop + lineHeight);

  drawHistogram(times, names, getMaxItem(times));

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
