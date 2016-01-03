
var team1ARR = [];
var team2ARR = [];
var selectedPlayers = [];
var selectedPlayersAuto = [];
var teams = [];
var playingTeam1ARR = [[],[],[],[],[],[],[],[],[],[],[]];
var playingTeam2ARR = [[],[],[],[],[],[],[],[],[],[],[]];
var playingTeam1BAN = [];
var playingTeam2BAN = [];
var perArray = [[],[],[],[],[],[]];
var teamsARR = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var matchARR = [[],[],[],[],[],[],[],[]];
var myGroupTeam =  [["",0,0,0],["",0,0,0],["",0,0,0],["",0,0,0]];
var groupA =  [["",0,0,0],["",0,0,0],["",0,0,0],["",0,0,0]];
var groupB =  [["",0,0,0],["",0,0,0],["",0,0,0],["",0,0,0]];
var groupC =  [["",0,0,0],["",0,0,0],["",0,0,0],["",0,0,0]];
var groupD =  [["",0,0,0],["",0,0,0],["",0,0,0],["",0,0,0]];
var groupE =  [["",0,0,0],["",0,0,0],["",0,0,0],["",0,0,0]];
var groupF =  [["",0,0,0],["",0,0,0],["",0,0,0],["",0,0,0]];
var groupG =  [["",0,0,0],["",0,0,0],["",0,0,0],["",0,0,0]];
var groupH = [["",0,0,0],["",0,0,0],["",0,0,0],["",0,0,0]];
var matchResults = ["11-0","10-1","9-2","8-3","7-4","6-5","5-6","4-7","3-8","2-9","1-10","0-11"];
var matchResults5 = ["5-0","4-1","3-2","2-3","1-4","0-5"];
var matchResults7 = ["7-0","6-1","5-2","4-3","3-4","2-5","1-6","0-7"];
var pagesArr = ["start","teams","group","players","game","result","settings","invite"]
var settingsARR = [];
var lastSelectedPlayers = [];

var firstClick = true;
var firstFight = true;
var team1Start = false;
var team2Start = false;
var team1Win = false;
var team2Win = false;
var fightRunning = false;
var activeDragPlayer = false;
var autoSelectVAR = true;
var autoRandomVAR = false;
var isQuickGame = false;
var isAudio = false;
var isHelp = false;
var soundSettingStatus = false;
var tutorialSettingStatus = false;
var teamsLoaded = false;
var selectedPlayersClickFirst = false;
var team1CardBack = true;
var selectedTeam2Player = false;
var startAnimShow = true;
var playerTeamWin = false;

var fightNMB = 11;
var currentTeam1Player = 0;
var currentTeam2Player = 0;
var point1 = 0;
var point2 = 0;
var gameRound = 1;
var cupRound = 1;
var maxPlayer = 23;
var gamePlayers = 11
var yelloCardRandom = 5;
var redCardRandom = 10;
var injuryRandom = 10;

var team1 = "";
var team2 = "";
var playersTeam = "";
var playersGroup = ""; 
var currentPage = "";
var playerNextGame = "";
var roundsMatches = "";
var dragPlayer = "";
var activeDragPlayerID = "";

var myTeamScroll;
var scrollerTeamHorizontal;
var myScrollPlayer;
var groupScroll;
var card = document.getElementById('card');

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

$(document).on('touchstart', '#game2', function(e) {
	var xPos = e.originalEvent.touches[0].pageX;
	//console.log("touchstart",xPos)
});

$(document).on('touchstart', '#gameTeam2', function(e) {
	var xPos = e.originalEvent.touches[0].pageX;
	//console.log("touchstart",xPos)
});

$(document).on('touchstart', '#schedule', function(e) {
	var xPos = e.originalEvent.touches[0].pageX;
	var yPos = e.originalEvent.touches[0].pageY;
	//console.log("touchstart",xPos)
});



$('#coinOverlay').hide();
$('#game2').hide();
$('#gameTeam2').hide();
$('#fightOverlay').hide();
$('#start').hide();
pageController("game2","start");
$('#menuOverlay').hide();
$('#background2').hide();
$('#menu1').hide();
$('#menu2').hide();
$('#menu3').hide();
$('#menu4').hide();
$('#schedule').hide();

$('#start').fadeIn();


var saveIsPossible = supports_html5_storage();
if (saveIsPossible) loadSettings();
//console.log("saveIsPossible",saveIsPossible)



menuShowAnim();

// Page controller
function pageController(page1,page2) {
	console.log("pageController",page1,page2,cupRound)	
	switch(page2) {
		case "start":
			$('#background').fadeIn();
			$('#background2').fadeOut();
			$('#'+page1).fadeOut();
			$('#'+page2).fadeIn();
			cupRound = 1;
			menuOverlayStatus(true);
			if (page1 == "settings") saveSettings();
			$("#aboutDIV").getNiceScroll().hide();
			startAnimShow = true;
			//startAnimation();
			break;
			
		case "teams":
			newCup();
			$('#background').fadeOut();
			$('#background2').fadeIn();
			if (page1 == "start") isQuickGame = false;
				menuOverlayStatus(false);
				$('#'+page1).fadeOut();
				$('#'+page2).fadeIn();
			setTimeout(function() { 
        		loadTeamToStage();
			}, 500);
			startAnimShow = false;
			break;
			
		case "quickteams":
			$('#'+page1).fadeOut();
			isQuickGame = true;
			pageController("quickteams","teams");
			break;
			
		case "schedule":
			$('#'+page1).fadeOut();
			$('#'+page2).fadeIn();
			//$('#schedule').scrollable();
			scheduleFill();
			$("#scheduleDIV").niceScroll({touchbehavior:true,cursorcolor:"#303030",cursoropacitymax:0.4,cursorwidth:4,background:"#2a2a2a",autohidemode:false}).resize();
			$("#scheduleDIV").getNiceScroll().show();
			break;
			
		case "group":
			$('#'+page1).fadeOut();
			$('#'+page2).fadeIn();
			$("#resultContent").getNiceScroll().hide();
			$("#groupFinalResult").getNiceScroll().hide();
			showCupResults();
			if (!teamsLoaded) loadTeamsFiles();
			menuOverlayStatus(true);
			break;
			
		case "groupend":
			$('#'+page1).fadeOut();
			$('#'+page2).fadeIn();
			menuOverlayStatus(false);
			showGroupFinal(cupRound);
			//console.log("groupFinalResult")
			$("#groupFinalResult").niceScroll({touchbehavior:true,cursorcolor:"#303030",cursoropacitymax:0.4,cursorwidth:4,background:"#2a2a2a",autohidemode:false}).resize();
			$("#groupFinalResult").getNiceScroll().show();
			
			if (cupRound == 4) $("#groupFinalResult").html("<div class=\"footerbg\"><h3>go to finals</h3>")
			
			break;
			
			break;
		case "players":
			menuOverlayStatus(false);
			$('#'+page1).fadeOut();
			$('#'+page2).fadeIn();
			if (isQuickGame) randomTeam();
			$("#groupFinalResult").getNiceScroll().hide();
			$('#players').show();
			setTimeout(function() { 
        		selectPlayers();
				autoSelectPlayers(11);
			}, 500);
			break;
			
		case "game":
			fightNMB = settingsARR["fightnmb"];
			$('#'+page1).fadeOut();
			$('#'+page2).fadeIn();
			if (settingsARR["helptext"] == "true") showHelp(game);
			generateTeams();
			startingGame();
			menuOverlayStatus(true);
			if (cupRound < 4) {
				if (!isQuickGame) generateRound();
			}
			
			break;
			
		case "quickgame":
			fightNMB = settingsARR["fightnmb"];
			$('#'+page1).fadeOut();
			$('#'+page2).fadeIn();
			generateTeams();
			startingGame();
			if (!isQuickGame) generateRound();
			break;
			
		case "quickresult":
			$('#'+page1).fadeOut();
			$('#'+page2).fadeIn();
			generateQuickResult();
			
			break;
		case "results":
			$('#'+page1).fadeOut();
			if (!isQuickGame){
				
				switch(cupRound){
				case 1: 
				case 2:
					$('#'+page2).fadeIn();
					$('#resultBTN').attr('onclick','').unbind('click');
					$('#resultBTN').click(function() {
						pageController("results","group");
					});
					break;	
				case 3:
				case 4: 
				case 5:
				case 6:
				case 7:
					$('#resultBTN').attr('onclick','').unbind('click');
					$('#resultBTN').click(function() {
						$('#group').hide();
						pageController("results","groupfinal");
					});
					$('#results').fadeIn();
					break;
				}
			} else {
				pageController("results","quickresult");
			}
			break;
		case "settings":
			$('#'+page1).fadeOut();
			$('#'+page2).fadeIn();
			$("#resultContent").niceScroll({touchbehavior:true,cursorcolor:"#303030",cursoropacitymax:0.4,cursorwidth:4,background:"#2a2a2a",autohidemode:false}).resize();
			startAnimShow = false;
			break;
		
		case "about":
			$('#'+page1).fadeOut();
			$('#'+page2).fadeIn();
			$("#aboutDIV").niceScroll({touchbehavior:true,cursorcolor:"#303030",cursoropacitymax:0.4,cursorwidth:4,background:"#2a2a2a",autohidemode:false}).resize();
			startAnimShow = false;
			break;
			
		case "winner":
			$('#'+page1).fadeOut();
			$('#'+page2).fadeIn();

			$('#winnerOverlay').fadeIn();
			setTimeout(function() { 
        		pageController('winner','start') 
				$('#winnerOverlay').hide();
			}, 10000);
			break;
			
		case "loser":
			$('#'+page1).fadeOut();
			$('#'+page2).fadeIn();

			$('#loserOverlay').fadeIn();
			setTimeout(function() { 
        		pageController('loser','start') 
				$('#loserOverlay').hide();
			}, 10000);
			break;
			
		case "groupfinal":
			$('#'+page1).fadeOut();
			$('#'+page2).fadeIn();
			$('#group').hide();
			$("#scheduleDIV").getNiceScroll().hide();
			switch(cupRound){
				case 4:
					groupFinalMatch4();
					break;
				case 5:
					groupFinalMatch5();
					break;
				case 6:
					groupFinalMatch6();
					break;
				case 7:
					groupFinalMatch7();
					break;
			}
			
		}
}

