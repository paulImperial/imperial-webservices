const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from blog express!</h1>');
  res.end();
});


app.use(bodyParser.json());


app.listen(3000, () => {console.log('Listening ...')});
// app.use('/.netlify/functions/server', router);  // path must route to lambda
// app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

// module.exports = app;
// module.exports.handler = serverless(app);
