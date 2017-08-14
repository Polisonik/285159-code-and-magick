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
	var maxIndex = -1;

	for (var i = 0; i < times.length; i++ ) {
		var time = times[i];
		if (time > maxTime) {
			maxTime = time;
			maxIndex = i;
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
	

	// ctx.textBaseline = 'middle';

	for (var i = 0; i < times.length; i++) {
		ctx.fillRect(indentX + stepX * i, indentY + histogramHeight - times[i] * proportion, barWidth, times[i] * proportion);
		ctx.fillText(names[i], indentX + stepX * i, indentY + histogramHeight + lineHeight);
	}
};