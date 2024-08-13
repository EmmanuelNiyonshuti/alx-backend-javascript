/**
 * cleanSet - returns a string of all set values
 *          that starts with a specific string.
 * @param {Set} set: a set data structure
 * @param {String} startString: a substring.
 *
 * @return: a string of all the set values that start with a specific string.
 */

export default function cleanSet(set, startString) {
  if (!startString || !set) {
    return '';
  }
  if (!(set instanceof Set)) {
    return '';
  }
  let subString = '';
  for (const val of set) {
    if (val.startsWith(startString)) {
      if (subString) {
        subString += '-';
      }
      subString += val.slice(startString.length);
    }
  }
  return subString;
  /*
  return Array.from(set)
    .filter((str) => str.startsWith(startString))
    .map((substr) => substr.slice(startString.length))
    .join('-');
    */
}
