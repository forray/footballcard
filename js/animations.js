var fightAnimTime = 300;
var fight1NUM1 = 0;
var fight1NUM2 = 0;
var fight2NUM1 = 0;
var fight2NUM2 = 0;
var fight3NUM1 = 0;
var fight3NUM2 = 0;
var fight4NUM1 = 0;
var fight4NUM2 = 0;
var fight5NUM1 = 0;
var fight5NUM2 = 0;
var img1url = "" ;
var img2url = "" ;
var player1name = "" ;
var player2name = "" ;
var mainAnimEmpty = true;

function fightAnim(f11,f12,f21,f22,f31,f32,f41,f42,player1,player2,img1,img2){
	
	//console.log("fightAnim",f11,f12,f21,f22,f31,f32,f41,f42);
	
	fight1NUM1 = Number(f11);
	fight1NUM2 = Number(f12);
	fight2NUM1 = Number(f21);
	fight2NUM2 = Number(f22);
	fight3NUM1 = Number(f41);
	fight3NUM2 = Number(f42);
	fight4NUM1 = Number(f41);
	fight4NUM2 = Number(f42);
	img1url = img1;
	img2url = img2;
	player1name = player1;
	player2name = player2;
	
	$('#fight1rec').hide();
	$('#fight2rec').hide();
	$('#fight3rec').hide();
	$('#fight4rec').hide();
	$('#fight5rec').hide();
	
	
	var img1Div = '<img src="img/loser.png"><br><img src="'+img1url+'" class="fightPlayer1img"><div id="player1BlackOverlay" class="cardBlackOverlay">' + player1name + '</div>';
	$(fightPlayerImage1).html(img1Div);
	
	var img2Div = '<img src="img/loser.png"><br><img src="'+img2url+'" class="fightPlayer1img"><div id="player1BlackOverlay" class="cardBlackOverlay">' + player2name + '</div>';
	$(fightPlayerImage2).html(img2Div);
	
	fight5NUM1 = fight1NUM1 + fight2NUM1 + fight4NUM1;
	fight5NUM2 = fight1NUM2 + fight2NUM2 + fight4NUM2;
	
	setTimeout(function() { 
       fightAnim1();
	}, 100);
	
	beforeFight();
}

function beforeFight(){ 
	$(fightPlayerImage1).removeClass("animated tada");
	$(fightPlayerImage2).removeClass("animated tada");
	
	$(fight1Num1).removeClass("fightLoserNum");
	$(fight1Num1).removeClass("fightWinnerNum animatedFast tada");
	$(fight1Num2).removeClass("fightLoserNum");
	$(fight1Num2).removeClass("fightWinnerNum animatedFast tada");
	$(fight1LeftDiv).removeClass("fightWinnerRight animated pulse");
	$(fight1LeftDiv).removeClass("fightLoserLeft");
	$(fight1RightDiv).removeClass("fightWinnerLeft animated pulse");
	$(fight1RightDiv).removeClass("fightLoserRight");
	
	$(fight2Num1).removeClass("fightLoserNum");
	$(fight2Num1).removeClass("fightWinnerNum animatedFast tada");
	$(fight2Num2).removeClass("fightLoserNum");
	$(fight2Num2).removeClass("fightWinnerNum animatedFast tada");
	$(fight2LeftDiv).removeClass("fightWinnerRight animated pulse");
	$(fight2LeftDiv).removeClass("fightLoserLeft");
	$(fight2RightDiv).removeClass("fightWinnerLeft animated pulse");
	$(fight2RightDiv).removeClass("fightLoserRight");
	
	$(fight3Num1).removeClass("fightLoserNum");
	$(fight3Num1).removeClass("fightWinnerNum animatedFast tada");
	$(fight3Num2).removeClass("fightLoserNum");
	$(fight3Num2).removeClass("fightWinnerNum animatedFast tada");
	$(fight3LeftDiv).removeClass("fightWinnerRight animated pulse");
	$(fight3LeftDiv).removeClass("fightLoserLeft");
	$(fight3RightDiv).removeClass("fightWinnerLeft animated pulse");
	$(fight3RightDiv).removeClass("fightLoserRight");
	
	$(fight5Num1).removeClass("fightLoserNum");
	$(fight5Num1).removeClass("fightWinnerNum animatedFast tada");
	$(fight5Num2).removeClass("fightLoserNum");
	$(fight5Num2).removeClass("fightWinnerNum animatedFast tada");
	$(fight5LeftDiv).removeClass("fightSumWinnerRight animated pulse");
	$(fight5LeftDiv).removeClass("fightSumLoserLeft");
	$(fight5RightDiv).removeClass("fightSumWinnerLeft animated pulse");
	$(fight5RightDiv).removeClass("fightSumLoserRight");
	
	$(fightPlayerImage1).removeClass(" animated tada");
	$(fightPlayerImage2).removeClass(" animated tada");

}


