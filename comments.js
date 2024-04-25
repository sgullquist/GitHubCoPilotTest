// Create web server
const http = require('http');
const server = http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'application/json');
   res.end(JSON.stringify(skillsMember()));
});
server.listen(3000, 'localhost', () => {
   console.log('Server running on port 3000');
});
