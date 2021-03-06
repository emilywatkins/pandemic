import { City } from './city.js';
export let pandemic = {
  nyc: new City("New York City", 800), //8000000
  lax: new City("Los Angeles", 400), //4000000
  chi: new City("Chicago", 300), //2700000
  sea: new City("Seattle", 70), //700000
  mia: new City("Miami", 50), //500000

  setInfection: function(city) {
    let thisCity = city;
    thisCity.uninfected = false;
    setInterval( () => {
      if (thisCity.infectionLevel < thisCity.population) {
        thisCity.infectionLevel++;
      }
      thisCity.percent = Math.floor((thisCity.infectionLevel / thisCity.population)*100);
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
  // spread: function(city) {
  //   let thisCity = city;
  //   setInterval( () => {
  //     let uninfected = [];
  //     for (var thisCity.uninfected in pandemic) {
  //
  //     }
  //     if (thisCity.percent > 50) {
  //
  //     }
  //   })
  // }

};
pandemic.treatment = pandemic.treat2(5);

// spread: function(cityA, cityB) {
//   let cityA = cityA;
//   let cityB = cityB;
//   if (cityA.percent > 10) {
//     setInfection(cityB);
//   }
// }
