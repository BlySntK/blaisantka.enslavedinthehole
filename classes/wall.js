function WallOne (x, y, context) {

	this.img = new Image();

	this.show = function() {
		
		this.img.onload = function() {
			context.drawImage(this, x, y);
		}

		this.img.src = "images/wall1.jpg";
	}
}

function WallTwo (x, y, context) {

	this.img = new Image();

	this.show = function() {
		
		this.img.onload = function() {
			context.drawImage(this, x, y);
		}

		this.img.src = "images/wall2.jpg";
	}
}