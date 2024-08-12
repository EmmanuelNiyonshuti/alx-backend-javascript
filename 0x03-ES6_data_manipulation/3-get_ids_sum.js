/**
 * getStudentIdsSum - returns the sum of the students.
 * @param {Array} students - list of students.
 * @return - returns the sum of student ids.
 */

export default function getStudentIdsSum(students) {
  const sum = students.reduce((acc, curr) => acc + curr.id, 0);
  return sum;
}
