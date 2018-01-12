function Player(x, y, context) {

	var moveX;
	var moveY;
	var posX;
	var posY;
	var scrX;
	var scrY;

	var sheetWidth;
	var sheetHeight;
	var colums;
	var rows;
	var trakList = [0, 1, 2, 3, 4];
	var trak;

	var width;
	var height;

	var currentFrame = 0;

	var left = false;
	var right = false;
	var img = new Image();
	posX = x;
	posY = y;
	

	function updateFrame() {
		
		//8 % 8 = 1
		currentFrame = ++currentFrame % colums;
		scrX = currentFrame * width;
		scrY = trak * height;
		context.clearRect(posX, posY, width, height);
		context.fillRect(posX, posY, width, height);
		context.fillStyle = "rgba(255, 255, 255, 0)";

		if (left) {
			moveX += 5;
			posX = moveX;
			x = posX;
		}

		if (right) {
			moveX -= 5;
			posX = moveX;
			x = posX;
		}
	}

	function draw() {

		updateFrame();
		context.drawImage(
			img, 
			scrX, 
			scrY, 
			width, 
			height, 
			posX, 
			posY, 
			width, 
			height
		);
	}

	this.initPlayer = function(map) {

		sheetWidth = 290;
		sheetHeight = 306;
		colums = 7;
		rows = 5;
		currentFrame = 0;
		trak = trakList[4];
		width = sheetWidth / colums;
		height = sheetHeight / rows;
		img.src = "images/zombie.png";

		outZombie = setInterval(function() {
			draw();
			if (currentFrame == 6) {
				clearInterval(outZombie);
				moveX = posX;
				document.onkeydown = continuar;
			}
		}, 800);
	}

	function continuar(e) {
		
		sheetHeight = 306;
		colums = 8;
		rows = 5;
		currentFrame = 0;
		height = sheetHeight / rows;
		img.src = "images/zombie.png";
		
		if (e.keyCode === 39) {
			sheetWidth = 292;
			right = false;
			left = true;
			trak = trakList[1];
			width = sheetWidth / colums;
			document.onkeydown = null;

			walkZombie = setInterval(function() {
				draw();
				if (currentFrame === 7) {
					clearInterval(walkZombie);
					moveX = posX;
					left = false;
					document.onkeydown = continuar;
				}
			}, 200);
			
		}else if (e.keyCode === 37) {
			sheetWidth = 290;
			left = false;
			right = true;
			trak = trakList[0];
			width = sheetWidth / colums;
			document.onkeydown = null;

			walkZombie = setInterval(function() {
				draw();
				if (currentFrame === 7) {
					clearInterval(walkZombie);
					moveX = posX;
					right = false;
					document.onkeydown = continuar;
				}
			}, 200);
		}
	}
}