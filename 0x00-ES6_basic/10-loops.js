export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const i of array) {
    newArray.push(appendString + i);
  }
  return newArray;
}
