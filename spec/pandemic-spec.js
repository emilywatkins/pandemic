import { pandemic } from './../src/pandemic.js';

describe('pandemic', function(){
  let outbreak = pandemic;

  beforeEach(function(){
    jasmine.clock().install();
    outbreak.nyc.infectionLevel = 50;
    outbreak.nyc.name = 'Big Apple';
    outbreak.setInfection(outbreak.nyc);
  });

  it('should set infection level, start infection, change city name', function() {
    expect(outbreak.nyc.name).toEqual("Big Apple");
    expect(outbreak.nyc.infectionLevel).toEqual(50);
    jasmine.clock().tick(3001);
    expect(outbreak.nyc.infectionLevel).toEqual(53);
  });
});