function newCup(){
	console.log("newCup");
	
	var team1ARR = [];
	var team2ARR = [];
	var selectedPlayers = [];
	var selectedPlayersAuto = [];
	var teams = [];
	var playingTeam1ARR = [[],[],[],[],[],[],[],[],[],[],[]];
	var playingTeam2ARR = [[],[],[],[],[],[],[],[],[],[],[]];
	var playingTeam1BAN = [];
	var playingTeam2BAN = [];
	var perArray = [[],[],[],[],[],[]];
	var teamsARR = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	var matchARR = [[],[],[],[],[],[],[],[]];
	var myGroupTeam =  [["",0,0,0],["",0,0,0],["",0,0,0],["",0,0,0]];
	var groupA =  [["",0,0,0],["",0,0,0],["",0,0,0],["",0,0,0]];
	var groupB =  [["",0,0,0],["",0,0,0],["",0,0,0],["",0,0,0]];
	var groupC =  [["",0,0,0],["",0,0,0],["",0,0,0],["",0,0,0]];
	var groupD =  [["",0,0,0],["",0,0,0],["",0,0,0],["",0,0,0]];
	var groupE =  [["",0,0,0],["",0,0,0],["",0,0,0],["",0,0,0]];
	var groupF =  [["",0,0,0],["",0,0,0],["",0,0,0],["",0,0,0]];
	var groupG =  [["",0,0,0],["",0,0,0],["",0,0,0],["",0,0,0]];
	var groupH = [["",0,0,0],["",0,0,0],["",0,0,0],["",0,0,0]];
	
	var gameRound = 1;
	var cupRound = 1;
	var team1 = "";
	var team2 = "";
	var playersTeam = "";
	var playersGroup = ""; 
	var currentPage = "";
	var playerNextGame = "";
	var roundsMatches = "";
	var dragPlayer = "";
	var activeDragPlayerID = "";
	
	loadTeams();
}

function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}


function changePage(page1,page2){

	$(page1).fadeOut();
	$(page2).fadeIn();	
}

function loadCss(){
	$('<link/>', {
	   rel: 'stylesheet',
	   type: 'text/css',
	   href: 'css/game.css'
	}).appendTo('head');
}

// Before the game starting we need to run these functions
function loadTeamsFiles() {
	
	////console.log("loadTeamsFiles ",team1,team2,teamsARR.length);
	var team1File = "";
	var team2File = "";
	
	for (var i = 0; i < teamsARR.length; i++) {
		////console.log(teamsARR[i][0],team1,team2)
		if (teamsARR[i][0] == team1) {
			team1File = teamsARR[i][2];
		} else if (teamsARR[i][0] == team2) {
			team2File = teamsARR[i][2];
		}
	}
	
	////console.log("loadTeamsFiles team1File",team1,team1File);
	////console.log("loadTeamsFiles team2File",team2,team2File);
	loadTeamFile1(team1File);
	loadTeamFile2(team2File);

}  

function randomTeam() {
	//console.log("randomTeam");
	var randomnumber=Math.ceil(Math.random()*teamsARR.length-1)
	for (var i = 0; i < teamsARR.length; i++) {
		//console.log("randomTeam teamsARR",team2,teamsARR[randomnumber][0]);
		if (team2 != teamsARR[randomnumber][0]) {
			team1 = teamsARR[randomnumber][0];
			break;
		}
	}
	
	var team1File = "";
	var team2File = "";
	
	for (var i = 0; i < teamsARR.length; i++) {
		////console.log(teamsARR[i][0],team1,team2)
		if (teamsARR[i][0] == team1) {
			team1File = teamsARR[i][2];
		} else if (teamsARR[i][0] == team2) {
			team2File = teamsARR[i][2];
		}
	}

	loadTeamFile1(team1File);
	loadTeamFile2(team2File);
	
	//console.log("randomTeam",team1)

} 

function generateTeams() {
	//console.log("generateTeams",team1ARR.length,gamePlayers)
	// team1
	var arr = [];
	playingTeam1ARR= [];
	playingTeam2ARR= [];
	
	while(arr.length < gamePlayers){
	  var randomnumber=Math.ceil(Math.random()*team1ARR.length-1)
	  var found=false;
	 // //console.log("generatePlayers randomnumber",randomnumber)
	  for(var i=0;i<arr.length;i++){
		if(arr[i]==randomnumber){
			found=true;break}
	  	}
		
	  	if(!found) {
	  		playingTeam1ARR[i] = team1ARR[randomnumber];
			////console.log("generatePlayers",playingTeam1ARR[i])
	  		arr[arr.length]=randomnumber;
	   	}
	   
	}
	//console.log("generateTeams team1",playingTeam1ARR)
	
	// team2
	for (var k = 0; k < selectedPlayers.length; k++) {
		playingTeam2ARR[k] = team2ARR[selectedPlayers[k]];
		////console.log(playingTeam2ARR[k]);
	}

}

// Who will star the game?
function startingGame() {
	//$('#game1TeamName').html(team1 + "'s next player");
	//$('#game2TeamName').html(team2 + "'s next player");
	
	lastSelectedPlayers = selectedPlayers;
	gameRound = 1;
	point1 = 0;
	point2 = 0;
	activeDragPlayerID = "";
	//team1 = "";
	//team2 = "";
	
	console.log("startingGame",team1,team2,point1,point2)

	if (team1Start) {
		showInfoPanel("<center>"+ team1 + " starting the game!</center>");
	} else {
		showInfoPanel("<center>"+ team2 + " starting the game!</center>");
	}
	
	loadTeam1Stage();
	loadTeam2Stage();
	
}

function settingsStart() {

    $('#checkboxSound').change(function() {
        if($(this).is(":checked")) {
            settingsARR["sound"] = isAudio = true;
        } else {
			settingsARR["sound"] = isAudio = false;
		}	   
    });
	
	$('#checkboxHelp').change(function() {
        if($(this).is(":checked")) {
            settingsARR["sound"] = isHelp = true;
        } else {
			settingsARR["sound"] = isHelp = true;
		}	   
    });
}

function loadIntroSound() {
	myVid = document.getElementById("introAudio");
	myVid. volume=0.4;
	if (isAudio) document.getElementById('introAudio').play();
}
// Generate 11 player for team1
function generateTeam1() {
		
}  

// Load team1 player to start the game
function loadTeam1Stage() {
	//if (cupRound != 1) flipCard();
	$('#team1Card').empty();
	var teamIMG = teamImgFunc(team1);
	var randomNum = Math.floor(Math.random()*playingTeam1ARR.length);
	
	if (randomNum != undefined) {
		currentTeam1Player = playingTeam1ARR[randomNum][0];
		var playerIMG = playingTeam1ARR[randomNum][7];
		if (playerIMG == 0) {
			var imgURL = teamIMG;
		} else {
			
			var imgURL = playerIMG;
		}
		//console.log("loadTeam1Stage team1Win", team1Win, playingTeam1ARR[randomNum][1]);
		var str = '<div id="gameCardTeam1" class="gameCardTeam1" style="float:left;background-image: url('+imgURL+')"><div id="gameCardTeam1Black"> <div class="gameCardData6">' + playingTeam1ARR[randomNum][1] + '</div><div class="gameCardData5">' + playingTeam1ARR[randomNum][2] + '</div>' +'<div class="props2" ><div class="props2Attack" ><div class="props2Attack1" >'+playingTeam1ARR[randomNum][3]+'</div></div><div class="props2Defense" ><div class="props2Attack1" >'+playingTeam1ARR[randomNum][4]+'</div></div><div class="props2Speed" ><div class="props2Attack1" >'+playingTeam1ARR[randomNum][6]+'</div></div></div>';
		
		$('#team1Card').html(str);
		$('#gameCardTeam1').addClass("hidecard");
		$('game1').show();
	}
	
	if (team1Win) {
		setTimeout(function() {
			flipCard();
		}, 1000); 
	} 
} 

function flipCard(){
	//console.log("flipCard",team1Win);
	$('#gameCardTeam1').removeClass("hidecard");
	card.toggleClassName('flipped');
}

// Clear team1 stage, player start the game
function clearTeam1Stage() {

	$('#game1').html("You're won, choose card!");
	
} 

// Load team2 player to start the game
function loadTeam2Stage() {
	//console.log("loadTeam2Stage")
	loadTeam2Players();
	
} 

