const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const managed = [];
  employees.forEach((employee) => {
    if (employee.managers.some((manager) => manager === managerId)) {
      managed.push(`${employee.firstName} ${employee.lastName}`);
    }
  });

  return managed;
}

module.exports = { isManager, getRelatedEmployees };
