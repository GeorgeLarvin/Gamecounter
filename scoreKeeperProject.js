var playerOne = document.querySelector("#playerOne");
var playerTwo = document.querySelector("#playerTwo");
var Reset = document.querySelector("#reset");
var max = document.querySelector("#max");
var score = document.querySelector("#score");
var maxNumber = document.querySelector("#maxNumber");
var p1Score = document.querySelector("#p1Score");
var p2Score = document.querySelector("#p2Score");

var p1Tally = 0
var p2Tally = 0

var number = Number(maxNumber.value);
var gameOver = false;

playerOne.addEventListener("click", function(){
	if(!gameOver){	
		p1Tally ++;
		if(p1Tally === number){
			p1Score.style.color = "green";
			p2Score.style.color = "red";
			gameOver = true;
		}
		p1Score.textContent = p1Tally;
	};
});


playerTwo.addEventListener("click", function(){
	if(!gameOver){
		p2Tally ++;
		if(p2Tally === number){
			p1Score.style.color = "red";
			p2Score.style.color = "green";
			gameOver = true;
		}
	}
		p2Score.textContent = p2Tally;
});

	
Reset.addEventListener("click", function(){
	resetGame();
});

maxNumber.addEventListener("change", function(){
		max.textContent = "playing to: " + maxNumber.value;
		number = Number(maxNumber.value);
		resetGame();
});


//functions 
function resetGame(){
		p1Tally = 0;
		p2Tally = 0;
		p1Score.textContent = p1Tally;
		p2Score.textContent = p2Tally;
		p1Score.style.color = "black";
		p2Score.style.color = "black";
		gameOver = !gameOver;
}





