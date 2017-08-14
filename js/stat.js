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
  var indentY = 90;
  var indentTop = 20;
  var indentBottom = 10;
  var opacity;

  for (i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      opacity = Math.random();
      ctx.fillStyle = 'rgba(000,000,255,' + opacity + ')';
    }
    ctx.fillRect(indentX + stepX * i, indentY + histogramHeight - times[i] * proportion, barWidth, times[i] * proportion);
    ctx.fillStyle = '#000';
    time = Math.round(times[i]);
    ctx.fillText(time, indentX + stepX * i, indentY + histogramHeight - times[i] * proportion - indentTop);
    ctx.fillText(names[i], indentX + stepX * i, indentY + histogramHeight + indentBottom);
  }
};
