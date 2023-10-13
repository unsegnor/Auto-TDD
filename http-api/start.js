const calculator = require('../domain/calculator')();

const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();
app.disable("x-powered-by"); //Disabled for security reasons. See: https://sonarcloud.io/organizations/unsegnor/rules?open=javascript%3AS5689&rule_key=javascript%3AS5689

app.get('/helloworld', (req, res) => {
  res.send('Hello World!');
});

app.get('/sum', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const result = calculator.sum(a, b);
  res.status(200).send(result.toString());
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
