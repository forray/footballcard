var r4Teams = [];
var r5Teams = [];
var r6Teams = [];
var r7Teams = [];

var matchList = "";
var winnerTeam = "";
var secondTeam = "";
var thirdTeam = "";
var fourthTeam = "";

// generate cup next round
function generateCup(cupRound){
	console.log("generateCup",cupRound)
	switch(cupRound){
		case 1:
			
			break;
		case 2:
			
			break;
		case 3:
			
			break;
		case 4:
			checkGroupWinners();
			//round4Matches();
			
			break;
		case 5:
			
			
			break;
		case 6:
			
			
			break;
		case 7:
		
			break;
		case 8:
			//loadWinnerPage();
			//loadLoserPage();
			break;
		}
		
}

function checkGroupWinners(){
	////console.log("checkGroupWinners");
	if (cupRound > 2) orderGroups();
	
	r4Teams[0] = groupA[0][0];
	r4Teams[1] = groupB[1][0];
	r4Teams[2] = groupC[0][0];
	r4Teams[3] = groupD[1][0];
	r4Teams[4] = groupB[0][0];
	r4Teams[5] = groupA[1][0];
	r4Teams[6] = groupD[0][0];
	r4Teams[7] = groupC[1][0];
	r4Teams[8] = groupE[0][0];
	r4Teams[9] = groupF[1][0];;
	r4Teams[10] = groupG[0][0];
	r4Teams[11] = groupH[1][0];
	r4Teams[12] = groupF[0][0];
	r4Teams[13] = groupE[1][0];
	r4Teams[14] = groupH[0][0];
	r4Teams[15] = groupG[1][0];;
	
	for (var i = 0; i < r4Teams.length; i++) {
		if (playersTeam == r4Teams[i]) playerInGame = true;
		else {
			playerInGame = false;
		}
	}
	if (playerInGame) pageController('result','loser');
	
}

function groupFinalMatch4(){
	var matches = "";
	for (var i = 0; i < r4Teams.length; i++) {	
		matches += r4Teams[i];
		if(isEven(i)){
			matches += " : ";			
		} else {
			matches += "<br>";

		}
	}
	
	playerNextGameFunc(r4Teams);
	console.log("groupFinalMatch4",playerNextGame);
	
	var str = "<div class=\"nextMatchHeadBig\">Congratulation, you're in the round of 16!<br><br><div class=\"nextMatchHead\">Your next match</div><div class=\"nextMatch\">" + playerNextGame + "</div></div><br><div id=\"resultPage3\">Other matches</div><div id=\"resultPage4\">" + matches + "</div>";

	$('#groupFinalMatches').html(str);	
}

function groupFinalMatch5(){
	var matches = "";
	for (var i = 0; i < r5Teams.length; i++) {
		
		matches += r5Teams[i];
		if(isEven(i)){
			matches += " : ";			
		} else {
			matches += "<br>";
		}
	}	
	
	playerNextGameFunc(r5Teams);
	console.log("groupFinalMatch5",playerNextGame);
	
	var str = "<div class=\"nextMatchHeadBig\">Congratulation, you're in the quater-finals!<br><br><div class=\"nextMatchHead\">Your next match</div><div class=\"nextMatch\">" + playerNextGame + "</div></div><br><div id=\"resultPage3\">Other matches</div><div id=\"resultPage4\">" + matches + "</div>";

	$('#groupFinalMatches').html(str);	
}

function groupFinalMatch6(){
	var matches = "";
	for (var i = 0; i < r6Teams.length; i++) {
		
		matches += r6Teams[i];
		if(isEven(i)){
			matches += " : ";			
		} else {
			matches += "<br>";
		}
	}
	
	playerNextGameFunc(r6Teams);
	console.log("groupFinalMatch6",playerNextGame);

	var str = "<div class=\"nextMatchHeadBig\">Congratulation, you're in the semi-finals!<br><br><div class=\"nextMatchHead\">Your next match</div><div class=\"nextMatch\">" + playerNextGame + "</div></div><br><div id=\"resultPage3\">Other matches</div><div id=\"resultPage4\">" + matches + "</div>";

	$('#groupFinalMatches').html(str);
}

