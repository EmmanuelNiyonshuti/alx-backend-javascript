/**
 * hasValuesFromArray - checks if a elements exists within a set.
 * @param {Set} set
 * @param {Array} array
 *
 * @return: a boolean if all the elements in the array exists within a set.
 */

export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