// Load team2 players to choose 
function loadTeam2Players() {
	$('#gameTeam2').empty();
	var teamIMG = teamImgFunc(team2);
	var str1 ='<div id="scroller" data-scroll="true" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"><div id="team1Catch"></div><div id="team1CatchSpace"></div><ul>';
	var str2 = "";
	activeDragPlayer = false;
	////console.log("loadTeam2Players activeDragPlayer",activeDragPlayer)
	
	for (var i = 0; i < playingTeam2ARR.length; i++) {
		////console.log("loadTeam2Players playingTeam2ARR",playingTeam2ARR[i][7],playingTeam2ARR[i][1])
		var playerIMG = playingTeam2ARR[i][7];
		if (playerIMG == 0) {
			var imgURL = teamIMG;
		} else {	
			var imgURL = playerIMG;
		}
		////console.log("load team2 player",playingTeam2ARR[i][1],playerIMG,teamIMG)
		var str = '<li id="playerFight'+playingTeam2ARR[i][0]+'"><div class="gameCard" style="background-image: url('+imgURL+')" id="playerD'+playingTeam2ARR[i][0]+'"><div class="gameCardDataTeam2"><div class="gameCardData3">' + playingTeam2ARR[i][1] + '</div><div class="gameCardData4">' + playingTeam2ARR[i][2] + '</div>' +
		'<div class="props" ><div class="propsAttack" ><div class="propsAttack1" >'+playingTeam2ARR[i][3]+'</div><div class="propsAttack2" >ATTACK</div></div><div class="propsDefense" ><div class="propsAttack1" >'+playingTeam2ARR[i][4]+'</div><div class="propsAttack2" >DEFENSE</div></div><div class="propsSpeed" ><div class="propsAttack1" >'+playingTeam2ARR[i][6]+'</div><div class="propsAttack2" >TEAM</div></div></div>' + '</div></li>';

		str2 += str;
	
	} 
	
	var str3 = str1 + str2 + '</ul><div id="team2CatchSpace"></div><div id="team2Catch"></div></div>';
	
	$('#gameTeam2').html(str3);
	$('#gameTeam2').fadeIn();
	$('#gameTeam2').css("height","28em");
	$('#gameTeam2').css("top","");
	$('#gameTeam2').css("bottom","3em");
	
	loadTeam2PlayersClick();
	scrollerPlayers();
	
	for (var i = 0; i < playingTeam2ARR.length; i++) {
		var divChange = "playerD"+playingTeam2ARR[i][0];
		//$(divChange).draggable({ disabled: false });
	}	
	fightBTNChange("Random player");
} 

function loadTeam2PlayersClick() {
	for (var i = 0; i < playingTeam2ARR.length; i++) {
		var itemName = "#playerD" + playingTeam2ARR[i][0];
		$(itemName).on('tap', function(e) {
			//console.log("loadTeam2PlayersClick tap",itemName)
			e.preventDefault();
			e.stopPropagation();
			clickToFight(this);
			$(this).off('click');
		})
	}
}


 
function clickToFight(str){
	clickAnim(str);
	var dragID = $(str).attr("id");
	
	if (activeDragPlayerID == "") {
		//console.log("clickToFight if",str,activeDragPlayerID)
		$(str).css('border','');
		$(str).css('border','5px solid #00af4b');
		activeDragPlayerID = dragID;
		fightBTNChange("Fight");
	} else if (activeDragPlayerID == dragID) {
		//console.log("clickToFight else if",activeDragPlayerID);
		fightBTN();
	} else {
		//console.log("clickToFight else",activeDragPlayerID,dragID);
		unSelectFunc(activeDragPlayerID);
		$(str).css('border','');
		$(str).css('border','5px solid #00af4b');
		activeDragPlayerID = dragID;
	} 
	
}

function fightBTN(){
	//console.log("fightBTN",activeDragPlayerID);
	if (activeDragPlayerID == "") {
		activeDragPlayerID = randomPlayerFight();
		$(activeDragPlayerID).css('border','');
		$(activeDragPlayerID).css('border','5px solid #00af4b');
		
	} else {
		playTeam2Player(activeDragPlayerID);
	}
}

// Team2 game card onclick
function playTeam2Player(el) {
	selectedTeam2Player = false;
	clickAnim(el);
	activeDragPlayer = false;
	currentTeam2Player = el.substring(7,el.length);
	//console.log("playTeam2Player",currentTeam2Player);
	if (team1Win) { 
			playAgainst();
			//console.log("playTeam2Player 1");
	}	else if (team2Win) {
			flipCard();
			setTimeout(function() { 
				playAgainst();
			}, 1000); 
	} else {
			//flipCard();
			playAgainst();
	}	
	activeDragPlayerID = "";
	
}  


function fightBTNChange(str){
	$("#fightBTN").html("<h3><center>" + str + "</center></h3>");
}

function randomPlayerFight(){
	fightBTNChange("Fight");
	
	var nmb = Math.ceil(Math.random()*selectedPlayers.length);
	var cardName = "playerD"+selectedPlayers[nmb];
	var cardName2 = "#"+cardName;
	$(cardName2).css('border','');
	$(cardName2).css('border','5px solid #00af4b');
	//console.log("randomPlayerFight",cardName)
	return cardName;
}

function unSelectFunc(str){
	var str2 = "#" + str;
	console.log("unSelectFunc",str2);
	$(str2).css('border','5px solid #fff');
	$(str2).removeClass('ui-draggable ui-draggable-disabled ui-state-disabled')
	activeDragPlayerID = "";
}




// Selecting player for the next game
function selectPlayers() {
	
	
	$('#game2').html("");
	var teamIMG = teamImgFunc(team2);
	var str1 = "";
	var str1 ='<div id="scroller2" data-scroll="true" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"><ul>';
	var str2 = "";
	activeDragPlayer = false;
	//console.log("loadTeam2Players",team2ARR.length)
	
	for (var i = 0; i < team2ARR.length; i++) {
		
		var playerIMG = team2ARR[i][7];
		if (playerIMG == 0) {
			var imgURL = teamIMG;
		} else {	
			var imgURL = playerIMG;
		}
			
		var str = '<li id="li'+team2ARR[i][0]+'"><div class="gameCard" id="playerDrag'+team2ARR[i][0]+'"><div id="playerDragBG'+team2ARR[i][0]+'" class="gameCardBG" style="background-image: url('+imgURL+')"><div class="gameCardDataTeam2"><div class="gameCardData3">' + team2ARR[i][1] + '</div><div class="gameCardData4">' + team2ARR[i][2] + '</div>' +
		'<div class="props" ><div class="propsAttack" ><div class="propsAttack1" >'+team2ARR[i][3]+'</div><div class="propsAttack2" >ATTACK</div></div><div class="propsDefense" ><div class="propsAttack1" >'+team2ARR[i][4]+'</div><div class="propsAttack2" >DEFENSE</div></div><div class="propsSpeed" ><div class="propsAttack1" >'+team2ARR[i][6]+'</div><div class="propsAttack2" >TEAM</div></div></div>' + '</div></div></li>';
		
		str2 += str;
		
	} 
	
	var str3 = str1 + str2 + '</ul></div>';
	$('#game2').html(str3);
	$('#game2').fadeIn();
	$('#game2').css("bottom","6.5em");
	$('#game2').css("height","16em");
	
	selectedPlayersClick();
	scrollerTeamHor();
} 



function selectedPlayersClick() {
	for (var i = 0; i < team2ARR.length; i++) {
		var itemName = "#playerDrag" + team2ARR[i][0];
		$(itemName).on('tap', function(e) {
			e.preventDefault();
			e.stopPropagation();
			selectPlayer(this);
			$(this).off('click');
		})
	}
}


function scrollerTeamHor() {
	//console.log("scrollerTeamHorizontal");
	scrollerTeamHorizontal = new IScroll('#game2', { scrollX: true, scrollY: false, mouseWheel: true, click: true });
}

function scrollerTeam() {
	//console.log("scrollerTeam");
	myTeamScroll = new IScroll('#scrollerTeam', { mouseWheel: true, click: true });
}

function scrollerPlayers() {
	//console.log("scrollerPlayers");
	myScrollPlayer = "";
	myScrollPlayer = new IScroll('#gameTeam2', { scrollX: true, scrollY: false, mouseWheel: true, click: true });

}
function noAutocheckPlayers() {
	if (autoSelectVAR){
		console.log("noAutocheckPlayers if",autoSelectVAR)
		var str = 'AUTOSELECT PLAYERS<img src="img/checknot.png" style="width:1em">';
		removeSelectedPlayers(11);
	} else {
		console.log("noAutocheckPlayers else",autoSelectVAR)
		var str = 'AUTOSELECT PLAYERS<img src="img/check.png" style="width:1em">';
		autoSelectPlayers(11);
	}  
	$('#autoselectBTN').html(str);
	autoSelectVAR = !autoSelectVAR;
}

// Remove select players
function removeSelectedPlayers(nmb) {
	
	var str = "scroll and select players"
	
	for(var i=0;i<nmb;i++){
		var el = "#playerDrag"+selectedPlayers[i];
		$(el).css('border','5px solid #fff');	
	}
	
	selectedPlayers = [];

	$("#readyBTN").html("<h3><center>" + selectedPlayers.length + " players selected</center></h3>");
	$('#selectedPlayersList').html(str);
}

