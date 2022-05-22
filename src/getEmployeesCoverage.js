const data = require('../data/zoo_data');

function generateEmployeeObject(employee) {
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.map((id) =>
      data.species.find((specie) => specie.id === id).name),
    locations: employee.responsibleFor.map((id) =>
      data.species.find((specie) => specie.id === id).location),
  };
}

function getEmployeesCoverage(idOrName) {
  if (idOrName === undefined) {
    return data.employees.map((employee) => generateEmployeeObject(employee));
  }

  const information = Object.values(idOrName)[0];

  if (data.employees.some((employee) => employee.firstName === information
  || employee.lastName === information)) {
    const employeeData = data.employees.find((employee) => employee.firstName === information
    || employee.lastName === information);
    return generateEmployeeObject(employeeData);
  }

  if (data.employees.some((employee) => employee.id === information)) {
    const employeeData = data.employees.find((employee) => employee.id === information);
    return generateEmployeeObject(employeeData);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
