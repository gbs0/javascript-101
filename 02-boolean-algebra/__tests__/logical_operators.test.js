const weather = require('../logical_operators');

describe('Matching weather status', () => {
  // Applies only to tests in this describe block
  let rain = true;
  let wind = true;
  
  beforeEach(() => {
    
  });

  it('Test if rain and wind weather return the right result', () => {
    expect(weather([rain, wind])).toBe("Really stay at home!");
  });
});

describe('#weather should return correct responses for', () => {
	beforeEach(() => {
		const day = "Saturday";
	});
	
  it('It says when there are weekends', () => {
	  expect(weather("Saturday")).toBe("It's Weekend!");
  });
});