// Autoselect players
function autoSelectPlayers(nmb) {
	
	var arr = [];
	var str = "";
	
	if (lastSelectedPlayers.length != 0) {
		selectedPlayers = [];
		for (var i = 0; i < lastSelectedPlayers.length; i++){
			var isBanned = banCheck(lastSelectedPlayers[i]);
			if (!isBanned) {
				selectedPlayers[selectedPlayers.length] = lastSelectedPlayers[i];
			}
		}

		//console.log("selectedPlayers check", selectedPlayers)
	}
	if (selectedPlayers.length != nmb) {
		while(arr.length < nmb){
			var randomnumber = Math.ceil(Math.random()*22)
			var found = false;
			for(var i=0; i<arr.length; i++){
				if(arr[i] == randomnumber){
					found = true;
					break;
				}
			}
			
			if (!found) {
				var isBanned = banCheck(randomnumber);
				if (isBanned) {
					found = true;
				} else {
					arr[arr.length]=randomnumber;
				}
			}
		}
		
		for(var i=0;i<nmb;i++){
			var el = "#playerDrag"+arr[i];
			$(el).css('border','5px solid #00af4b');
			if (selectedPlayers.length < nmb)selectedPlayers.push(arr[i]);
			str += findName(arr[i],team2ARR) + ", ";
		}
	} else {
		for(var i=0;i<nmb;i++){
			var el = "#playerDrag"+selectedPlayers[i];
			$(el).css('border','5px solid #00af4b');
			str += findName(selectedPlayers[i],team2ARR) + ", ";
		}
	}
	
	var str2 = "";
	for (var i = 0; i < selectedPlayers.length; i++){
		str2 += "<a onclick='unselectPlayer(" + i + ")' >" + findName(selectedPlayers[i],team2ARR) + "</a>, ";
	}
	$('#selectedPlayersList').html(str2);
	$("#readyBTN").html("<h3><center>Ready to play!</center></h3>");
	//console.log("autoSelectedPlayersList",selectedPlayers)
	checkCards();
}  

function checkCards(){
	//console.log("checkCards",cupRound,playingTeam2BAN.length)
	for (var i = 0; i < playingTeam2BAN.length; i++){
		var str = playingTeam2BAN[i][0];
		var str1 = playingTeam2BAN[i][1];
		var str2 = "#playerDrag" + str1;
		var str3 = "#playerDragBG" + str1;
		var str4 = playingTeam2BAN[i][2];
		var str5 = playingTeam2BAN[i][3];
		//console.log("checkCards",str,str1);
		switch(str){
			case "yellow":
				//$(str2).addClass("yellowCard");
				break;
			case "red":
				console.log("checkCards red",str5," - days left:",str4);
				$(str2).addClass("redCard");
				playingTeam2BAN[i][2] = Number(str4)-1;
				if (playingTeam2BAN[i][2] == 0) {
					var tempARR = playingTeam2BAN;
					playingTeam2BAN = [];
					playingTeam2BAN = removeArray(tempARR,i);
				}
				//console.log("checkCards red2", playingTeam2BAN[i][2]);

				break;
			case "injury":
				console.log("checkCards injury",str5," - days left:",str4);
				$(str2).addClass("blueCard");
				playingTeam2BAN[i][2] = Number(str4)-1;
				if (playingTeam2BAN[i][2] == 0) {
					var tempARR = playingTeam2BAN;
					playingTeam2BAN = [];
					playingTeam2BAN = removeArray(tempARR,i);
				}
				//console.log("checkCards injury2", playingTeam2BAN[i][2]);

				break;
		}
		
		$(str3).addClass("cardOverlay");
	}
}

function banCheck(id){
	var returnValue = false;
	for (var i = 0; i < playingTeam2BAN.length; i++){
		//console.log("banCheck",playingTeam2BAN[i][1],id);
		if (playingTeam2BAN[i][1] == Number(id)) {
			//console.log("banCheck found",playingTeam2BAN[i][0],id);
			returnValue = true;
		}
	}
	return returnValue;
}

// Check player number before game start
function checkPlayers() {
	
	if (selectedPlayers.length < 11) {
		min11Overlay("You need 11 players in the team!")
	} else {
		////console.log("checkPlayers else");
		$('#players').fadeOut();
		$('#game2').fadeOut();
		//
		//pageController("group","game");
		$('#coinOverlay').fadeIn();
	}
	
}  

// Select coin to see who will start
function selectCoin(el) {
	
	var userCoin = "";
	var randomCoin = "";
	
	if (firstClick) {
		if (el == "head") {
			userCoin = "head";
			clickAnim("#coin_head");
		} else {
			 userCoin = "tail";
			 clickAnim("#coin_tail");
		}
		//firstClick = false;
		
		var num = Math.random(); 
		if (num > 0.5) {
			randomCoin = "head";
		} else {
			randomCoin = "tail";
		}
		
		if (randomCoin == userCoin) {
			team2Win = true;
			team2Start = true;
			var str = '';
			if (userCoin == 'tail') $('#coinLink1').html(str);
			else $('#coinLink2').html(str);
			var str2 = '<br> <img src="img/youwin.png" style="width: 70%">';
			$('#coinWinner').html(str2);
			clickAnim(el);
			
		} else {
			team1Start = true;
			team1Win = true;
			var str = '';
			//if (userCoin == 'tail') $('#coinLink1').html(str);
			//else $('#coinLink2').html(str);
			var str2 = '<br> <img src="img/nexttime.png" style="width: 40%">';
			$( "#team1Catch" ).addClass("team1CatchActive")
			clickAnim_bounceOut(el);
			$('#coinWinner').html(str2);
		}	
	}
	//console.log("selectCoin",el);
	
	setTimeout(function() {
		$("#coinOverlay").hide(); 
		pageController("players","game");
		$('#choose').html('');
		repairCoins();
	}, 1000); 
	
} 

// repairCoins 
function repairCoins() {
	var str = '';
	$('#coinWinner').html(str);
	 
	str = '<img id="coin_tail" src="img/tails.png" class="coinImg">';
	$('#coinLink1').html(str);
	
	str = '<img id="coin_head" src="img/heads.png" class="coinImg">';
	$('#coinLink2').html(str);
	
} 

// Find player with number in array
function findPlayerPos(id,array) {
	////console.log("findPlayerPos",id,array);		
	var num = 0;
	for (var i = 0; i < array.length; i++) {
		////console.log("findPlayerPos - ",i);	
		if (array[i][0] == id) {
			num = i;
			break;
		} 
	}
	
	return num;
}

function findPos(id,array) {
	var num = 0;
	////console.log("findPos start",id,array);
	for (var i = 0; i < array.length; i++) {
		//	
		if (array[i][0] == id) {
			num = i;
			break;
		} 
		////console.log("findPlayerPos",num,i);	
	}
	
	return num;
}

function findName(id,array) {
	var name = "";
	////console.log("findName start",id,array);
	for (var i = 0; i < array.length; i++) {
		if (array[i][0] == id) {
			name = array[i][1];
			break;
		} 
	}
	////console.log("findName end",id,name);
	return name;
}

function playAgainst() {
	
	playerFight();
	$('#gameTeam2').fadeOut();
	$("#fightOverlay").fadeIn();

	//console.log("playAgainst", gameRound,fightNMB);
	if(gameRound < fightNMB) {
		setTimeout(function() { 
			$('#fightOverlay').fadeOut();
			$('#gameTeam2').fadeIn();
			newFight();
		}, 3000); 
	} else {
		setTimeout(function() { 
			$('#fightOverlay').fadeOut();
			gameWinnerOverlay();
		}, 3000); 
	}
} 

function gameWinnerOverlay() {
	
	console.log("gameWinnerOverlay",team1,team2,point1,point2,cupRound)
	
	var teamsBan = autoBanList();
	
	if (cupRound > 3) roundsMatches = "";
	switch(cupRound){
		case 4:
			roundsMatches = round4Matches(team1,team2,point1,point2);
			break;
		case 5:
			roundsMatches = round5Matches(team1,team2,point1,point2);
			break;
		case 6:
			roundsMatches = round6Matches(team1,team2,point1,point2);
			break;
		case 7:
			roundsMatches = round7Matches(team1,team2,point1,point2);
			break;
	}
	
	var str = '<div id="resultPage0">' + team1 +' - ' + team2 + '</div><div id="resultPage1">' + point1 + ':' + point2 + '</div><div id="resultPage2">' + teamsBan + '</div><br><div id="resultPage3">Other matches</div><div id="resultPage4">' + roundsMatches + '</div>';
	$("#resultPage").html(str);
	$('#gameTeam2').fadeOut();
	
	
	
	switch(cupRound){
		case 1:
		case 2:
		case 3:
			saveMatch(playersGroup,team1,playersTeam,point1,point2);
			pageController("game","results");
			break;
		case 4:
		case 5:
		case 6:
		case 7:
			pageController("game","results");
			//pageController("game","groupfinal");
			break;
	}
	
	fightRunning = false;
	flipCard();
	
	cupRound++;
	generateCup(cupRound);
}

function newFight(){
	
	fightBTNChange("Random player");
	flipCard();
	gameRound++;
	if (team1Win) {
		removeTeam1Player();
		loadTeam1Stage();
		removeTeam2Player();
		//loadTeam2Stage();
		showInfoPanel("<center>"+ team2 + " was won, he starting next round</center>");
	} else {
		removeTeam1Player();	
		removeTeam2Player();
		loadTeam1Stage();
		showInfoPanel("<center>You win, select your card to start next round!</center>");
	}
	
	changeResult(team1, team2, point1, point2);
	fightRunning = false;
}

function removeArray(arr,element){
	
	var newArray = [];
	var num = 0;
	
	for (var j = 0; j < arr.length; j++) {
		if (j != element) {
			newArray[num] = arr[j];
			num++;
		} 
	}

	return newArray;
}