function fightAnim1(){
	
	$(fight1rec).show();
	$(fight1Num1).html(fight1NUM1);
	$(fight1Num2).html(fight1NUM2);
	$(fight1Name).html("ATTACK");
	
	var divPos = whoIsWinner(fight1NUM1,fight1NUM2);
	
	if(divPos == 1) {
		$(fight1LeftDiv).addClass("fightWinnerLeft animated pulse");
		$(fight1RightDiv).addClass("fightLoserRight");
		$(fight1Num1).addClass("fightWinnerNum animatedFast tada");
		$(fight1Num2).addClass("fightLoserNum");
	}
	else {
		$(fight1LeftDiv).addClass("fightLoserLeft");
		$(fight1RightDiv).addClass("fightWinnerRight animated pulse");
		$(fight1Num1).addClass("fightLoserNum");
		$(fight1Num2).addClass("fightWinnerNum animatedFast tada");
	}
	setTimeout(function() { 
        fightAnim2();
	}, fightAnimTime);
}  
 
function fightAnim2(){
	
	$(fight2rec).show();
	$(fight2Num1).html(fight2NUM1);
	$(fight2Num2).html(fight2NUM2);
	$(fight2Name).html("DEFENSE");
	
	var divPos = whoIsWinner(fight2NUM1,fight2NUM2);
	
	if(divPos == 1) {
		$(fight2LeftDiv).addClass("fightWinnerLeft animated pulse");
		$(fight2RightDiv).addClass("fightLoserRight");
		$(fight2Num1).addClass("fightWinnerNum animatedFast tada");
		$(fight2Num2).addClass("fightLoserNum");
	}
	else {
		$(fight2LeftDiv).addClass("fightLoserLeft");
		$(fight2RightDiv).addClass("fightWinnerRight animated pulse");
		$(fight2Num1).addClass("fightLoserNum");
		$(fight2Num2).addClass("fightWinnerNum animatedFast tada");
	}
	
	setTimeout(function() { 
        fightAnim3();
	}, fightAnimTime);
}

function fightAnim3(){
	
	$(fight3rec).show();
	$(fight3Num1).html(fight3NUM1);
	$(fight3Num2).html(fight3NUM2);
	$(fight3Name).html("SPEED");
	
	var divPos = whoIsWinner(fight3NUM1,fight3NUM2);
	
	if(divPos == "1") {
		$(fight3LeftDiv).addClass("fightWinnerLeft animated pulse");
		$(fight3RightDiv).addClass("fightLoserRight");
		$(fight3Num1).addClass("fightWinnerNum animatedFast tada");
		$(fight3Num2).addClass("fightLoserNum");
	}
	else {
		$(fight3LeftDiv).addClass("fightLoserLeft");
		$(fight3RightDiv).addClass("fightWinnerRight animated pulse");
		$(fight3Num1).addClass("fightLoserNum");
		$(fight3Num2).addClass("fightWinnerNum animatedFast tada");
	}
	
	setTimeout(function() { 
        fightAnim4();
	}, fightAnimTime);
}

function fightAnim4(){
	
	$(fight5rec).show();
	$(fight5Num1).html(fight5NUM1);
	$(fight5Num2).html(fight5NUM2);
	$(fightSumName).html("SUM");
	
	var divPos = whoIsWinner(fight5NUM1,fight5NUM2);
	
	if(divPos == "1") {
		$(fight5LeftDiv).addClass("fightSumWinnerLeft animated pulse");
		$(fight5RightDiv).addClass("fightSumLoserRight");
		$(fight5Num1).addClass("fightWinnerNum");
		$(fight5Num2).addClass("fightLoserNum");
	}
	else {
		$(fight5LeftDiv).addClass("fightSumLoserLeft");
		$(fight5RightDiv).addClass("fightSumWinnerRight animated pulse");
		$(fight5Num1).addClass("fightLoserNum");
		$(fight5Num2).addClass("fightWinnerNum");
	}
	
	/*$(fight5LeftDiv).addClass("fightSumLoserLeft");
	$(fight5RightDiv).addClass("fightSumLoserRight");
	$(fight5Num1).addClass("fightLoserNum");
	$(fight5Num2).addClass("fightLoserNum");*/
	
	setTimeout(function() { 
        fightAnim6(divPos);
	}, fightAnimTime);
}

