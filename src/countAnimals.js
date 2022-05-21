const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const animals = {};
    data.species.forEach((specie) => {
      animals[specie.name] = specie.residents.length;
    });
    return animals;
  }

  const equals = (a, b) => a.length === b.length && a.every((value, index) => value === b[index]);

  if (equals(Object.keys(animal), ['specie'])) {
    return data.species.find((specie) => specie.name === animal.specie).residents.length;
  }

  if (equals(Object.keys(animal), ['specie', 'sex'])) {
    return data.species.find((specie) => specie.name === animal.specie).residents
      .filter((resident) => resident.sex === animal.sex).length;
  }
}

module.exports = countAnimals;