function removeTeam1Player(){
	
	var newArray = [];
	var num = 0;
	var player1Pos = findPlayerPos(currentTeam1Player,playingTeam1ARR);
	
	for (var j = 0; j < playingTeam1ARR.length; j++) {
		if (playingTeam1ARR[j][0] != currentTeam1Player) {
			newArray[num] = new Array();
			for (var i = 0; i < playingTeam1ARR[j].length; i++) {
				newArray[num][i] = playingTeam1ARR[j][i];
			} 
			num++;
		} 
	}

	playingTeam1ARR.length = 0
	playingTeam1ARR = newArray;
	
}


function removeTeam2Player(){
	
	
	var newArray = [];
	var num = 0;
	
	var player2Pos = findPlayerPos(currentTeam2Player,playingTeam2ARR);
	
	for (var j = 0; j < playingTeam2ARR.length; j++) {
		
		if (playingTeam2ARR[j][0] != currentTeam2Player) {
			newArray[num] = new Array();
			
			for (var i = 0; i < playingTeam2ARR[j].length; i++) {			
				newArray[num][i] = playingTeam2ARR[j][i];
				
			}
			num++;
		} 
	}
	
	playingTeam2ARR.length = 0;
	playingTeam2ARR = newArray;
	
	var newArray2 = [];
	var num2 = 0;
	for (var k = 0; k < selectedPlayers.length; k++) {
		if (selectedPlayers[k] != currentTeam2Player) {
			newArray2[num2] = selectedPlayers[k];
			num2++;
		} 
	}
	
	selectedPlayers.length = 0;
	selectedPlayers = newArray2;
	////console.log("removeTeam2Player",player2Pos,selectedPlayers.length);
	
	var str3 = "#playerFight" + currentTeam2Player;
	$( str3 ).remove();
	//console.log("removeTeam2Player",currentTeam2Player,str3);
	currentTeam2Player = 0;
}

function playerFight() {
	
	fightRunning = true;
	var winnerName = "";
	var winnerProp = "";
	var winnerNMB = 0;
	var winnerNMB2 = 0;
	team1Win = false;
	team2Win = false;
	var winTempTEXT = "";
	var winTEXT = "";
	var team1PlayerPoints = 0;
	var team2PlayerPoints = 0;
	
	var p11 = p12 = p21 = p22 = p31 = p32 = p41 = p44 = 0;
	var img1url = "";
	var img2url = "";
	
	var player1Pos = findPlayerPos(currentTeam1Player,playingTeam1ARR);
	var player1Name = playingTeam1ARR[player1Pos][1];
	////console.log("player1",player1Pos,player1Name)
	var player2Pos = findPlayerPos(currentTeam2Player,playingTeam2ARR);
	var player2Name = playingTeam2ARR[player2Pos][1];
	//console.log("player2",player2Pos,player2Name)
	
	var str = "";
	
	for (var i = 2; i < 8; i++) {
		var nmb = playingTeam1ARR[player1Pos][i];
		var nmb2 = playingTeam2ARR[player2Pos][i];
		
		switch(i) {
		case 3:
			p11 = nmb;
			p12 = nmb2;
			break;
		case 4:
			p21 = nmb;
			p22 = nmb2;
			break;
		case 5:
			p31 = nmb;
			p32 = nmb2;
			break;
		case 6:
			p41 = nmb;
			p42 = nmb2;
			break;
		case 7:
			img1url = nmb;
			img2url = nmb2;
			break;
		}
		
		
	}
	////console.log("player2 img2url",img2url)
	
	
	team1PlayerPoints = Number(p11) + Number(p21) + Number(p31) + Number(p41);
	team2PlayerPoints = Number(p12) + Number(p22) + Number(p32) + Number(p42);
	
	//console.log("player2 team1PlayerPoints",team1PlayerPoints,team2PlayerPoints)
	
	var team1p = 0;
	var team2p = 0;
	
	var divPos = whoIsWinner(Number(p11),Number(p12));
	if(divPos == 1) team1p++;
	else team2p++;
	
	divPos = whoIsWinner(Number(p21),Number(p22));
	if(divPos == 1) team1p++;
	else team2p++;
	
	divPos = whoIsWinner(Number(p41),Number(p42));
	if(divPos == 1) team1p++;
	else team2p++;
	
	if (team1p > team2p) {
		team1Win = true;
		team2Win = false;
		point1++;
	} else  {
		team1Win = false;
		team2Win = true;
		point2++;
	}
	/*if (team1PlayerPoints > team2PlayerPoints) { 
		winnerName = team1ARR[currentTeam1Player][1];
		team1Win = true;
		team2Win = false;
		point1++;
		
	} else if (team1PlayerPoints == team2PlayerPoints) { 
		var allPoints1 = 0;
		allPoints1 = oddPoints(team1ARR,player1Pos);
		var allPoints2 = 0;
		allPoints2 = oddPoints(team2ARR,player2Pos);
		if (allPoints1 > allPoints2) { 
			winnerName = playingTeam1ARR[player1Pos][1];
			team1Win = true;
			team2Win = false;
			point1++;
		} else if (allPoints1 < allPoints2) { 
			winnerName = playingTeam2ARR[player2Pos][1];
			team2Win = true;
			team1Win = false;
			point2++;
		} else { 
			var chosenValue = Math.random() < 0.5 ? "team1Win" : "team2Win";
			if (chosenValue == "team1Win") {
				winnerName = playingTeam1ARR[player1Pos][1];
				team1Win = true;
				team2Win = false;
				point1++;
			}else {
				winnerName = playingTeam2ARR[player2Pos][1]
				team2Win = true;
				team1Win = false;
				point2++;
			}
		}
	} else { 
		winnerName = playingTeam2ARR[player2Pos][1];
		team2Win = true;
		team1Win = false;
		point2++;
	} */
	fightAnim(p11,p12,p21,p22,p31,p32,p41,p42,player1Name,player2Name,img1url,img2url);
	//winTEXT = "</div><br><div class=\"fightWinner\">" + winnerName + " is the winner!</div>";
	

	return winTEXT;
} 

function oddPoints(db,team) {
	var nmb = 0;
	nmb++;
	for (var i = 2; i < 6; i++) {
		nmb += db[i][team];
	} 	
	
	return nmb;	
} 

function changeResult(team1, team2, point1, point2) {

	//var str = '<div class="percent25">...</div><div class="scoreBoardBG"><div id="team1score">'+point1+'</div><div id="teamnames">'+ team1.substring(0, 3) + '-' + team2.substring(0, 3) + '</div><div id="team2score">'+point2+'</div></div><div class="percent25">...</div>';
	
	var str = team1 + " : " + team2 + "  -  " + point1 + " : " + point2;
	$('#game1TeamName').fadeOut();
	$('#game1TeamName').html(str);
	$('#game1TeamName').fadeIn();
} 

//
function selectPlayer(el) {
	
	clickAnim(el);
	
	var id = $(el).attr("id");
	var str = id.substring(10,id.length);
	var selected = notSelectedFunc(str);
	var isBanned = banCheck(str);

	if (!isBanned) {
		if (!selected) {
			if (selectedPlayers.length >= 11) {
				max11Overlay("Maximum 11 players could play in the team!");
			} else {
				$(el).css('border','5px solid #00af4b');
				var str2 = Number(str);
				selectedPlayers.push(str2);
			}
		} else {
			var arr = [];
			for (var i = 0; i < selectedPlayers.length; i++) {
				if (str != selectedPlayers[i]) arr.push(selectedPlayers[i]);
			} 
			selectedPlayers = [];
			selectedPlayers = arr;
			$(el).css('border','5px solid #fff');
		}
	}  
		
	if (selectedPlayers.length < 11) {
		$("#readyBTN").html("<h3><center>" + selectedPlayers.length + " players selected</center></h3>");
	} else {
		$("#readyBTN").html("<h3><center>Ready to play!</center></h3>");
	}
	
	
	var str2 = "";
	for (var i = 0; i < selectedPlayers.length; i++){
		str2 += "<a onclick='unselectPlayer(" + selectedPlayers[i] + ")' >" + findName(selectedPlayers[i],team2ARR) + "</a>, ";
	}
	$('#selectedPlayersList').html(str2);
	
	//console.log("selectPlayer ",selectedPlayers.length, id, selected, selectedPlayers);
} 

// unSelectFunc
function unselectPlayer(id) {

	var arr = [];
	for (var i = 0; i < selectedPlayers.length; i++) {

		if (selectedPlayers[i] != id) {
			arr.push(selectedPlayers[i]);
		} 
			
	} 
	selectedPlayers = [];
	selectedPlayers = arr;
		
	var str2 = "";
	for (var i = 0; i < selectedPlayers.length; i++){
		str2 += "<a onclick='unselectPlayer(" + selectedPlayers[i] + ")' >" + findName(selectedPlayers[i],team2ARR) + "</a>, ";
	}
	$('#selectedPlayersList').html(str2);
	
}    

// notSelectedFunc
function notSelectedFunc(id) {
	var check = false;
	for (var i = 0; i < selectedPlayers.length; i++) {
		if (selectedPlayers[i] == id) check = true;
	} 
	return check;
}   

// coin overlay
function coinOverlay(str) {
	
	var tempTXT = "<div class=\"coinOverlayCenter\">"+str+"<br><div class=\"fightData\">";
	
	$("#coinOverlay").html(tempTXT);
	$("#coinOverlay").fadeIn();
	
}


