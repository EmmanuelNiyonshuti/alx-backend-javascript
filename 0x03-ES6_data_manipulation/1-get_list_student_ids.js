/**
 * getListStudentIds - returs the array of ids of a list of object.
 * @param {Array} arr - an array of objects.
 *
 * @return {Array} - an array of ids otherwise an empty array.
 */

export default function getListStudentIds(arr) {
  if (Array.isArray(arr) === false) {
    return [];
  }
  const Ids = arr.map((obj) => obj.id);
  return Ids;
}
