#!/usr/bin/node

// reads file asynchronously

const fs = require('fs');

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
      console.log(`Number of students: ${students.length}`);
      const fields = {};
      students.forEach((student) => {
        const [firstName, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      });
      let output = ""
      for (const [field, studentList] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${studentList.length}. LIST: ${studentList.join(', ')}`);
        output += `Number of students in ${field}: ${studentList.length}. LIST: ${studentList.join(', ')}`;
      }
      resolve(output);
    });
  });
}
module.exports = countStudents;
