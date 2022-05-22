const data = require('../data/zoo_data');

function getAnimalsByDay(day) {
  const animals = data.species.filter((specie) =>
    specie.availability.some((availableDays) => availableDays === day));

  return animals.map((animal) => animal.name);
}

function getWeekSchedule() {
  const { hours } = data;
  const schedule = {};

  Object.entries(hours).forEach((hour) => {
    const day = hour[0];
    const openingHours = hour[1];

    schedule[day] = {
      officeHour: openingHours.open === 0 ? 'CLOSED'
        : `Open from ${openingHours.open}am until ${openingHours.close}pm`,
      exhibition: openingHours.open === 0 ? 'The zoo will be closed!' : getAnimalsByDay(day),
    };
  });

  return schedule;
}

function getSchedule(scheduleTarget) {
  if (data.species.some((specie) => specie.name === scheduleTarget)) {
    return data.species.find((specie) => specie.name === scheduleTarget).availability;
  }

  if (Object.keys(data.hours).includes(scheduleTarget)) {
    return { [scheduleTarget]: getWeekSchedule()[scheduleTarget] };
  }

  return getWeekSchedule();
}

module.exports = getSchedule;
