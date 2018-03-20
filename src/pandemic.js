import { City } from './city.js';
export let pandemic = {
  nyc: new City("New York City", 50),
  lax: new City("Los Angeles", 4000000),
  chi: new City("Chicago", 2700000),
  sea: new City("Seattle", 700000),
  mia: new City("Miami", 500000),

  setInfection: function(city) {
    let thisCity = city;
    setInterval( () => {
      if (thisCity.infectionLevel < thisCity.population) {
        thisCity.infectionLevel++;
      }
    }, 1000);
  },
  maxInfection: function(city) {
    let thisCity = city;
    if (thisCity.infectionLevel >= thisCity.population) {
      return true;
    } else {
      return false;
    }
  },
  treat2: function(amount) {
    let thisAmount = amount;
    return function(city) {
      let thisCity = city;
      thisCity.infectionLevel -= amount;
      return thisCity.infectionLevel;
    }
  },
};
pandemic.treatment = pandemic.treat2(5);
