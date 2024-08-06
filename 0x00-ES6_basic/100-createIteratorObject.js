export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  return departments.flat();
  // return [].concat(...departments)
}
