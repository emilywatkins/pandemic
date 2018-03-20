import { City } from './../src/city.js';

describe('City', function() {
  let portland = new City("Portland", 50);

  beforeEach(function() {
    portland.infectionLevel = 0;
    jasmine.clock().install();
    portland.setInfection();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and an infection level of 0 when it is created', function() {
    expect(portland.name).toEqual("Portland");
    expect(portland.infectionLevel).toEqual(0);
  });

  it('should have an infection level of 3 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(portland.infectionLevel).toEqual(3);
  });

  it('should return true when infectionlevel equals population', function() {
    jasmine.clock().tick(50001);
    var infected = portland.maxInfection();
    expect(infected).toEqual(true);
  });

  it('should have a decreased infection level if treated', function() {
    jasmine.clock().tick(20001);
    portland.treat(5);
    expect(portland.infectionLevel).toEqual(15);
  });

  it('should stop incrementing infection level if infection level reaches population', function() {
    jasmine.clock().tick(51001);
    expect(portland.infectionLevel).toEqual(50);
  });

});
