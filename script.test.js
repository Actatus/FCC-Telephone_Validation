const validateInput = require('./script');

test('input too short', () => {
  expect(validateInput('1a2b3')).toBe(false);
});

test('input too long', () => {
  expect(validateInput('abc3459123432195332132')).toBe(false);
});

test('input of 11 does not include +1', () => {
  expect(validateInput("2(509)-555-5555")).toBe(false);
});

test('phone number with dashes of 10 numbers', () => {
  expect(validateInput("(509)555-5555")).toBe(true);
});

test('phone number with dashes of 11 numbers', () => {
  expect(validateInput("+1(555)555-5555")).toBe(true);
});

test('no input', () => {
  expect(validateInput()).toBe(false);
});

test('no digits', () =>{
  expect(validateInput("nodigits")).toBe(false);
});
