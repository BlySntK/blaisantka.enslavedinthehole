function SkullWallTwo (x, y, context) {

	this.img = new Image();

	this.show = function() {
		
		this.img.onload = function() {
			context.drawImage(this, x, y);
		}

		this.img.src = "images/skullandbones.jpg";
	}
}