


document.addEventListener('DOMContentLoaded', init, false);

function init(){
	/*
	var letters = document.getElementsByClassName('letter');
	for (var i = 0; i < letters.length; i++) {
		letters[i].addEventListener('mouseover', function() {fadeIn(letters[i]);}, false);
		letters[i].addEventListener('mouseout', function() {fadeOut(letters[i];}, false);
	}
	*/


	
	/*menu animation for title, in conjuction with css3 properties*/
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
	
	/*window dimesion constants used by draw()*/
	var w = window.innerWidth;
	var h = window.innerHeight;

	/*page color*/
	var pageColor = "red";

	/*wether animation is active*/
	var DRAWING = true

	/*create list to keep track of dynamicaly created page elements. Used like stack. 
	NOTE: This does not include the main page. Its elements are located in main.html.*/
	var currPageElements = [];

	/*scroll reveal setup*/
	window.sr = ScrollReveal({reset: true});

	/*functions for menu animations*/
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

	/*randomization for title animations*/
	function getRandomFloat(min, max) {
  		return Math.random() * (max - min) + min;
	}

	function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
	}


	function draw() {
		/*draws a title animation onto the screen with the imgHandler*/
		for (var i = 0; i < imgHandler.length; i++) {
			
			if (imgHandler[i][1] > w || imgHandler[i][2] > h){
				imgHandler[i][1] = 550;
				imgHandler[i][2] = 250;
			}
			if (imgHandler[i][5] == 360){
				imgHandler[i][5] = 0;
			}

			/*change x and y pos*/
			imgHandler[i][1] += imgHandler[i][3];
			imgHandler[i][2] += imgHandler[i][4];
			imgHandler[i][5] += 1;
			
			/*change the actaul css properties of the element accordingly*/
			imgHandler[i][0].style.left = imgHandler[i][1] + "px";
			imgHandler[i][0].style.top = imgHandler[i][2] + "px";


			/*rotation*/
			imgHandler[i][0].style.transform = "rotate(" + imgHandler[i][5] + "deg)";
			imgHandler[i][0].style.transform = "translate(0,0)";
			
			

			


		}
	
	}

	function checkDraw(){
		console.log(DRAWING); 
		if (DRAWING){
			draw();
		}
	}
	/*init array for handling music note animation*/
	var imgHandler = new Array(16);
	for (var i = 0; i < imgHandler.length; i++) {
		var elem = document.getElementById("img" + i);
		elem.style.width = "20px";
		imgHandler[i] = [elem, 550,250,getRandomFloat(-1,1),getRandomFloat(-1,1), 0];

		

	}


	/*TODO: what is this?*/
	var img = document.getElementById('img');
	
	/*create var to store the title animation interval*/
	var checkDraw = setInterval(checkDraw, 10);


	/* create listeners for animation to "about" page*/
	var about = document.getElementById("about"); 
	about.addEventListener("click", toAbout);


	/*animations to and from photo page*/
	var photo = document.getElementById("photo"); 
	photo.addEventListener("click", toPhoto);

	/*animation to schedule page*/
	var photo = document.getElementById("schedule"); 
	photo.addEventListener("click", toSchedule);

	function toAbout() {
		leaveHome();
	}

	function leaveHome() {
		/*move main title*/
		var center = document.getElementById("title-main");
		var elements = center.querySelectorAll(".letter");
		var dist = -300;
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.transform= "translate(0," + dist + "vh)";
			dist +=50;
		}

		/*move and shut down music notes animations*/
		DRAWING = false;
		for (var i = 0; i < imgHandler.length; i++) {
			var randX = getRandomArbitrary(-200, -100);
			imgHandler[i][0].style.transform = "translate(" + randX + "vw," + " 0)";
		}
		/*create back arrow*/
		var arrow = document.createElement('img');
		document.body.appendChild(arrow);
		arrow.addEventListener('click',returnToHome)
		arrow.setAttribute('src', "arrow-right_white.png");
		arrow.style.position = "absolute";
		arrow.style.top = "2vh";
		arrow.style.left =  "0";
		arrow.style.width ="7vw";
		arrow.style.opacity = 1;

		currPageElements.push(arrow);

	}

	function returnToHome() {

			function changeColor(){
			var r = 0;
			var html = document.getElementsByTagName("HTML")[0];
			var body = document.getElementsByTagName("BODY")[0];
			var timer = setInterval(function(){
				if (r >= 128){
					clearInterval(timer);
				}
				body.style.backgroundColor = "rgb("+r+",0,0)";
				html.style.backgroundColor = "rgb("+r+",0,0)";
				r++;
				


				}, 10);
			}

			if (pageColor == "black"){
				
				changeColor();
			}

			/*delete all the elements of the current page*/

			while (currPageElements.length > 0){
				for (var i = 0; i < currPageElements.length; i++) {
					elem = currPageElements.pop()
					elem.remove();
				
				}
			}

			/*move title animations*/
			var center = document.getElementById("title-main");
			var elements = center.querySelectorAll(".letter");
			var dist = 300;
			for (var i = 0; i < elements.length; i++) {
				elements[i].style.transform = "translate(0,0)";
				dist -=50;
			}
			
			


			
			
			var restartDraw = setTimeout(function(){
			DRAWING = true;

			for (var i = 0; i < imgHandler.length; i++) {
				var elem = document.getElementById("img" + i);
				elem.style.width = "20px";
				imgHandler[i] = [elem, 550,250,getRandomFloat(-1,1),getRandomFloat(-1,1), 0];

			}

			}, 10);
			

			

		}


	function toPhoto() {

		function changeBackGroundColor(){
			var r = 128;
			var html = document.getElementsByTagName("HTML")[0];
			var body = document.getElementsByTagName("BODY")[0];
			var timer = setInterval(function(){
				if (r <= 0){
					clearInterval(timer);
				}
				body.style.backgroundColor = "rgb("+r+",0,0)";
				html.style.backgroundColor = "rgb("+r+",0,0)";
				r--;
				


			}, 10);
		}

		leaveHome();


		
		/*create letters*/
		var letters = new Array(7);
		var gallery_chars = ["G", "A", "L", "L", "E", "R", "Y"];
		for (var i = 0; i < letters.length; i++) {
			letters[i] = document.createElement('div');
			document.body.appendChild(letters[i]);
			letters[i].innerHTML = gallery_chars[i];
			letters[i].className = "photoLetter";
			var left = (i*14)
			var top = (i * 300)
			letters[i].style.left = left + 2+ "vw";
			letters[i].style.top = -top + -100 + "vh";
			currPageElements.push(letters[i]);
		}
		/*change top css style of letters to move them via transition to the center of the screen*/
		var moveGalleryTitle = setTimeout(function(){
			

			for (var i = 0; i < letters.length; i++) {
				letters[i].style.top = "20.5vh";

			}
			

			}, 300);

		/*use scrollReveal to style the title AFTER it moves into position*/
		var moveGalleryTitle = setTimeout(function(){
			sr.reveal(".photoLetter");

			}, 3000);



		/*create and load photos onto DOM*/
		for (var i = 0; i < 12; i++) {
			photo = document.createElement('img');
			photo.setAttribute('src', "gallery_sample.jpg");
			if (i%2 == 0){
				photo.style.marginLeft = "5vw";
			}
			document.body.appendChild(photo);
			photo.className = "galleryPhoto";

		} 
		sr.reveal('.galleryPhoto');
		/*change global page color to black*/
		pageColor = "black";
		/*use function to change color*/
		changeBackGroundColor();

		
		
		


	}

	function toSchedule(){
		leaveHome();
	}
	
	
	
	
  
}

