const answers = [];
var random = false;

//Listen for answers when buttons pushed
document.addEventListener("DOMContentLoaded", () => {
	const buttons = document.getElementsByClassName("answer");

	const buttonPressed = (e) => {
		if (answers.length < 4) {
			answers.push(e.target.innerHTML.toLowerCase());
		}
	};

	for (let button of buttons) {
		button.addEventListener("click", buttonPressed);
	}
});

function getJSON() {
	fetch(
		"https://cdn.jsdelivr.net/gh/nicolemah99/magic-8-bottle/experiences.json"
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (exp) {
			if (random == true) {
				getRandExp(exp);
			} else {
				filterExp(exp);
			}
		})
		.catch(function (error) {
			console.error(
				`Something went wrong when trying to retrieve the JSON file: ${error}`
			);
		});
}

function filterExp(exp) {
	console.log(answers);
	//Perfect Match - Best Case
	var filter4 = exp.filter(
		(a) =>
			a.style.includes(answers[0]) &&
			a.crew.includes(answers[1]) &&
			a.identity.includes(answers[2]) &&
			a.wine.includes(answers[3])
	);
	var filter3 = exp.filter(
		(a) =>
			a.style.includes(answers[0]) &&
			a.crew.includes(answers[1]) &&
			a.wine.includes(answers[3])
	);
	var filter2 = exp.filter(
		(a) => a.style.includes(answers[0]) && a.wine.includes(answers[3])
	);
	var filter1 = exp.filter((a) => a.wine.includes(answers[3]));

	if (filter4.length != 0) {
		getRandExp(filter4);
	} else if (filter3.length != 0) {
		getRandExp(filter3);
	} else if (filter2.length != 0) {
		getRandExp(filter2);
	} else if (filter1.length != 0) {
		getRandExp(filter1);
	} else {
		getRandExp(exp);
	}
}

//Return random Exp from JSON file
function getRandExp(exp) {
	var len = Object.keys(exp).length;
	var randInt = getRandomInt(0, len);
	const chosen = exp[randInt];
	showExp(chosen);
}

function randExp() {
	random = true;
	hideElement("StartBtn");
	hideElement("RandBtn");
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
	element.style.display = "none";
}

function showElement(id, type = "block") {
	const element = document.getElementById(id);
	element.style.display = type;
}

function updateProgressBar(number) {
	let bar = document.getElementById("progressBarFull");
	bar.style.width = `${((number - 1) / 4) * 100}%`;
}

function shake() {
	document.getElementById("wineBottle").className = "shake";
	setTimeout(finishGame, 1000);
}

function showExp(exp) {
	const link = document.getElementById("Exp");
	const name = document.getElementById("Name");
	const img = document.getElementById("ExpImg");
	link.href = exp["link"];
	name.innerHTML = exp["name"];
	img.src = exp["img"];
	hideElement("content");
	hideElement("WineBottleDiv");
	showElement("ExpImg");
	showElement("ExpDiv");
	showElement("StartOverBtn");
}

function startGame() {
	showElement("progressBar", "flex");
	hideElement("StartBtn");
	hideElement("RandBtn");
	hideElement("ExpDiv");
	nextQuestion(1);
}

function nextQuestion(number, button) {
	const prevNum = number - 1;

	if (number != 1) {
		let stringNum = prevNum.toString();
		hideElement(`Question${stringNum}`);
	}

	updateProgressBar(number);

	let stringNum = number.toString();
	const questionDiv = document.getElementById(`Question${stringNum}`);
	questionDiv.style.display = "flex";
	questionDiv.style.flexDirection = "column";
}

function finishGame() {
	getJSON();
	hideElement("progressBar");
	hideElement("Question4");
	showElement("StartOverBtn");

}

function startOver() {
	const wineBottle = document.getElementById("wineBottle");
	wineBottle.classList.remove("shake");

	//Clear global variables
	random = false;
	while (answers.length > 0) {
		answers.pop();
	}
	hideElement("ExpDiv");
	hideElement("StartOverBtn");
	showElement("WineBottleDiv");
	showElement("content","flex");
	showElement("StartBtn");
	showElement("RandBtn");
}
