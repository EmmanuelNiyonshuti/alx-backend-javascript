#!/usr/bin/node

// reads file asynchronously

import fs from 'fs/promises';

const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);
    const studentsByField = {};
    students.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    });
    return studentsByField;
  } catch (error) {
    throw error;
  }
};

export default readDatabase;
