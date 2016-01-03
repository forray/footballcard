// Save and load

function saveGameState() {
    if (!supportsLocalStorage()) { return false; }
    localStorage["halma.game.in.progress"] = gGameInProgress;
    for (var i = 0; i < kNumPieces; i++) {
	localStorage["halma.piece." + i + ".row"] = gPieces[i].row;
	localStorage["halma.piece." + i + ".column"] = gPieces[i].column;
    }
    localStorage["halma.selectedpiece"] = gSelectedPieceIndex;
    localStorage["halma.selectedpiecehasmoved"] = gSelectedPieceHasMoved;
    localStorage["halma.movecount"] = gMoveCount;
    return true;
}

function resumeGame() {
    if (!supportsLocalStorage()) { return false; }
    gGameInProgress = (localStorage["halma.game.in.progress"] == "true");
    if (!gGameInProgress) { return false; }
    gPieces = new Array(kNumPieces);
    for (var i = 0; i < kNumPieces; i++) {
	var row = parseInt(localStorage["halma.piece." + i + ".row"]);
	var column = parseInt(localStorage["halma.piece." + i + ".column"]);
	gPieces[i] = new Cell(row, column);
    }
    gNumPieces = kNumPieces;
    gSelectedPieceIndex = parseInt(localStorage["halma.selectedpiece"]);
    gSelectedPieceHasMoved = localStorage["halma.selectedpiecehasmoved"] == "true";
    gMoveCount = parseInt(localStorage["halma.movecount"]);
    drawBoard();
    return true;
}


function saveSettings(){
	//console.log("saveSettings", settingsARR);
	
	localStorage["settings-level"] = settingsARR["level"];
	localStorage["settings-fightnmb"] = settingsARR["fightnmb"];
	localStorage["settings-helptext"] = settingsARR["helptext"];
	localStorage["settings-sound"] = settingsARR["sound"];
}

function loadSettings(){
	//console.log("loadSettings", localStorage["settings-level"],localStorage["settings-fightnmb"],localStorage["settings-helptext"],localStorage["settings-sound"]);
	
	if (localStorage["settings-level"]) settingsARR["level"] = localStorage["settings-level"];
	else settingsARR["level"] = "Rooky";
	if (localStorage["settings-fightnmb"]) settingsARR["fightnmb"] = localStorage["settings-fightnmb"];
	else settingsARR["fightnmb"] = 11;
	if (localStorage["settings-helptext"]) settingsARR["helptext"] = localStorage["settings-helptext"];
	else settingsARR["helptext"] = true;
	if (localStorage["settings-sound"]) settingsARR["sound"] = localStorage["settings-sound"];
	else settingsARR["sound"] = true;
	
	isAudio = soundSettingStatus = settingsARR["sound"];
	isHelp = tutorialSettingStatus = settingsARR["helptext"];

	soundSettingsChange();
	tutorialSettingsChange();
	
	console.log("loadSettings 2 ", settingsARR["level"],settingsARR["fightnmb"],settingsARR["helptext"],settingsARR["sound"]);
}


function loadSettingElements() {
	settingsARR["level"];
	settingsARR["fightnmb"];
	settingsARR["helptext"];
	settingsARR["sound"];
}


$('.settings-level').change(function(){
    var selected = $(this).find(':selected');
	settingsARR["level"] = selected.text();
	saveSettings();
});

$('.settings-fightnmb').change(function(){
    var selected = $(this).find(':selected');
	settingsARR["fightnmb"] = selected.text();
	saveSettings();
});

$('.settings-helptext').change(function(){
	var selected = this.checked;
	settingsARR["helptext"] = selected;
	saveSettings();
});

$('.settings-sound').change(function(){
	var selected = this.checked;
	settingsARR["sound"] = selected;
	saveSettings();
});