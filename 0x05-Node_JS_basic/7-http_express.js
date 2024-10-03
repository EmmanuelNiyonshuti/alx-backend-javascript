#!/usr/bin/node

const express = require('express');

const app = express();
const fs = require('fs');

const port = 1245;

// reads file asynchronously
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const students = lines.slice(1);
      const fields = {};
      students.forEach((student) => {
        const [firstName, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      });
      let output = `Number of students: ${students.length}\n`;
      for (const [field, studentList] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${studentList.length}. LIST: ${studentList.join(', ')}\n`;
      }
      resolve(output);
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  countStudents(process.argv[2]).then((students) => {
    res.send(`This is the list of our students\n${students}`);
  }).catch((error) => {
    res.send(`This is the list of our students\n${error.message}`);
  });
});

app.listen(port, () => {});

module.exports = app;