// min11Overlay player overlay
function min11Overlay(str) {
	
	$("#min11Overlay").css("z-index","100")
	$("#min11Overlay").fadeIn();
	
	setTimeout(function() { 
        $('#min11Overlay').fadeOut();
		
 	}, 2000); 
}

// max11 player overlay
function max11Overlay(str) {
	
	$("#max11Overlay").css("z-index","100")
	$("#max11Overlay").fadeIn();
	
	setTimeout(function() { 
        $('#max11Overlay').fadeOut();
		
 	}, 2000); 
}


// error overlay
function errorOverlay(str) {
	
	var tempTXT = "<div class=\"errorOverlayCenter\">"+str+"<br><div class=\"fightData\">";
	
	$("#errorOverlay").html(tempTXT);
	$("#errorOverlay").fadeIn();
	
	setTimeout(function() { 
        $('#errorOverlay').fadeOut();
		
 	}, 2000); 
}

// Load teams from file
function loadTeamFile1(urlTxt) {
	var tempArray;
	
	$.get(urlTxt, function(data){
		//data.setHeader("Content-Type", "application/json; charset=ISO-8859-1");
		tempArray = data.split(',');
		
		for (var i = 0; i < tempArray.length-1; i++) {
			
			// Player number
			team1ARR[i] = new Array();
			team1ARR[i][0] = i;	
					
			// Player name
			var s1 = tempArray[i].indexOf("|");
			var s2 = tempArray[i].substring(0, s1);
			var s3 = tempArray[i].substring(s1, tempArray[i].length);
			team1ARR[i][1] = s2;	
			
			// Player position
			var s4 = s3.substring(1, s3.length);
			s1 = s4.indexOf("|");
			s2 = s4.substring(0, s1);
			s3 = s4.substring(s1, tempArray[i].length);
			team1ARR[i][2] = s2;		
			
			// Attack
			s4 = s3.substring(1, s3.length);
			s1 = s4.indexOf("|");
			s2 = s4.substring(0, s1);
			s3 = s4.substring(s1, tempArray[i].length);
			team1ARR[i][3] = s2;	
			
			// Defense
			s4 = s3.substring(1, s3.length);
			s1 = s4.indexOf("|");
			s2 = s4.substring(0, s1);
			s3 = s4.substring(s1, tempArray[i].length);
			team1ARR[i][4] = s2;	
			
			// Technique
			s4 = s3.substring(1, s3.length);
			s1 = s4.indexOf("|");
			s2 = s4.substring(0, s1);
			s3 = s4.substring(s1, tempArray[i].length);
			team1ARR[i][5] = s2;	
			
			// Speed
			s4 = s3.substring(1, s3.length);
			s1 = s4.indexOf("|");
			s2 = s4.substring(0, s1);
			s3 = s4.substring(s1, tempArray[i].length);
			team1ARR[i][6] = s2;	
			
			// Image url
			s1 = s3.substring(1, s3.length);
			team1ARR[i][7] = s1;
			
			// Status
			team1ARR[i][8] = false;
			
			////console.log("load player1", team1ARR[i] );
		}
	});
	
	
	
}

function loadTeamFile2(urlTxt) {
	var tempArray;

	$.get(urlTxt, function(data){
		tempArray = data.split(',');
		
		for (var i = 0; i < maxPlayer; i++) {
			
			// Player number
			team2ARR[i] = new Array();
			team2ARR[i][0] = i;	
					
			// Player name
			var s1 = tempArray[i].indexOf("|");
			var s2 = tempArray[i].substring(0, s1);
			var s3 = tempArray[i].substring(s1, tempArray[i].length);
			team2ARR[i][1] = s2;
			////console.log("load team2 ",i,s2)	
			
			// Player position
			var s4 = s3.substring(1, s3.length);
			s1 = s4.indexOf("|");
			s2 = s4.substring(0, s1);
			s3 = s4.substring(s1, tempArray[i].length);
			team2ARR[i][2] = s2;		
			
			// Attack
			s4 = s3.substring(1, s3.length);
			s1 = s4.indexOf("|");
			s2 = s4.substring(0, s1);
			s3 = s4.substring(s1, tempArray[i].length);
			team2ARR[i][3] = s2;	
			
			// Defense
			s4 = s3.substring(1, s3.length);
			s1 = s4.indexOf("|");
			s2 = s4.substring(0, s1);
			s3 = s4.substring(s1, tempArray[i].length);
			team2ARR[i][4] = s2;	
			
			// Technique
			s4 = s3.substring(1, s3.length);
			s1 = s4.indexOf("|");
			s2 = s4.substring(0, s1);
			s3 = s4.substring(s1, tempArray[i].length);
			team2ARR[i][5] = s2;	
			
			// Speed
			s4 = s3.substring(1, s3.length);
			s1 = s4.indexOf("|");
			s2 = s4.substring(0, s1);
			s3 = s4.substring(s1, tempArray[i].length);
			team2ARR[i][6] = s2;	
			
			// Image url
			s1 = s3.substring(1, s3.length);
			team2ARR[i][7] = s1;
			
			// Status
			team2ARR[i][8] = false;
			
			////console.log("load player2", team2ARR[i] );
			
		}
		
	});
	
}

// Load teams from file
function loadTeams() {
	var tempArray;

	$.get('data/teams.txt', function(data){
		var tempArray = data.split(',');
		for (var i = 0; i < 32; i++) {
			
			// Team name
			var s1 = tempArray[i].indexOf("|");
			var s2 = tempArray[i].substring(0, s1);
			var s3 = tempArray[i].substring(s1, tempArray[i].length);
			teamsARR[i][0] = s2;	
			
			// Image files
			var s4 = s3.substring(1, s3.length);
			s1 = s4.indexOf("|");
			s2 = s4.substring(0, s1);
			s3 = s4.substring(s1, tempArray[i].length);
			teamsARR[i][1] = s2;	
			
			// Data files
			s4 = s3.substring(1, s3.length);
			s1 = s4.indexOf("|");
			s2 = s4.substring(0, s1);
			s3 = s4.substring(s1, tempArray[i].length);
			teamsARR[i][2] = s2;	
			
			// Groups
			s1 = s3.substring(1, 2);
			teamsARR[i][3] = s1;
			
		}
		
		var t0 = t1 = t2 = t3 = t4 = t5 = t6 = t7 = 0;
		for (var j = 0; j < 32; j++) {
			
			switch(teamsARR[j][3]){
				case "A":
					groupA[t0][0] = teamsARR[j][0];
					t0++;
					break;
				case "B":
					groupB[t1][0] = teamsARR[j][0];
					////console.log("teamsARR[j][3] B",teamsARR[j][3],teamsARR[j][0])
					t1++;
					break;
				case "C":
					groupC[t2][0] = teamsARR[j][0];
					t2++;
					break;
				case "D":
					groupD[t3][0] = teamsARR[j][0];
					t3++;
					break;
				case "E":
					groupE[t4][0] = teamsARR[j][0];
					t4++;
					break;
				case "F":
					groupF[t5][0] = teamsARR[j][0];
					t5++;
					break;
				case "G":
					groupG[t6][0] = teamsARR[j][0];
					t6++;
					break;
				case "H":
					groupH[t7][0] = teamsARR[j][0];
					t7++;
					break;
			}
		}
		////console.log("groupA", groupA)
		////console.log("groupB", groupB)
		loadGroups();
	});
}

// Load team matches from file
function loadGroups() {
	var tempArray;

	$.get('data/group_matches.txt', function(data){
		var tempArray = data.split(',');
		for (var i = 0; i < 8; i++) {
			
			// Match 1
			var s1 = tempArray[i].indexOf("|");
			var s2 = tempArray[i].substring(0, s1);
			var s3 = tempArray[i].substring(s1, tempArray[i].length);
			matchARR[i][0] = s2;	
			
			// Match 2
			var s4 = s3.substring(1, s3.length);
			s1 = s4.indexOf("|");
			s2 = s4.substring(0, s1);
			s3 = s4.substring(s1, tempArray[i].length);
			matchARR[i][1] = s2;	
			
			// Match 3
			s4 = s3.substring(1, s3.length);
			s1 = s4.indexOf("|");
			s2 = s4.substring(0, s1);
			s3 = s4.substring(s1, tempArray[i].length);
			matchARR[i][2] = s2;	
			
			// Match 4
			s4 = s3.substring(1, s3.length);
			s1 = s4.indexOf("|");
			s2 = s4.substring(0, s1);
			s3 = s4.substring(s1, tempArray[i].length);
			matchARR[i][3] = s2;
			
			// Match 5
			s4 = s3.substring(1, s3.length);
			s1 = s4.indexOf("|");
			s2 = s4.substring(0, s1);
			s3 = s4.substring(s1, tempArray[i].length);
			matchARR[i][4] = s2;
			
			
			// Match 6
			s4 = s3.substring(1, s3.length);
			s1 = s4.indexOf("|");
			s2 = s4.substring(0, s1);
			s3 = s4.substring(s1, tempArray[i].length);
			matchARR[i][5] = s3;		
			
		}	
	});	
}

function loadTextHeader(txt, headerName){
	$(headerName).html("<h1 class=\"ui-title\" role=\"heading\" aria-level=\"1\">" + txt + "</h1>");
}

