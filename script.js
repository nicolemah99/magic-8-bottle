document.addEventListener('DOMContentLoaded', function () {
    initialize()
    document.getElementById("WineBottle").src = "https://cdn.jsdelivr.net/gh/nicolemah99/magic-8-bottle/wineBottle.svg";

fetch('https://cdn.jsdelivr.net/gh/nicolemah99/magic-8-bottle/testData.json')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then(document.getElementById("test").style.color = 'red');

});

function initialize(){
    document.getElementById("WineBottle").src = "https://cdn.jsdelivr.net/gh/nicolemah99/magic-8-bottle/wineBottle.svg";
    document.getElementById('Title').innerHTML = "Let the Magic 8 Bottle Choose An Experience for you!";
}