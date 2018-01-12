function Brick (x, y, context) {

	var xX;
	var yY;
	xX = x;
	yY = y;
	this.img = new Image();

	this.show = function() {
		
		this.img.onload = function() {
			context.drawImage(this, xX, yY);
		}

		this.img.src = "images/brick.jpg";
	}
}

function StairBrick(x, y, context) {

	var xX;
	var yY;
	xX = x;
	yY = y;
	this.img = new Image();

	this.show = function() {
		
		this.img.onload = function() {
			context.drawImage(this, xX, yY);
		}

		this.img.src = "images/brickwithstair.jpg";
	}
}