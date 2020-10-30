import data from '../data/cities.json';

const firstCity = data
  .filter((city) => city.population > 50000)
  .sort((a, b) => b.population - a.population)
  .splice(0, 1);

const popul = data.filter(
  (city) =>
    (city.population > 50000) &
    (city.population !== firstCity[0].population + '')
);
popul.unshift(firstCity[0]);

export default popul;
