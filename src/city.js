export class City {

  constructor(name) {
    this.name = name;
    this.population = 50;
    this.infectionLevel = 0;
  }

  setInfection() {
    setInterval( () => {
      this.infectionLevel++;
    }, 1000);
  }

  maxInfection() {
    if (this.infectionLevel >= this.population) {
      return true;
    } else {
      return false;
    }
  }

  //dead.

}