function groupFinalMatch7(){
	var matches = "";
	for (var i = 0; i < r7Teams.length; i++) {
		
		matches += r7Teams[i];
		if(isEven(i)){
			matches += " : ";			
		} else {
			matches += "<br>";
		}
	}	
	
	playerNextGameFunc(r7Teams);
	console.log("groupFinalMatch7",playerNextGame);
	
	var str = "<div class=\"nextMatchHeadBig\">Congratulation, you're in the Final!<br><br><div class=\"nextMatchHead\">Your next match</div><div class=\"nextMatch\">" + playerNextGame + "</div></div><br><div id=\"resultPage3\">Other matches</div><div id=\"resultPage4\">" + matches + "</div>";

	$('#groupFinalMatches').html(str);	
}


function orderGroups() {
	
	////console.log("orderGroups");
	groupA = orderThisGroup(groupA);
	groupB = orderThisGroup(groupB);
	groupC = orderThisGroup(groupC);
	groupD = orderThisGroup(groupD);
	groupE = orderThisGroup(groupE);
	groupF = orderThisGroup(groupF);
	groupG = orderThisGroup(groupG);
	groupH = orderThisGroup(groupH);
	
}	

function orderThisGroup(group) {
	
	//////console.log("before order",group)
	var newGroup = [];
	var newGroup2 = [];
	var newGroup3 = [];
	var newGroup4 = group;
	
	for (var i = 0; i < 4; i++) {
		newGroup.push(group[i][3]);
	}
	
	var maxNMB = 0;
	var maxCount = 0;
	//////console.log("after order newGroup",newGroup)
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < newGroup.length; j++) {
			if (maxNMB < newGroup[j]) {
				maxNMB = newGroup[j];
				maxCount = j;
			}
		}
		delete newGroup[maxCount];
		//newGroup.push(maxNMB);
		newGroup2.push(maxNMB);
		maxNMB = 0;
	}
	//////console.log("after order newGroup2",newGroup2)
	var newGroup = [];
	for (var i = 0; i < 4; i++) {
		//////console.log("order for",i)
		var nmb = newGroup2[i];
		for (var j = 0; j < newGroup4.length; j++) {
			//////console.log("order",newGroup4.length, j)
			if (nmb == newGroup4[j][3]){
				newGroup3.push(newGroup4[j]);
				//////console.log("order if",newGroup3.length)
			} else {
				newGroup.push(newGroup4[j]);
				//////console.log("order else",newGroup.length)
			}
		}
		var newGroup4 = newGroup;
		var newGroup = [];
		//////console.log("order newGroup4.length",newGroup4.length)
	}
	
	//////console.log("after order newGroup3",newGroup3)
	return newGroup3;
}
// Show the player's world cup results
function showGroupFinal(cupRound) {
	//////console.log("cupRound1",cupRound)
	if (cupRound > 2) orderGroups();
	
	$('#groupFinalResult').html("");
	
	var str = "";

	var groupName = "";
	var groupName2 = "";
	
	for (var i = 0; i < 8; i++) {
		
		switch(i){
			case 0:
				groupName = "groupA";
				groupName2 = "A";
				break;	
			case 1:
				groupName = "groupB";
				groupName2 = "B";
				break;
			case 2:
				groupName = "groupC";
				groupName2 = "C";
				break;
			case 3:
				groupName = "groupD";
				groupName2 = "D";
				break;
			case 4:
				groupName = "groupE";
				groupName2 = "E";
				break;	
			case 5:
				groupName = "groupF";
				groupName2 = "F";
				break;
			case 6:
				groupName = "groupG";
				groupName2 = "G";
				break;
			case 7:
				groupName = "groupH";
				groupName2 = "H";
				break;
		}
		
		var str2 = "<div class=\"groupFinal1\"><div class=\"tableBGFinal\">";
		str2 += "<div class=\"resultFinalGroup\">Group"+ groupName2 + "</div><div class=\"result0Final\">"+eval(groupName)[0][0]+"</div><div class=\"result1Final\">"+eval(groupName)[0][1]+"</div><div class=\"result2Final\">"+eval(groupName)[0][2]+"</div><div class=\"result3Final\">"+eval(groupName)[0][3]+"</div><br><div class=\"result0Final\">"+eval(groupName)[1][0]+"</div><div class=\"result1Final\">"+eval(groupName)[1][1]+"</div><div class=\"result2Final\">"+eval(groupName)[1][2]+"</div><div class=\"result3Final\">"+eval(groupName)[1][3]+"</div><br><div class=\"result0Final\">"+eval(groupName)[2][0]+"</div><div class=\"result1Final\">"+eval(groupName)[2][1]+"</div><div class=\"result2Final\">"+eval(groupName)[2][2]+"</div><div class=\"result3Final\">"+eval(groupName)[2][3]+"</div><br><div class=\"result0Final\">"+eval(groupName)[3][0]+"</div><div class=\"result1Final\">"+eval(groupName)[3][1]+"</div><div class=\"result2Final\">"+eval(groupName)[3][2]+"</div><div class=\"result3Final\">"+eval(groupName)[3][3]+"</div></div></div><img src=\"img/1x1.png\" width=\"100%\" height=\"0.5em\">";
		
		
		
		str += str2 + "";
		
		
	}
	
	str += "";
	
	$('#groupFinalResult').html(str);
	
} 

