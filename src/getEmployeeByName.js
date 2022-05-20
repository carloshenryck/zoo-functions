const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};

  return data.employees.find((employee) => employee.firstName === employeeName
  || employee.lastName === employeeName);
}

module.exports = getEmployeeByName;
