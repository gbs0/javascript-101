const greetings = require('../concatenate_strings');

test('#greetings should handle empty string', () => {
  expect(greetings('')).toBe('Hello !');
})

// test('#greetings should return user name', () => {
//   expect(greetings('alice')).toBe('Hello Alice!'); 
// })
