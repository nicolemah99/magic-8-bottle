document.addEventListener("DOMContentLoaded", function () {
	fetch("https://cdn.jsdelivr.net/gh/nicolemah99/magic-8-bottle/testData.json")
		.then((response) => response.json())
		.then((data) => console.log(data));
});

function startGame() {
	const startButton = document.getElementById("StartButton");
	startButton.style.display = "none";
	nextQuestion(1);
}

function nextQuestion(number) {
    const prevNum = number -1;

    if (number != 1){
        let stringNum = prevNum.toString();
        const questionDiv = document.getElementById(`Question${stringNum}`);
        questionDiv.style.display = 'none';
    } 

    let stringNum = number.toString();
	const questionDiv = document.getElementById(`Question${stringNum}`);
    questionDiv.style.display = 'flex';
    
}

function shake(){
    document.getElementById("wineBottle").className = "shake";
    finishGame();
}

function finishGame(){
    const lastQuestion = document.getElementById('Question4');
    lastQuestion.style.display = 'none';

}
