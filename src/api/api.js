const express = require('express');
const serverlessHttp = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from lambda express',
  });
});

module.exports.handler = serverlessHttp(app);
