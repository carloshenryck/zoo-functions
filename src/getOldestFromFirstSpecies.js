const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const responsibleFor = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const firstAnimal = data.species.find((specie) => specie.id === responsibleFor);
  const oldestAnimal = firstAnimal.residents.reduce((oldest, animal) => {
    if (oldest.age > animal.age) return oldest; return animal;
  });
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
