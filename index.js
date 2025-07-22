const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Server is running on port 4000');
});

server.listen(4000, () => {
  console.log('Server listening on port 4000');
});

console.log("FFFFFFFFFFFFF 333333333333");

