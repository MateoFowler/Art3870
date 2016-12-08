var winHeight = window.innerHeight,
	winWidth = window.innerWidth,
    layersNum = 4,
    figNum = 4;



$(document).ready(function() {

	drawMiddle();
	drawLast();

	var process = setInterval(function(){
		move();
		coordinate = -$('.layer0.middle').css('top').replace('px','')*1;
		if (coordinate > 2*figSize(layersNum - 1)) {
			$('.first').remove();
			rename();
			drawLast();
		}
	},3);

	window.onclick = function() {clearInterval(process)};

});

function drawMiddle() { // creates layers in middle position
	for (var i = 0; i < layersNum; i++) {
		var id = makeString(i);
		$('body').append('<div class="layer'+ id +' middle"></div>');
		var newElement = $('div').last();
		newElement.css({
			"position": "fixed",
			"width": "100%",
			"height": layerHeight(i)+'px',
			"top": "0",
			"z-index": i
		});
		drawFigures(i, newElement, 'middle');
	}
}

function drawLast() { // creates layers in third position
	for (var i = 0; i < layersNum; i++) {
		var id = makeString(i),
			posCoord = ($('.layer'+ id +'.middle').css('top')).replace('px','')*1 + layerHeight(i); // element's css top value
		$('body').append('<div class="layer'+ id +' last"></div>');
		var newElement = $('div').last();
		newElement.css({
			"position": "fixed",
			"width": "100%",
			"height": layerHeight(i)+'px',
			"top": posCoord,
			"z-index": i
		});
		drawFigures(i, newElement, 'last');
	}
}

function drawFigures (layer, parent, position) {
	for (var j = 0; j < figQuantity(layer); ++j) {
		parent.append('<div class="'+ position +'" id="fig'+ layer + j +'"></div>');
		var size = random(figSize(layer) - 0.1*figSize(layer), figSize(layer) + 0.1*figSize(layer));
		var xArea = random(0, winWidth - size*1.6);
		var yAreaSize = (layerHeight(layer)/figQuantity(layer));
		var yArea = random(yAreaSize*j, yAreaSize*(j + 1));
		$('.'+ position +'#fig' + layer + j).css({
			"position": "absolute",
			"width": size + "px",
			"height": size + "px",
			"left" : xArea + "px",
			"top": yArea + "px",
			"z-index": 1,
			"background": figColor()
		});
	}
}

function move() {
	for (var i = 0; i < layersNum; i++) {
		var id = makeString(i)
		$('.layer'+ id).css('top','-='+ (.4 + (.4/layersNum)*(i + 1)) +'px');
	}
}

function rename() {
	$('.middle').addClass('first');
	$('.middle').removeClass('middle');
	$('.last').addClass('middle');
	$('.last').removeClass('last');
}

function layerHeight(layer) { // returns height of parallax layer
	return winHeight + (winHeight/layersNum)*(layer + 1);
}

function makeString(num) { // converts number to string including 0
	return num ? num.toString() : '0';
}

function random(bottom, top) { // returns string with random px value from bottom value to top
	return (bottom + Math.round((top - bottom)*Math.random()));
}

function randomPercent(bottom, top) { // returns string with random % value from bottom value to top
	return (bottom + Math.round((top - bottom)*Math.random())) + '%';
}

function figSize(layer) { // returnes figure size
	return ((winHeight*0.6/layersNum)/layersNum)*(1 + layer);
}

function figQuantity(layer) { // returns number of figures in layer
	return figNum + (layersNum - 1 - layer)*2;
}

function figColor() {
	var a = Math.random();
	if (a >= 0.6 && a < 0.95) { return "green" }
	else if (a >= 0.95 && a <= 1) { return "cyan" }
	else  { return "blue" }
}
