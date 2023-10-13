const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/health',
  method: 'GET',
  timeout: 500,
};

console.log("healthcheck")

const request = http.request(options, (res) => {
    console.log('response')
  if (res.statusCode === 200) {
    console.log('OK')
    process.exit(0);
  } else {
    console.log('not OK', res.statusCode)
    process.exit(1);
  }
});

request.on('error', () => {
    console.log('error')
  process.exit(1);
});

request.on('timeout', () => {
    console.log('timeout')
  request.destroy();
  process.exit(1);
});

console.log("requesting...")
request.end();