function loadTeamToStage() {
			
	for (var i = 0; i < teamsARR.length; i++) {
		
		//var str = "<li><div class=\"gameCard2\" ><div class=\"flag" + i + "\" ></div><span class=\"gameCard2In\">"+ teamsARR[i][0].toUpperCase(); + "</span></li>";
		var str = "<li><a onclick=\"selectTeam('" + teamsARR[i][0]+teamsARR[i][3] + "');\"><div class=\"gameCard2\" ><div class=\"flag" + i + "\" ></div><span class=\"gameCard2In\">"+ teamsARR[i][0].toUpperCase(); + "</span></li>";

		$('#scrollerTeamList').append(str);
		
	} 
	//console.log("loadTeamToStage",str)
	scrollerTeam();
	
}

// 
function selectTeam(myTeam) {
	////console.log("playersTeam " + myTeam);
	
	playersTeam = team2 = myTeam.substring(0, myTeam.length-1);
	playersGroup = myTeam.substring(myTeam.length-1, myTeam.length);
	//console.log("playersTeam " + playersTeam);
	myTeamFunc(playersGroup);
	
	if (!isQuickGame) pageController("teams","group");
	else pageController("teams","players");
} 

// 
function myTeamFunc(group) {
	
	var j = 0;
	
	for (var i = 0; i < teamsARR.length; i++) {
		if (teamsARR[i][3] === group) {
			myGroupTeam[j][0] = teamsARR[i][0];
			j++;
		}
	}	
}

function updateGroup(group,team,p1,p2,p3) {
	////console.log("updateGroup",group,team,p1,p2,p3)
	var j = 0;
	for (var i = 0; i < 4; i++) {
		
		if (eval(group)[i][0] == team) {
			eval(group)[i][1] += Number(p1);
			eval(group)[i][2] += Number(p2);
			eval(group)[i][3] += Number(p3);
			j++;
		}	
	}	

}

// Team group name to find in datas
function groupToDB(group) {
	var nmb = 0;

	switch(group) {
	case "A":
		nmb = 0;
		break;
	case "B":
		nmb = 1;
		break;
	case "C":
		nmb = 2;
		break;
	case "D":
		nmb = 3;
		break;
	case "E":
		nmb = 4;
		break;
	case "F":
		nmb = 5;
		break;
	case "G":
		nmb = 6;
		break;
	case "H":
		nmb = 7;
		break;
	}
	
	return nmb;
} 


// Info Panel is visibly in the game footer
function showInfoPanel(txt) {
	$('#game1TeamName').fadeOut();
	$('#game1TeamName').html(txt);
	$('#game1TeamName').fadeIn();
	
	setTimeout(function() { 
		$('#game1TeamName').fadeOut();
        changeResult(team1, team2, point1, point2);
		$('#game1TeamName').fadeIn();
 	}, 5000); 
}



// Show the player's world cup results
function showCupResults() {
	
	var teamDB = groupToDB(playersGroup);
	var playerNextGameTXT = nextMatch(playersTeam,teamDB);
	chooseTeams(playerNextGame,playersTeam);
	
	//console.log("showCupResults playerNextGameTXT", playerNextGameTXT);
	orderGroups();
	myGroupTeam = eval("group" + playersGroup);
	
	// <h2 class=\"tableBG\">Group "+ playersGroup +" - " + playersTeam + "</h2>
	var str = "<div data-role=\"header\" class=\"ui-header ui-bar-inherit\" role=\"banner\" style=\"background-color:#162433;color:#FFB800;position:fixed;width:100%;\"><h1 class=\"ui-title\" role=\"heading\" aria-level=\"1\">Group "+ playersGroup +" - "+ playersTeam + "</h1></div><div class=\"tableBG2\"><div class=\"result0\">"+myGroupTeam[0][0]+"</div><div class=\"result3\">"+myGroupTeam[0][1]+"</div><div class=\"result2\">"+myGroupTeam[0][2]+"</div><div class=\"result1\">"+myGroupTeam[0][3]+"</div><br><div class=\"result0\">"+myGroupTeam[1][0]+"</div><div class=\"result3\">"+myGroupTeam[1][1]+"</div><div class=\"result2\">"+myGroupTeam[1][2]+"</div><div class=\"result1\">"+myGroupTeam[1][3]+"</div><br><div class=\"result0\">"+myGroupTeam[2][0]+"</div><div class=\"result3\">"+myGroupTeam[2][1]+"</div><div class=\"result2\">"+myGroupTeam[2][2]+"</div><div class=\"result1\">"+myGroupTeam[2][3]+"</div><br><div class=\"result0\">"+myGroupTeam[3][0]+"</div><div class=\"result3\">"+myGroupTeam[3][1]+"</div><div class=\"result2\">"+myGroupTeam[3][2]+"</div><div class=\"result1\">"+myGroupTeam[3][3]+"</div><div class=\"tableBG3\">"+playerNextGameTXT+"<br></div>"
	

	
	$('#cupResult').html(str);
	////console.log("showCupResults",str);
} 

// Choose team1 and team2
function chooseTeams(game) {
	
	//console.log("chooseTeams", game)
	
	var temp = game.indexOf(" - ");
	
	var temp1 = game.substring( 0, temp )
	var temp2 = game.substring( temp+3, game.length )

	if (temp1 == playersTeam) {
		team1 = temp2;
		team2 = temp1;
	} else {
		team1 = temp1;
		team2 = temp2;
	}
	//console.log("chooseTeams end", team1, team2)
}


// load team's shirt for selecting players
function teamImgFunc(team){

	var str = "";
	for (var i = 0; i < teamsARR.length; i++) {

		if (teamsARR[i][0] === team) {
			str = teamsARR[i][1];
		}
	}	
	
	return str;
}

// load player's shirt 
function playerImgFunc(team){
	
	var str = "";
	for (var i = 0; i < teamsARR.length; i++) {
		//console.log();
		if (teamsARR[i][0] === team) {
			str = teamsARR[i][1];
		}
	}	
	
	return str;
}

function nextMatch(team,db){
	var str = "<div class=\"nextMatchHead\">Your next match</div>";
	var str2 = "";
	////console.log("nextMatch",team," cupRound",cupRound);
	for (var i = 0; i < 6; i++) {
		if (matchARR[db][i].indexOf(team) > -1) {
			//console.log("nextMatch", cupRound, i, matchARR[db][i].indexOf(team));
			switch(cupRound){
				case 1:
					if (i < 2) {
						////console.log("nextMatch1", cupRound, i, matchARR[db][i].indexOf(team));
						str += "<div class=\"nextMatch\">" + matchARR[db][i] + "</div>";
						playerNextGame = matchARR[db][i]; 
					} 
					break;
				case 2:
					if (i == 2) {
						////console.log("nextMatch2", cupRound, i, matchARR[db][i].indexOf(team));
						str += "<div class=\"nextMatch\">" + matchARR[db][i] + "</div>";
						playerNextGame = matchARR[db][i];
					} 
					if (i == 3) {
						////console.log("nextMatch2", cupRound, i, matchARR[db][i].indexOf(team));
						str += "<div class=\"nextMatch\">" + matchARR[db][i] + "</div>";
						playerNextGame = matchARR[db][i];
					} 
					break;
				case 3:
					if (i == 4) {
						////console.log("nextMatch3", cupRound, i, matchARR[db][i].indexOf(team));
						str += "<div class=\"nextMatch\">" + matchARR[db][i] + "</div>";
						playerNextGame = matchARR[db][i];
					} 
					if (i == 5) {
						////console.log("nextMatch3", cupRound, i, matchARR[db][i].indexOf(team));
						str += "<div class=\"nextMatch\">" + matchARR[db][i] + "</div>";
						playerNextGame = matchARR[db][i];
					} 
					break;
			}
			
			
		} else {
			//str +=  matchARR[db][i] + "<br>";
		}
	}
	//console.log("nextMatch",str);
	//str +=  "<br><div class=\"nextMatchHead\">Other matches in your group</div>" + str2;
	return str;
}


// Generate round 
function generateRound(){
	console.log("generateRound:" + cupRound);
	roundsMatches = "<ul id=\"endMatches\" class=\"columns\" data-columns=\"2\">";
	var nmb = cupRound * 2;
	
	for (var i = 0; i < 8; i++) {
		switch(i){
			case 0:
				var group = "groupA";
				break;
			case 1:
				var group = "groupB";
				break;
			case 2:
				var group = "groupC";
				break;
			case 3:
				var group = "groupD";
				break;
			case 4:
				var group = "groupE";
				break;
			case 5:
				var group = "groupF";
				break;
			case 6:
				var group = "groupG";
				break;
			case 7:
				var group = "groupH";
				break;
		}
		
		if (matchARR[i][nmb-2].indexOf(team2) == -1 ) generateMatch(matchARR[i][nmb-2],group);
		if (matchARR[i][nmb-1].indexOf(team2) == -1 ) generateMatch(matchARR[i][nmb-1],group);
	}
	roundsMatches += "</ul>";
	//cupRound++;

}


// Generate match
function generateMatch(str,group){
	
	var currentMatchResults = [];
	
	if (settingsARR["fightnmb"] == 5) currentMatchResults = matchResults5;
	else if (settingsARR["fightnmb"] == 7) currentMatchResults = matchResults7;
	else currentMatchResults = matchResults;
	
	if (playerNextGame != str) {
	
		var randomnumber = Math.ceil(Math.random()*currentMatchResults.length)
		var result = currentMatchResults[randomnumber-1];
		var nmb = str.indexOf(" - ");
		var nmb2 = result.indexOf("-");
		
		var t1 = str.substring(0, nmb);
		var t2 = str.substring(nmb+3, str.length);
		var result1 = result.substring(0, nmb2);
		var result2 = result.substring(nmb2+1, result.length);
		
		if (result1>result2) {
			var p1 = 3;
			var p2 = 0;
		} else {
			var p1 = 0;
			var p2 = 3;
		}
		
		roundsMatches += '<li class="noList">' + t1 + '-' + t2 + '  ' + result1 + ':' + result2 +'</li>';
		
		updateGroup(group,t1,result1,result2,p1);
		updateGroup(group,t2,result2,result1,p2);
	}
}

