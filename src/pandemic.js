import { City } from './city.js';
export let pandemic = {
  nyc: new City("New York City", 8500000),
  lax: new City("Los Angeles", 4000000),
  chi: new City("Chicago", 2700000),
  sea: new City("Seattle", 700000),
  mia: new City("Miami", 500000),

  setInfection: function(city) {
    let thisCity = city;
    setInterval( () => {
      console.log("NAME", thisCity);
      console.log("INFECTION", thisCity.infectionLevel);
      console.log("POPULATION", thisCity.population);
      if (thisCity.infectionLevel < thisCity.population) {
        thisCity.infectionLevel++;
      }
    }, 1000);
  },
  maxInfection: function(city) {
    if (city.infectionLevel >= city.population) {
      return true;
    } else {
      return false;
    }
  }
};