function scheduleFill(){
	
		$('#match49AText').html(r4Teams[0]);
		$('#match49BText').html(r4Teams[1]);
		$('#match50AText').html(r4Teams[2]);
		$('#match50BText').html(r4Teams[3]);
		$('#match51AText').html(r4Teams[8]);
		$('#match51BText').html(r4Teams[9]);
		$('#match52AText').html(r4Teams[10]);
		$('#match52BText').html(r4Teams[11]);
		$('#match53AText').html(r4Teams[4]);
		$('#match53BText').html(r4Teams[5]);
		$('#match54AText').html(r4Teams[6]);
		$('#match54BText').html(r4Teams[7]);
		$('#match55AText').html(r4Teams[12]);
		$('#match55BText').html(r4Teams[13]);
		$('#match56AText').html(r4Teams[14]);
		$('#match56BText').html(r4Teams[15]);
		$('#match57AText').html(r5Teams[0]);
		$('#match57BText').html(r5Teams[1]);
		$('#match58AText').html(r5Teams[2]);
		$('#match58BText').html(r5Teams[3]);
		$('#match59AText').html(r5Teams[4]);
		$('#match59BText').html(r5Teams[5]);
		$('#match60AText').html(r5Teams[6]);
		$('#match60BText').html(r5Teams[7]);
		$('#match61AText').html(r6Teams[0]);
		$('#match61BText').html(r6Teams[1]);
		$('#match62AText').html(r6Teams[2]);
		$('#match62BText').html(r6Teams[3]);
		$('#match63AText').html(r7Teams[1]);
		$('#match63BText').html(r7Teams[2]);
		$('#match64AText').html(r7Teams[3]);
		$('#match64BText').html(r7Teams[4]);
		

}

