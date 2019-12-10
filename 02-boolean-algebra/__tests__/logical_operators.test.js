const weather = require('../logical_operators');

test('#wheater should return correct response', () => {
  let rain = true;
	let wind = true;

  expect(weather(rain, wind)).toBe("Really stay at home!");
  // expect(weather(rain, wind)).toBe([rain, wind].every(bool => bool === true));
  // expect(weather(rain, wind)).toBe([rain, wind].every(Boolean));
});

// test('#greetings should return user name', () => {
//   expect(greetings('alice')).toBe('Hello Alice!'); 
// })
