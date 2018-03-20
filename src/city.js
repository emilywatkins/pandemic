export class City {

  constructor(name, population) {
    this.name = name;
    this.population = population;
    this.infectionLevel = 0;
  }

  setInfection() {
    setInterval( () => {
      if (this.infectionLevel < this.population) {
        this.infectionLevel++;
      }
    }, 1000);
  }

  maxInfection() {
    if (this.infectionLevel >= this.population) {
      return true;
    } else {
      return false;
    }
  }

  treat(amount) {
    this.infectionLevel -= amount;
  }

}
