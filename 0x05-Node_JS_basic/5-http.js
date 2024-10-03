#!/usr/bin/node

const http = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const DATABASE = process.argv[2];
const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(DATABASE).then((output) => {
      res.write('This is the list of our students\n');
      res.end(output);
    })
      .catch((error) => {
        res.statusCode = 404;
        res.write('This is the list of our students\n');
        res.end(error.message);
      });
  }
});
app.listen(PORT, () => {});

module.exports = app;