// Generate match
function generateMatch2(t1,t2){
	
	var currentMatchResults = [];
	var tempARR = [];
	var str = "";
	
	if (settingsARR["fightnmb"] == 5) currentMatchResults = matchResults5;
	else if (settingsARR["fightnmb"] == 7) currentMatchResults = matchResults7;
	else currentMatchResults = matchResults;

	var randomnumber = Math.ceil(Math.random()*currentMatchResults.length)
	var result = currentMatchResults[randomnumber-1];
	var nmb = result.indexOf("-");
		
	var result1 = result.substring(0, nmb);
	var result2 = result.substring(nmb+1, result.length);
		
	str += t1 + '-' + t2 + '  ' + result1 + ':' + result2;
	
	currentMatchResults[0] = str;
	if (Number(result1)>Number(result2)) {
		currentMatchResults[1] = t1;	
		currentMatchResults[2] = t2;
	}else {
		currentMatchResults[1] = t2;	
		currentMatchResults[2] = t1;
	}
	console.log("generateMatch2",t1,t2,currentMatchResults)
	return currentMatchResults;
}

function isEven(n) 
{
   return isNumber(n) && (n % 2 == 0);
}

function isOdd(n)
{
   return isNumber(n) && (Math.abs(n) % 2 == 1);
}

function isNumber(n)
{
   return n == parseFloat(n);
}


// save played match
function saveMatch(group,t1,t2,result1,result2){
	console.log("saveMatch",group,t1,t2,result1,result2,cupRound)
	
	var groupID= "group"+group;
	
	if (result1>result2) {
		var p1 = 3;
		var p2 = 0;	
	} else {
		var p1 = 0;
		var p2 = 3;
	}
	
		
	updateGroup(groupID,t1,result1,result2,p1);
	updateGroup(groupID,t2,result2,result1,p2);
}

function saveBan(playerName) {

	//if (team2ARR[i][8] == playerName){
	
	//}
}
// generate Ban list
function autoBanList(){
	
	var result = "";
	
	var bannedPlayer1 = "-";
	var bannedPlayer2 = "-";
	var yellowCard = randomnumber=Math.ceil(Math.random()*yelloCardRandom);
	if (yellowCard == 1) var yellowCardBool = true;
	if (yellowCardBool) {
		var randomNum = Math.floor(Math.random()*playingTeam1ARR.length);
		var array = [];
		array.push("yellow");
		array.push(playingTeam1ARR[randomNum][0]);
		array.push(1);
		array.push(playingTeam1ARR[randomNum][1]);
		bannedPlayer1 = playingTeam1ARR[randomNum][1];
		//playingTeam1BAN.push(array);
		saveBan(bannedPlayer1);
	}
	var yellowCard = randomnumber=Math.ceil(Math.random()*yelloCardRandom);
	if (yellowCard == 1) var yellowCardBool = true;
	if (yellowCardBool) {
		var randomNum = Math.floor(Math.random()*playingTeam2ARR.length);
		var array = [];
		array.push("yellow");
		array.push(playingTeam2ARR[randomNum][0]);
		array.push(1);
		array.push(playingTeam2ARR[randomNum][1]);
		//bannedPlayer2 = playingTeam2ARR[randomNum][1];
		playingTeam2BAN.push(array);
	}
	result += "<img src=\"img/yellowcard.png\">Yellow card: " + bannedPlayer1 +", "+ bannedPlayer2 + "<br>";
		
	var bannedPlayer1 = "-";
	var bannedPlayer2 = "-";
	var redCard = randomnumber=Math.ceil(Math.random()*redCardRandom);
	if (redCard == 1) var redCardBool = true;	
	if (redCardBool) {
		var randomNum = Math.floor(Math.random()*playingTeam1ARR.length);
		var array = [];
		array.push("red");
		array.push(playingTeam1ARR[randomNum][0]);
		array.push(1);
		array.push(playingTeam1ARR[randomNum][1]);
		bannedPlayer1 = playingTeam1ARR[randomNum][1];
		playingTeam1BAN.push(array);
	}
	var redCard = randomnumber=Math.ceil(Math.random()*redCardRandom);
	if (redCard == 1) var redCardBool = true;
	if (redCardBool) {
		var randomNum = Math.floor(Math.random()*playingTeam2ARR.length);
		var array = [];
		array.push("red");
		array.push(playingTeam2ARR[randomNum][0]);
		array.push(1);
		array.push(playingTeam2ARR[randomNum][1]);
		bannedPlayer2 = playingTeam2ARR[randomNum][1];
		playingTeam2BAN.push(array);
	}
	result += "<img src=\"img/redcard.png\">Red card: " + bannedPlayer1 +", "+ bannedPlayer2 + "<br>";
	
	var bannedPlayer1 = "-";
	var bannedPlayer2 = "-";
	var injury = randomnumber=Math.ceil(Math.random()*injuryRandom);
	if (injury == 1) var injuryBool = true;	
	if (injuryBool) {
		var randomNum = Math.floor(Math.random()*playingTeam1ARR.length);
		var randomDays = Math.floor(Math.random()*2) + 1;
		var array = [];
		array.push("injury");
		array.push(playingTeam1ARR[randomNum][0]);
		array.push(randomDays);
		array.push(playingTeam1ARR[randomNum][1]);
		bannedPlayer1 = playingTeam1ARR[randomNum][1];
		playingTeam1BAN.push(array);
	}
	var injury = randomnumber=Math.ceil(Math.random()*injuryRandom);
	if (injury == 1) var injuryBool = true;
	if (injuryBool) {
		var randomNum = Math.floor(Math.random()*playingTeam2ARR.length);
		var randomDays = Math.floor(Math.random()*2) + 1;
		var array = [];
		array.push("injury");
		array.push(playingTeam2ARR[randomNum][0]);
		array.push(randomDays);
		array.push(playingTeam2ARR[randomNum][1]);
		bannedPlayer2 = playingTeam2ARR[randomNum][1];
		playingTeam2BAN.push(array);
	}
	result += "<img src=\"img/injury.png\">Injury: " + bannedPlayer1 +", "+ bannedPlayer2 + "<br>";	
	
	return result;
}

function soundSettingsChange() {
	var urlAbsolute1 = "img/checkBig.png";
	var urlAbsolute2 = "img/uncheckBig.png";
	if (soundSettingStatus) {
		$('#settings-sound').attr("src", urlAbsolute1);
		settingsARR["sound"] = true;
	} else {
		$('#settings-sound').attr("src", urlAbsolute2);
		settingsARR["sound"] = false;
	}  
	soundSettingStatus =! soundSettingStatus;
	saveSettings();
}

function tutorialSettingsChange() {
	var urlAbsolute1 = "img/checkBig.png";
	var urlAbsolute2 = "img/uncheckBig.png";
	if (tutorialSettingStatus) $('#settings-tutorial').attr("src", urlAbsolute1);
	else $('#settings-tutorial').attr("src", urlAbsolute2);
	tutorialSettingStatus =! tutorialSettingStatus;
	saveSettings();
}





function menuOverlayStatus(show) {
	/*//console.log("menuOverlayStatus");
	if (show == true) {
		//console.log("menuOverlayStatus true");
		$('#menuOverlay').fadeIn();
	} else {
		//console.log("menuOverlayStatus false");
		$('#menuOverlay').fadeOut();
	}*/
}

function generateQuickResult() {
	$('#quickResultPage').html("");
	
	var teamsBan = autoBanList();
	
	var str = '<div id="resultPage0">' + team1 +':' + team2 + '</div><div id="resultPage1">' + point1 + '-' + point2 + '</div><div id="resultPage2">' + teamsBan + '</div><br>';

	$("#quickResultPage").html(str);
	$('#gameTeam2').fadeOut();

	fightRunning = false;

	
}

function showHelp(){
	$('#helpOverlay').fadeIn();
}

function closeHelp(){
	
	$('#helpOverlay').fadeOut();
}

function noMoreHelp(){
	settingsARR["helptext"] = "true";
	saveSettings();
	$('#helpOverlay').fadeOut();
}

function playerNextGameFunc(arr){
	console.log("playerNextGame",arr);
	playerTeamWin = false;
	
	for (var i = 0; i < arr.length; i++) {
		if (playersTeam == arr[i]){ 
			if(isEven(i)){
				team1 = arr[i+1];
			} else {				
				team1 = arr[i-1];
			}
			playerNextGame = team1 + "-" + team2;
			playerTeamWin = true;
			break;
			} 
		}
	if (playerTeamWin) loadTeamsFiles();
	else {
		
		loadLoserPage();
	}
	console.log("playerNextGame",playerNextGame,cupRound);
}

function loadLoserPage(){	
	$('#game').hide();
	$('#game2').hide();
	$('#groupfinal').hide();
	$('#results').hide();				
	pageController('result','loser');
}

function loadWinnerPage(){	
	$('#game').hide();
	$('#game2').hide();
	$('#groupfinal').hide();
	$('#results').hide();			
	pageController('result','winner');
}
