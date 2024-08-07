/*
*divideFunction - divides two numbers.
*- numerator(Number)
*- denominator(Number)
*return: the numerator divided by the denominator.
*/
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw Error('can not divide by zero');
  } else {
    return numerator / denominator;
  }
}
