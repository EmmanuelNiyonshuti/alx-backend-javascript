/**
 * updateStudentGradeByCity - returns an array of students for a specific city with their own grade.
 * @param {Array} students - list of students.
 * @param {string} city - a location
 * @param {Array} newGrades - an array of grade objects.
 * @return - an array of students.
 */

import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(students, city, newGrades) {
  return getStudentsByLocation(students, city).map((neighborStudent) => {
    const gradeObj = newGrades.filter((grade) => grade.studentId === neighborStudent.id);
    return {
      ...neighborStudent,
      grade: gradeObj.length > 0 ? gradeObj[0].grade : 'N/A',
    };
  });
}
