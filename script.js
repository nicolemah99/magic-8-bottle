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
}

function showExperience(exp){
    const expDiv = document.getElementById('ExperienceDiv');
    const link = document.getElementById('Experience');
    const name = document.getElementById('Name');
    const telesomm = document.getElementById('Telesomm');
    const img = document.getElementById('ExpImg');
    const startOverBtn = document.getElementById('StartOverBtn');
    startOverBtn.style.display = 'block';
    expDiv.style.display = 'block';
    link.href = exp['link'];
    name.innerHTML = exp['name'];
    telesomm.innerHTML = exp['telesomm'];
    img.src = exp['img'];
    img.style.display = 'block';
}

function hideBtns(){
    const startButton = document.getElementById("StartBtn");
    const randButton = document.getElementById('RandBtn');
    startButton.style.display = "none";
    randButton.style.display = "none";
    getJSON();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  
function startGame() {
    const wineBottle = document.getElementById("wineBottle");
	const startButton = document.getElementById("StartBtn");
    const randButton = document.getElementById('RandBtn');
    const link = document.getElementById('ExperienceDiv');
    wineBottle.classList.remove('shake');
	startButton.style.display = "none";
    randButton.style.display = "none";
    link.style.display = "none";
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
    questionDiv.style.flexDirection = 'column';
    
}

function shake(){
    document.getElementById("wineBottle").className = "shake";
}
function startOver(){
    const startOverBtn = document.getElementById('StartOverBtn');
    const startButton = document.getElementById("StartBtn");
    const randButton = document.getElementById('RandBtn');
    const expDiv = document.getElementById('ExperienceDiv');
    expDiv.style.display = "none";
    startOverBtn.style.display = 'none';
    startButton.style.display = "block";
    randButton.style.display = "block";

}
function finishGame(){
    const wineBottle = document.getElementById("wineBottle");
    const lastQuestion = document.getElementById('Question4');
    const startOverBtn = document.getElementById('StartOverBtn');
    wineBottle.className = "shake";
    lastQuestion.style.display = 'none';
    startOverBtn.style.display = 'block';
    getJSON();
}
