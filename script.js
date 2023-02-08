document.addEventListener('DOMContentLoaded', function () {
    initialize()

fetch('https://cdn.jsdelivr.net/gh/nicolemah99/magic-8-bottle/testData.json')
    .then((response) => response.json())
    .then((data) => console.log(data));

});

function initialize(){
    const start = document.getElementById("StartButton");
    start.onclick = startGame(start);
}

function startGame(startButton){
    startButton.style.display = "none";
}