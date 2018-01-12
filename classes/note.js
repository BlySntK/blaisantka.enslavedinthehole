function Note(x, y, context) {

	var posX;
	var posY;
	posX = x;
	posY = y;

	this.img = new Image();

	this.show = function() {
		
		this.img.onload = function() {
			context.drawImage(this, posX, posY);
		}

		this.img.src = "images/papernotread.png";
	}

	this.hide = function() {

		this.img.onload = function() {
			context.drawImage(this, posX, posY);
		}

		this.img.src = "";
	}
}