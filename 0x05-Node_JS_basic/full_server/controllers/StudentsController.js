#!/usr/bin/node

// implements students controllers.

import readDatabase from '../utils';

const dbPath = process.argv[2];

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(dbPath);
      let resp = 'This is the list of our students\n';
      for (const [field, studentList] of Object.entries(students)) {
        resp += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
      }
      res.status(200).send(resp);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const students = await readDatabase(dbPath);
      const studentList = students[major];
      if (!studentList) {
        return res.status(200).send(`List: No students found for major ${major}`);
      }
      res.status(200).send(`List: ${studentList.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
