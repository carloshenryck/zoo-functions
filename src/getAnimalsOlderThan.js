const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const mySpecie = data.species.find((specie) => specie.name === animal);
  return mySpecie.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
