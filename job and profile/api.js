var fetch = require('node-fetch');
var requestOptions = {
  method: 'GET',
};

fetch("https://api.geoapify.com/v2/place-details?id=id%3D514d368a517c511e40594bfd7b574ec84740f00103f90135335d1c00000000920313416e61746f6d697363686573204d757365756d&apiKey=711b80ce1afd4fddba3f725e0c3333d2", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));