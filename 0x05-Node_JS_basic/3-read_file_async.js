#!/usr/bin/node

const fs = require('fs/promises');

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
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
    for (const [field, studentList] of Object.entries(fields)) {
      console.log(`Number of students in FIELD: ${field}. ${studentList.length}. List: ${studentList.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
