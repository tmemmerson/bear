import { HungryBear } from './../src/hungrybear.js';

describe('Fuzzy Wuzzy', ()=>{
  jest.useFakeTimers();
  let fuzzy;

  beforeEach(function() {
    fuzzy = new HungryBear('Fuzzy');
    fuzzy.setHunger();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 10 when created', ()=>{
    expect(fuzzy.name).toEqual('Fuzzy');
    expect(fuzzy.foodlevel).toEqual(10);
  });

  test('should have a food level of 7 after 3001 milliseconds', ()=>{
    jest.advanceTimersByTime(3001);
    expect(fuzzy.foodlevel).toEqual(7);
  });
});