function fightAnim6(divPos){
	//console.log("fightAnim6 Winner",divPos);
	
	if(divPos == "1") {
		var html1 = '<img src="img/winner.png"  width="155px"><br><img src="' + img1url + '" class="fightWinnerImage"><div id="player1BlackOverlay" class="cardBlackOverlay">' + player1name + '</div>';
		$(fightPlayerImage1).html(html1);
		$(fightPlayerImage1).addClass(" animated tada");
		
		var html2 = '<img src="img/loser.png"><br><img src="' + img2url + '" class="fightLoserImage">';
		$(fightPlayerImage2).html(html2);
		$(fightPlayerImage2).css('z-index','-1');
	} else {
		
		var html1 = '<img src="img/loser.png"><br><img src="' + img1url + '" class="fightLoserImage">';
		$(fightPlayerImage1).html(html1);
		$(fightPlayerImage1).css('z-index','-1');
		
		var html2 = '<img src="img/winner.png"  width="155px"><br><img src="' + img2url + '" class="fightWinnerImage"><div id="player1BlackOverlay" class="cardBlackOverlay">' + player2name + '</div>';
		$(fightPlayerImage2).html(html2);
		$(fightPlayerImage2).addClass(" animated tada");
	
	}

}

function whoIsWinner(nmb1,nmb2){

	if (nmb1 == nmb2){ 
		var div = Math.random() < 0.5 ? 1 : 2;
		////console.log("whoIsWinner random",div)
	} else if (nmb1 > nmb2) { 
		var div = 1;
		////console.log("whoIsWinner nmb1 > nmb2",nmb1,nmb2)
	} else if (nmb1 < nmb2){ 
		var div = 2;
		////console.log("whoIsWinner nmb1 < nmb2",nmb1,nmb2)
	}
	////console.log("whoIsWinner",nmb1,nmb2,div)
	return div;
} 

function clickAnim(str){
	////console.log("clickAnim",str);
	$(str).addClass("animatedFast flipInY");
	
	setTimeout(function() { 
       $(str).removeClass("animatedFast flipInY");
	}, 1000);
}

function clickAnim_bounceOut(str){
	////console.log("clickAnim",str);
	$(str).addClass("animated bounceOut");
	
	setTimeout(function() { 
       $(str).removeClass("animated bounceOut");
	}, 1000);
}

function clickAnimReplace(str){
	////console.log("clickAnimReplace",str);
	$(str).addClass("animatedFast flipInY");
	
	var urlAbsolute1 = "img/grund.png";
	var urlAbsolute2 = "img/grund2.png";
	if (mainAnimEmpty) $(str).attr("src", urlAbsolute1);
	else $(str).attr("src", urlAbsolute2);
	mainAnimEmpty = ! mainAnimEmpty;
	//var oldSrc = 'img/grund2.png';
	//var newSrc = 'img/grund.png';
	//$('img[src="' + oldSrc + '"]').attr('src', newSrc);
	//$(str).addClass("animatedFast flipInY");
	
	setTimeout(function() { 
       $(str).removeClass("animatedFast flipInY");
	}, 1000);
	
}

function startAnimation() {
	var urlAbsolute2 = "img/grund2.png";
	var urlAbsolute3 = "img/grund3.png";
	var urlAbsolute4 = "img/grund4.png";
	var urlAbsolute5 = "img/grund5.png";
	
	var randomnumber=Math.ceil(Math.random()*4);
	
	switch(randomnumber) {
		case 1:
			$('#grund').attr("src", urlAbsolute2);	
			break;
		case 2:
			$('#grund').attr("src", urlAbsolute3);	
			break;
		case 3:
			$('#grund').attr("src", urlAbsolute4);	
			break;
		case 4:
			$('#grund').attr("src", urlAbsolute5);	
			break;
	}
	//console.log("startAnimation",randomnumber)
	$('#grund').addClass("animatedFast flipInY");
	
	setTimeout(function() { 
       startAnimation2();
	}, 1000);
	
}

function startAnimation2() {	
	$('#grund').removeClass("animatedFast flipInY");	
	setTimeout(function() { 
       if (startAnimShow) startAnimation();
	}, 5000);
}

var menuAnimTime = 200;

function menuShowAnim() {
	$('#menu1').fadeIn();
	$('#menu1').addClass("animatedFast fadeInDown");
	setTimeout(function() { 
       menuShowAnim3();
	}, menuAnimTime);
}

function menuShowAnim3() {
	$('#menu2').fadeIn();
	$('#menu2').addClass("animatedFast fadeInDown");
	setTimeout(function() { 
       menuShowAnim4();
	}, menuAnimTime);
}

function menuShowAnim4() {
	$('#menu3').fadeIn();
	$('#menu3').addClass("animatedFast fadeInDown");
	setTimeout(function() { 
       menuShowAnim5();
	}, menuAnimTime);
}

function menuShowAnim5() {
	$('#menu4').fadeIn();
	$('#menu4').addClass("animatedFast fadeInDown");
}
