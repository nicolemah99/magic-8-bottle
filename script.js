document.addEventListener('DOMContentLoaded', function () {

fetch('https://cdn.jsdelivr.net/gh/nicolemah99/magic-8-bottle/testData.json')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then(document.getElementById("test").innerHTML = data
    );

});