'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0 ,0 , 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '14px PT Mono';
  ctx.textBaseline = 'top';

  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);

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
        ctx.fillStyle = 'rgba(000,000,255,' + opacity + ')';
      }

      ctx.fillRect(indentX + stepX * i, indentY + histogramHeight - arrayTimes[i] * proportion, barWidth, arrayTimes[i] * proportion);
      ctx.fillStyle = '#000';
      ctx.fillText(Math.round(arrayTimes[i]), indentX + stepX * i, indentY + histogramHeight - arrayTimes[i] * proportion - indentTop);
      ctx.fillText(arrayNames[i], indentX + stepX * i, indentY + histogramHeight + indentBottom);
    }
  }

  drawHistogram(times, names, getMaxItem(times));
};
