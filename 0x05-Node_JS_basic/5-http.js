#!/usr/bin/node

const http = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const DATABASE = process.argv[2];
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(DATABASE)
      .then((output) => {
        res.end(`This is the list of our students\n ${output}`);
      })
      .catch((error) => {
        res.end(`This is the list of our students\n ${error.message}`);
      });
  }
});
app.listen(PORT, () => {});

module.exports = app;
