function setBackgroundLayer1() {

	var canvas = document.getElementById("layer1");

	var canvasWidth = canvas.width;
	var canvasHeight = canvas.height;
	var context = canvas.getContext("2d");

	context.fillStyle = "rgba(255, 255, 255, 0)";
	context.fillRect (0, 0, canvasWidth, canvasHeight);

	return context;
}