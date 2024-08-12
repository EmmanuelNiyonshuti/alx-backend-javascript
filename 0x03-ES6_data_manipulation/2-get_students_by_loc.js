/**
 * getStudentsByLocation - returns an array of objects who are located at a specific city.
 * @param {array} students - a list of students
 * @param {string} city - location of a student.
 * @return: an array of students located in a specific city
 */

export default function getStudentsByLocation(students, city) {
  const neighbours = students.filter((student) => student.location === city);
  return neighbours;
}
