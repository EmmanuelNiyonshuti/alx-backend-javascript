/**
 * cleanSet - returns a string of all set values
 *          that starts with a specific string.
 * @param {Set} set: a set data structure
 * @param {String} startString: a substring.
 *
 * @return: a string of all the set values that start with a specific string.
 */

const cleanSet = (set, startString) => {
  if (!startString || !set || set.size === 0 || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  return Array.from(set)
    .filter((str) => typeof str === 'string' && str.toLowerCase().startsWith(startString.toLowerCase()))
    .map((str) => str.slice(startString.length))
    .join('-');

  /* let subString = '';
  for (const str of set) {
    if (str.startsWith(startString)) {
      if (subString) {
        subString += '-';
      }
      subString += str.slice(startString.length);
    }
  }
  return subString; */
};
export default cleanSet;
