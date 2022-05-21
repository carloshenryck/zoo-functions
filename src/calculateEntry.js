const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return {
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const quantity = countEntrants(entrants);
  const { prices } = data;

  return (quantity.child * prices.child) + (quantity.adult * prices.adult)
  + (quantity.senior * prices.senior);
}

module.exports = { calculateEntry, countEntrants };
