/**
 * cleanSet - returns a string of all set values
 *          that starts with a specific string.
 * @param {Set} set: a set data structure
 * @param {String} startString: a substring.
 *
 * @return: a string of all the set values that start with a specific string.
 */

const cleanSet = (set, startString)  => {
  if (!startString || !set || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const subStrLen = startString.length;
  if (subStrLen <= 0){
    return '';
  }
  let subString = '';
  for (const str of set) {
    if (str.startsWith(startString)) {
      if (subString) {
        subString += '-';
      }
      subString += str.slice(subStrLen);
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
export default cleanSet;
