document.addEventListener('DOMContentLoaded', () => {});

function getJSON() {
	fetch(
		'https://cdn.jsdelivr.net/gh/nicolemah99/magic-8-bottle/experiences.json'
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (exp) {
			getRandExperience(exp);
		})
		.catch(function (error) {
			console.error(
				`Something went wrong when trying to retrieve the JSON file: ${error}`
			);
		});
}

//Return random Experience from JSON file
function getRandExperience(exp) {
	var len = Object.keys(exp).length;
	var randInt = getRandomInt(0, len);
	const chosen = exp[randInt];
	showExperience(chosen);
}

function randExp() {
    hideElement('StartBtn');
    hideElement('RandBtn');
	shake();
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

//Helper Functions
function hideElement(id) {
	const element = document.getElementById(id);
	element.style.display = 'none';
}

function showElement(id, type='block') {
    const element = document.getElementById(id);
    element.style.display = type;
}

function updateProgressBar(number) {
	let bar = document.getElementById('progressBarFull');
	bar.style.width = `${((number - 1) / 4) * 100}%`;
}

function shake() {
	document.getElementById('wineBottle').className = 'shake';
	setTimeout(finishGame, 1000);
}

function showExperience(exp) {
	const link = document.getElementById('Experience');
	const name = document.getElementById('Name');
	const img = document.getElementById('ExpImg');
	link.href = exp['link'];
	name.innerHTML = exp['name'];
	img.src = exp['img'];
	showElement('ExpImg');
    showElement('ExperienceDiv');
    showElement('StartOverBtn');
}

function startGame() {
	showElement('progressBar','flex')
	hideElement('StartBtn');
    hideElement('RandBtn');
    hideElement('ExperienceDiv');
	nextQuestion(1);
}

function nextQuestion(number) {
	const prevNum = number - 1;

	if (number != 1) {
		let stringNum = prevNum.toString();
        hideElement(`Question${stringNum}`);
	}

	updateProgressBar(number);

	let stringNum = number.toString();
	const questionDiv = document.getElementById(`Question${stringNum}`);
	questionDiv.style.display = 'flex';
	questionDiv.style.flexDirection = 'column';
}

function finishGame() {
    hideElement('progressBar');
    hideElement('Question4');
	showElement('StartOverBtn');
	getJSON();
}

function startOver() {
	const wineBottle = document.getElementById('wineBottle');
	wineBottle.classList.remove('shake');

    hideElement('ExperienceDiv');
    hideElement('StartOverBtn');
    showElement('StartBtn');
    showElement('RandBtn');
}
