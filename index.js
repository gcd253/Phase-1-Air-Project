fetch('https://raw.githubusercontent.com/zmsp/coronavirus-json-api/master/metadata.json')
.then((response) => response.json())
.then((json) => console.log(json))