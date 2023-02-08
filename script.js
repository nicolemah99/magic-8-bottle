document.addEventListener('DOMContentLoaded', function () {


fetch('https://cdn.jsdelivr.net/gh/nicolemah99/magic-8-bottle/testData.json')
    .then((response) => response.json())
    .then((data) => console.log(data));

});


function startGame(){
    const startButton = document.getElementById("StartButton");
    startButton.style.display = "none";
}