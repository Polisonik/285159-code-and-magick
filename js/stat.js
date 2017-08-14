'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillText('Привет канвас!', 100, 100);
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '14px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  // Находим наихудшее время

  var maxTime = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > maxTime) {
      maxTime = time;
    }
  }

  var histogramHeight = 150;
  var barWidth = 40;
  var barIndent = 50;
  var proportion = histogramHeight / (maxTime - 0);
  var stepX = barWidth + barIndent;
  var indentX = 140;
  var indentY = 80;
  var lineHeight = 20;
  var opacity;

  // ctx.textBaseline = 'middle';

  for (i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      opacity = Math.random();
      ctx.fillStyle = 'rgba(000,000,255,' + opacity + ')';
    }
    ctx.fillRect(indentX + stepX * i, indentY + histogramHeight - times[i] * proportion, barWidth, times[i] * proportion);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], indentX + stepX * i, indentY + histogramHeight + lineHeight);
  }
};
