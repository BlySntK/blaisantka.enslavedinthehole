window.onload = function () {

	var contextLayer1 = setBackgroundLayer1();
	var contextLayer2 = setBackgroundLayer2();
	var contextLayer3 = setBackgroundLayer3();
	var contextLayer4 = setBackgroundLayer4();
	var contextLayer5 = setBackgroundLayer5();
	var contextLayer6 = setBackgroundLayer6();
	var player;
	var note;
	var map = new Mapper();

	loadWall(map, contextLayer5);
	loadGround(map, contextLayer6);
	loadMap(map, contextLayer2);
	player = loadPlayer(map, contextLayer1);
	note = loadNoteNotRead(map, contextLayer4);
	loadSKullAndWall(map, contextLayer2);
	player.initPlayer();
	note.show();
}