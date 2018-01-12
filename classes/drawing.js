function loadMap(mapper, context) {

	for (var i = 0; i < mapper.files; i++) {
		for (var j = 0; j < mapper.colums; j++) {
			if (mapper.map[i][j] === '*') {
				var img = new Rock (j * 60, i * 60, context);
				img.show();
			}
		}
	}
}

function loadGround(mapper, context) {

	for (var i = 0; i < mapper.files; i++) {
		for (var j = 0; j < mapper.colums; j++) {
			if (mapper.map[i][j] === '-' || mapper.map[i][j] === 'S' ||
				mapper.map[i][j] === 'N') {
				var img = new Ground (j * 60, i * 60, context);
				img.show();
			}
		}
	}
}

function loadWall(mapper, context) {

	for (var i = 0; i < mapper.files; i++) {
		for (var j = 0; j < mapper.colums; j++) {
			if (mapper.map[i][j] === 'B') {
				var img = new Brick (j * 60, i * 60, context);
				img.show();
			}
		}
	}

	loadStair(mapper, context);
}

function loadStair(mapper, context) {

	for (var i = 0; i < mapper.files; i++) {
		for (var j = 0; j < mapper.colums; j++) {
			if (mapper.map[i][j] === 'E') {
				var img = new StairBrick (j * 60, i * 60, context);
				img.show();
			}
		}
	}
}

function loadSKullAndWall(mapper, context) {

	for (var i = 0; i < mapper.files; i++) {
		for (var j = 0; j < mapper.colums; j++) {
			if (mapper.map[i][j] === 'K') {
				var img = new SkullWallOne (j * 60, i * 60, context);
				img.show();
			}else if (mapper.map[i][j] === 'K2') {
				var img = new SkullWallTwo (j * 60, i * 60, context);
				img.show();
			}else if (mapper.map[i][j] === 'W1') {
				var img = new WallOne (j * 60, i * 60, context);
				img.show();
			}else if (mapper.map[i][j] === 'W2') {
				var img = new WallTwo (j * 60, i * 60, context);
				img.show();
			}
		}
	}
}

function loadPlayer(mapper, context) {

	for (var i = 0; i < mapper.files; i++) {
		for (var j = 0; j < mapper.colums; j++) {
			if (mapper.map[i][j] === 'S') {
				var player = new Player(j * 60, i * 60, context);
				break;
			}
		}
	}

	return player;
}

function loadNoteNotRead(mapper, context) {

	for (var i = 0; i < mapper.files; i++) {
		for (var j = 0; j < mapper.colums; j++) {
			if (mapper.map[i][j] === 'N') {
				var note = new Note(j * 60, i * 60, context);
			}
		}
	}

	return note;
}