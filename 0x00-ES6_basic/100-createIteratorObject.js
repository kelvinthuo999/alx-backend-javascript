export default function createIteratorObject(report) {
  function* employeeGenerator() {
    for (const employees of Object.values(report.allEmployees)) {
      for (const employee of employees) {
        yield employee;
      }
    }
  }

  return {
    [Symbol.iterator]: employeeGenerator
  };
}
