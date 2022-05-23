const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function animalObjectNotFiltered(specie) {
  return {
    [specie.name]: specie.residents.map((resident) => resident.name),
  };
}

function mapNotFiltered(map) {
  species.forEach((specie) => {
    map[specie.location].push(animalObjectNotFiltered(specie));
  });
  return map;
}

function animalObjectFiltered(specie, options) {
  if (options.sex) {
    const animalObject = { [specie.name]: specie.residents.filter((resident) =>
      resident.sex === options.sex).map((animal) => animal.name) };
    if (options.sorted) {
      animalObject[specie.name].sort();
    }
    return animalObject;
  }

  if (options.sorted) {
    return { [specie.name]: specie.residents.map((resident) => resident.name).sort() };
  }
}

function mapFiltered(map, options) {
  species.forEach((specie) => {
    map[specie.location].push(animalObjectFiltered(specie, options));
  });
  return map;
}

function getAnimalMap(options) {
  const map = { NE: [], NW: [], SE: [], SW: [] };

  if (!options || !options.includeNames) {
    data.species.forEach((specie) => map[specie.location].push(specie.name));
    return map;
  }

  if (Object.keys(options).length === 1) {
    return mapNotFiltered(map);
  }

  return mapFiltered(map, options);
}

module.exports = getAnimalMap;
