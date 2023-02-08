fetch('https://cdn.jsdelivr.net/gh/nicolemah99/magic-8-bottle/testData.json')
    .then((response) => response.json())
    .then((data) => console.log(data));

$(document).ready(function() {const element = document.getElementById("test");
element.style.backgroundColor = "#00FF00";
});