function round4Matches(team1,team2,point1,point2){
	console.log("round4Matches",team1,team2,point1,point2,playersTeam)
	var matchlist = "";
			
	matchPlay = generateMatch2(r4Teams[0],r4Teams[1]);
	if (matchPlay.indexOf(playersTeam) == -1) {
		matchlist += matchPlay[0] + "<br>";
		r5Teams[0] = matchPlay[1];
	} else {
		matchlist += team1 + "-" + team2 + "  " + point1+":"+point2 + "<br>";
		if (Number(point1)<Number(point2)) {
			r5Teams[0] = playersTeam;
		} else {
			r5Teams[0] = team1; 
			loadLoserPage();
		}
	}
			
	matchPlay = generateMatch2(r4Teams[2],r4Teams[3]);
	if (matchPlay.indexOf(playersTeam) == -1) {
		matchlist += matchPlay[0] + "<br>";
		r5Teams[1] = matchPlay[1];
	} else {
		matchlist += team1 + "-" + team2 + "  " + point1+":"+point2 + "<br>";
		if (Number(point1)<Number(point2)) {
			r5Teams[1] = playersTeam;
		} else {
			r5Teams[1] = team1; 
			loadLoserPage();
		}
	}
			
	matchPlay = generateMatch2(r4Teams[4],r4Teams[5]);
	if (matchPlay.indexOf(playersTeam) == -1) {
		matchlist += matchPlay[0] + "<br>";
		r5Teams[2] = matchPlay[1];
	} else {
		matchlist += team1 + "-" + team2 + "  " + point1+":"+point2 + "<br>";
		if (Number(point1)<Number(point2)) {
			r5Teams[2] = playersTeam;
		} else {
			r5Teams[2] = team1; 
			loadLoserPage();
		}
	}
			
	matchPlay = generateMatch2(r4Teams[6],r4Teams[7]);
	if (matchPlay.indexOf(playersTeam) == -1) {
		matchlist += matchPlay[0] + "<br>";
		r5Teams[3] = matchPlay[1];
	} else {
		matchlist += team1 + "-" + team2 + "  " + point1+":"+point2 + "<br>";
		if (Number(point1)<Number(point2)) {
			r5Teams[3] = playersTeam;
		} else {
			r5Teams[3] = team1; 
			loadLoserPage();
		}
	}
			
	matchPlay = generateMatch2(r4Teams[8],r4Teams[9]);
	if (matchPlay.indexOf(playersTeam) == -1) {
		matchlist += matchPlay[0] + "<br>";
		r5Teams[4] = matchPlay[1];
	} else {
		matchlist += team1 + "-" + team2 + "  " + point1+":"+point2 + "<br>";
		if (Number(point1)<Number(point2)) {
			r5Teams[4] = playersTeam;
		} else {
			r5Teams[4] = team1; 
			loadLoserPage();
		}
	}
			
	matchPlay = generateMatch2(r4Teams[10],r4Teams[11]);
	if (matchPlay.indexOf(playersTeam) == -1) {
		matchlist += matchPlay[0] + "<br>";
		r5Teams[5] = matchPlay[1];
	} else {
		matchlist += team1 + "-" + team2 + "  " + point1+":"+point2 + "<br>";
		if (Number(point1)<Number(point2)) {
			r5Teams[5] = playersTeam;
		} else {
			r5Teams[5] = team1; 
			loadLoserPage();
		}
	}
			
	matchPlay = generateMatch2(r4Teams[12],r4Teams[13]);
	console.log("r5Teams[6]",matchPlay[0],matchPlay[0].indexOf(playersTeam))
	if (matchPlay[0].indexOf(playersTeam) == -1) {
		matchlist += matchPlay[0] + "<br>";
		r5Teams[6] = matchPlay[1];
	} else {
		console.log("r5Teams[6] else",matchPlay.indexOf(playersTeam))
		matchlist += team1 + "-" + team2 + "  " + point1+":"+point2 + "<br>";
		if (Number(point1)<Number(point2)) {
			r5Teams[6] = playersTeam;
		} else {
			r5Teams[6] = team1; 
			loadLoserPage();
		}
		
	}
			
	matchPlay = generateMatch2(r4Teams[14],r4Teams[15]);
	if (matchPlay.indexOf(playersTeam) == -1) {
		matchlist += matchPlay[0] + "<br>";
		r5Teams[7] = matchPlay[1];
	} else {
		matchlist += team1 + "-" + team2 + "  " + point1+":"+point2 + "<br>";
		if (Number(point1)<Number(point2)) {
			r5Teams[7] = playersTeam;
		} else {
			r5Teams[7] = team1; 
			loadLoserPage();
		}
	}
	
	console.log("round4Matches",r5Teams)
	console.log("round4Matches",matchlist)
	return matchlist;
}

