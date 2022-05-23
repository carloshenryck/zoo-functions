const data = require('../data/zoo_data');

const locations = [...new Set(data.species.map((specie) => specie.location))];

function getAnimalsByName(name) {
  return {
    [name]: data.species.find((specie) => specie.name === name).residents
      .map((resident) => resident.name),
  };
}

function getAnimalsLocation() {
  const map = { };

  locations.forEach((local) => {
    map[local] = data.species.filter((specie) => specie.location === local)
      .map((animal) => animal.name);
  });
  return map;
}

function getLocationWithNames() {
  const map = getAnimalsLocation();

  Object.entries(map).forEach((entrie) => {
    const location = entrie[0];
    const animals = entrie[1];
    const animalsWithName = animals.map((animal) => getAnimalsByName(animal));

    map[location] = animalsWithName;
  });

  return map;
}

function getLocationFilteredBySex(sex, animalsObject) {
  Object.values(animalsObject).forEach((animalArray) => {
    animalArray.forEach((animal) => {
      const specie = Object.keys(animal)[0];
      const names = Object.values(animal)[0];
      const filtered = names.filter((name) => data.species.find((oxi) => oxi.name === specie)
        .residents.find((resident) => resident.name === name && resident.sex === sex));
      animal[specie] = filtered;
    });
  });
}

// eslint-disable-next-line complexity
function getAnimalMap(options) {
  if (!options) return getAnimalsLocation();
  const keys = Object.keys(options);
  if (!keys.includes('includeNames') && keys.length > 0) return getAnimalsLocation();
  if (keys.includes('includeNames') && keys.length === 1) return getLocationWithNames();
  let animalMap;
  if (keys.includes('sex')) {
    animalMap = getLocationWithNames();
    getLocationFilteredBySex(options.sex, animalMap);
  }

  return animalMap;
}

module.exports = getAnimalMap;
