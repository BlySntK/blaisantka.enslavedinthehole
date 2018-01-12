function setBackgroundLayer3() {

	var canvas = document.getElementById("layer3");

	var canvasWidth = canvas.width;
	var canvasHeight = canvas.height;
	var context = canvas.getContext("2d");

	context.fillStyle = "rgba(0, 0, 0, 0)";
	context.fillRect (0, 0, canvasWidth, canvasHeight);

	return context;
}