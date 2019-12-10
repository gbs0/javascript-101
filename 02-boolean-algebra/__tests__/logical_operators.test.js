const weather = require('../logical_operators');

describe('#weather should return correct responses for', () => {
  const rain = true;
  const wind = true;
  const day = "Saturday";

  it('Rain and Wind equals to true', () => {
	  expect(weather([rain, wind])).toBe("Really stay at home!");
  });
  
  it('It says when there are weekends', () => {
	  expect(weather("Saturday")).toBe("It's Weekend!");
  });
});
