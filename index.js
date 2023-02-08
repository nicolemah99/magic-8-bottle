fetch('https://github.com/nicolemah99/magic-8-bottle/blob/master/testData.json')
    .then((response) => response.json())
    .then((json) => console.log(json));