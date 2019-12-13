const weather = require('../logical_operators');

describe('#weather should return correct responses for', () => {
  const rain = true;
  const wind = true;
  

  it('Rain and Wind equals to true', () => {
	  expect(weather([rain, wind])).toBe("Really stay at home!");
  });
  
});

describe('#weather should return correct responses for', () => {
	const day = "Saturday";
  
  it('It says when there are weekends', () => {
	  expect(weather("Saturday")).toBe("It's Weekend!");
  });
});


describe('Matching weather status', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    const rain = true;
    const wind = true;
  });

  test('Test if rain and wind weather return the right result', () => {
    expect(weather([rain, wind])).toBe("Really stay at home!");
  });
});