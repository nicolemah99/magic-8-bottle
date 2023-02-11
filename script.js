//document.addEventListener("DOMContentLoaded", function () {}

function getJSON(){
    fetch("https://cdn.jsdelivr.net/gh/nicolemah99/magic-8-bottle/experiences.json")
    .then(function(response){
        return response.json();
    })
    .then(function(exp){
        getRandExperience(exp);
    }).catch(function(error){
        console.error(`Something went wrong when trying to retrieve the JSON file: ${error}`)
    });

}

//Return random Experience from JSON file
function getRandExperience(exp){
    var len = Object.keys(exp).length;
    var randInt = getRandomInt(0,len);
    const chosen = exp[randInt];
    showExperience(chosen);
    console.log(chosen["img"]);
}

function showExperience(exp){
    const link = document.getElementById('Link');
    const name = document.getElementById('Name');
    const telesomm = document.getElementById('Telesomm');
    const img = document.getElementById('ExpImg');

    link.href = exp['link'];
    name.innerHTML = exp['name'];
    telesomm.innerHTML = exp['telesomm'];
    img.src = exp['img'];
}

function getRandomInt(min, max) {
    console.log(min);
    console.log(max);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  
function startGame() {
	const startButton = document.getElementById("StartButton");
    const randButton = document.getElementById('RandButton');
	startButton.style.display = "none";
    randButton.style.display = 'none';
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
    getJSON();

}
