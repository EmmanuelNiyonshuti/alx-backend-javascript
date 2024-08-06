export default function iterateThroughObject(reportWithIterator) {
//   return Array.from(reportWithIterator).join('|');
//   return reportWithIterator.join('|');
  const res = [];
  for (const employee of reportWithIterator) {
    res.push(employee);
  }
  return res.join(' | ');
}
