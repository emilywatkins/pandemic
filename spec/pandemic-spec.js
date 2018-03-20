import { pandemic } from './../src/pandemic.js';

describe('pandemic', function(){
  let outbreak = pandemic;

  beforeEach(function(){
    jasmine.clock().install();
    outbreak.nyc.infectionLevel = 0;
    outbreak.nyc.name = 'Big Apple';
    outbreak.setInfection(outbreak.nyc);
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should set infection level, start infection, change city name', function() {
    expect(outbreak.nyc.name).toEqual("Big Apple");
    expect(outbreak.nyc.infectionLevel).toEqual(0);
    jasmine.clock().tick(3001);
    expect(outbreak.nyc.infectionLevel).toEqual(3);
  });

  it('should return true if infection level reaches population', function() {
    jasmine.clock().tick(50001);
    var infected = outbreak.maxInfection(outbreak.nyc);
    expect(infected).toEqual(true);
  });

  it('should have a decreased infection level if treated', function() {
    jasmine.clock().tick(20001);
    expect(pandemic.treatment(outbreak.nyc)).toEqual(15);
  });
});
