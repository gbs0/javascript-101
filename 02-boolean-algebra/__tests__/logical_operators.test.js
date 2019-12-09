const weather = require('../logical_operators');

test('#wheater should handle empty string', () => {
  let rain = true;
	let wind = true;

  expect(weather(rain, wind)).toBe("Really stay at home!");
})

// test('#greetings should return user name', () => {
//   expect(greetings('alice')).toBe('Hello Alice!'); 
// })
