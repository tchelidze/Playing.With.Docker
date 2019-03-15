const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hey now, brown cow!');

});

app.listen(8080, () => {
  console.log('Listening on port 8080, check me out !');
});