function round5Matches(team1,team2,point1,point2){
	var matchlist = "";
	
	matchPlay = generateMatch2(r4Teams[0],r4Teams[1]);
	console.log("round5Matches0",matchPlay[0]);
	if (matchPlay.indexOf(playersTeam) == -1) {
		matchlist += matchPlay[0] + "<br>";
		r6Teams[0] = matchPlay[1];
	} else {
		matchlist += team1 + "-" + team2 + "  " + point1+":"+point2 + "<br>";
		if (Number(point1)<Number(point2)) {
			r6Teams[0] = playersTeam;
		} else {
			r6Teams[0] = team1; 
			loadLoserPage();
		}
	}
			
	matchPlay = generateMatch2(r5Teams[2],r5Teams[3]);
	console.log("round5Matches1",matchPlay[0]);
	if (matchPlay.indexOf(playersTeam) == -1) {
		matchlist += matchPlay[0] + "<br>";
		r6Teams[1] = matchPlay[1];
	} else {
		matchlist += team1 + "-" + team2 + "  " + point1+":"+point2 + "<br>";
		if (Number(point1)<Number(point2)) {
			r6Teams[1] = playersTeam;
		} else {
			r6Teams[1] = team1; 
			loadLoserPage();
		}
	}
			
	matchPlay = generateMatch2(r5Teams[4],r5Teams[5]);
	console.log("round5Matches2",matchPlay[0]);
	if (matchPlay.indexOf(playersTeam) == -1) {
		matchlist += matchPlay[0] + "<br>";
		r6Teams[2] = matchPlay[1];
	} else {
		matchlist += team1 + "-" + team2 + "  " + point1+":"+point2 + "<br>";
		if (Number(point1)<Number(point2)) {
			r6Teams[2] = playersTeam;
		} else {
			r6Teams[2] = team1; 
			loadLoserPage();
		}
	}
			
	matchPlay = generateMatch2(r5Teams[6],r5Teams[7]);
	console.log("round5Matches3",matchPlay[0]);
	if (matchPlay.indexOf(playersTeam) == -1) {
		matchlist += matchPlay[0] + "<br>";
		r6Teams[3] = matchPlay[1];
		console.log("round5Matches3 if ",r6Teams[3]);
	} else {
		console.log("round5Matches3 else ",matchPlay[0]);
		matchlist += team1 + "-" + team2 + "  " + point1+":"+point2 + "<br>";
		if (Number(point1)<Number(point2)) {
			r6Teams[3] = playersTeam;
		} else {
			r6Teams[3] = team1; 
			loadLoserPage();
		}
	}
	
	console.log("round5Matches",r6Teams)
	console.log("round5Matches",matchlist)
	return matchlist;
}

function round6Matches(team1,team2,point1,point2){
	var matchlist = "";
	
	matchPlay = generateMatch2(r6Teams[0],r6Teams[1]);
	console.log("round6Matches0",matchPlay[0]);
	if (matchPlay.indexOf(playersTeam) == -1) {
		matchlist += matchPlay[0] + "<br>";
		r7Teams[0] = matchPlay[1];
		r7Teams[2] = matchPlay[2];
	} else {
		if (Number(point1)<Number(point2)) {
			r7Teams[0] = playersTeam;
			r7Teams[2] = team1;
		} else {
			r7Teams[0] = team1; 
			r7Teams[2] = playersTeam;
			loadLoserPage();
		}
	}
			
	matchPlay = generateMatch2(r6Teams[2],r6Teams[3]);
	console.log("round6Matches1",matchPlay[0]);
	if (matchPlay.indexOf(playersTeam) == -1) {
		matchlist += matchPlay[0] + "<br>";
		r7Teams[1] = matchPlay[1];
		r7Teams[3] = matchPlay[2];
	} else {
		if (Number(point1)<Number(point2)) {
			r7Teams[1] = playersTeam;
			r7Teams[3] = team1;
		} else {
			r7Teams[1] = team1; 
			r7Teams[3] = playersTeam;
			loadLoserPage();
		}
	}
	
	console.log("round7Matches",r7Teams)
	console.log("round7Matches",matchlist)
	return matchlist;
}

function round7Matches(team1,team2,point1,point2){
	var matchlist = "";
	
	matchPlay = generateMatch2(r7Teams[0],r7Teams[1]);
	console.log("round7Matches0",matchPlay[0]);
	winnerTeam = matchPlay[1];
	if (r7Teams[0] == winnerTeam) secondTeam = r7Teams[1];
	else secondTeam = r7Teams[0];
	
			
	matchPlay = generateMatch2(r7Teams[2],r7Teams[3]);
	console.log("round7Matches1",matchPlay[0]);
	thirdTeam = matchPlay[1];
	if (r7Teams[2] == thirdTeam) fourthTeam = r7Teams[3];
	else fourthTeam = r7Teams[2];
	
	console.log("round7Matches",matchlist)
	
	if (winnerTeam == playersTeam) loadWinnerPage();
	else loadLoserPage();
	
	return matchlist;
}