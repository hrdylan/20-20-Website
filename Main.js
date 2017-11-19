
document.addEventListener('DOMContentLoaded', init, false);

function init(){
	/*
	var letters = document.getElementsByClassName('letter');
	for (var i = 0; i < letters.length; i++) {
		letters[i].addEventListener('mouseover', function() {fadeIn(letters[i]);}, false);
		letters[i].addEventListener('mouseout', function() {fadeOut(letters[i];}, false);
	}
	*/

	

	var letter1 = document.getElementById('letter1');
	var letter2 = document.getElementById('letter2');
	var letter4 = document.getElementById('letter4');
	var letter5 = document.getElementById('letter5');
	letter1.addEventListener('mouseover', function() {fadeIn(letter1);}, false);
	letter1.addEventListener('mouseout', function() {fadeOut(letter1);}, false);

	letter2.addEventListener('mouseover', function() {fadeIn(letter2);}, false);
	letter2.addEventListener('mouseout', function() {fadeOut(letter2);}, false);

	letter4.addEventListener('mouseover', function() {fadeIn(letter4);}, false);
	letter4.addEventListener('mouseout', function() {fadeOut(letter4);}, false);

	letter5.addEventListener('mouseover', function() {fadeIn(letter5);}, false);
	letter5.addEventListener('mouseout', function() {fadeOut(letter5);}, false);
	

	function fadeIn(letter){
		var elems = letter.querySelectorAll(".dropdown")
		for (var i = 0; i < elems.length; i++) {
			elems[i].style.opacity = 1;
		}

	}
	function fadeOut(letter){
		var elems = letter.querySelectorAll(".dropdown")
		for (var i = 0; i < elems.length; i++) {
			elems[i].style.opacity = 0;
		}

	}
	function getRandomFloat(min, max) {
  		return Math.random() * (max - min) + min;
	}
	/*init array for handling img animation*/
	var imgHandler = new Array(16);
	for (var i = 0; i < imgHandler.length; i++) {
		var elem = document.getElementById("img" + i);
		imgHandler[i] = [elem, 500,500,getRandomFloat(-1,1),getRandomFloat(-1,1), 0];
		

	}
	

	
	
	var w = window.innerWidth;
	var h = window.innerHeight;
	var img = document.getElementById('img');
	
	
	setInterval(draw, 10);



	function draw(speedX, speedY) {
		for (var i = 0; i < imgHandler.length; i++) {
			
			if (imgHandler[0][1] > w || imgHandler[i][2] > h){
				imgHandler[i][1] = 500;
				imgHandler[i][2] = 500;
			}
			if (imgHandler[i][5] == 360){
				imgHandler[i][5] = 0;
			}

			imgHandler[i][1] += imgHandler[i][3];
			imgHandler[i][2] += imgHandler[i][4];
			imgHandler[i][5] += 1;
			
			imgHandler[i][0].style.left = imgHandler[i][1] + "px";
			imgHandler[i][0].style.top = imgHandler[i][2] + "px";



			imgHandler[i][0].style.transform = "rotate(" + imgHandler[i][5] + "deg)";

			console.log(imgHandler[i]);


		}
	
	}
	
	
	
	
  
}

