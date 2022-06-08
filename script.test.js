const validateInput = require('./script');

test("Country code, no parantheses", () =>{
  expect(validateInput("1 555-555-5555")).toBe(true);
});

test("Country code + parantheses", () => {
  expect(validateInput("1 (555) 555-5555")).toBe(true);
});

test("No puncutation, 10 digit", () => {
  expect(validateInput("5555555555")).toBe(true);
});

test("Mixed numbers - non-555", () => {
  expect(validateInput("1 456 789 4444")).toBe(true);
});

test("Mixed numbers, symbols, and letters", () => {
  expect(validateInput("123**&!!asdf#")).toBe(false);
});

test("Input too short", () => {
  expect(validateInput("5555")).toBe(false);
});

test("Input too long", () => {
  expect(validateInput("555555555555555")).toBe(false);
});

test("Country code 2", () => {
  expect(validateInput("2 222-222-2222"));
});

test("Country code 0", () => {
  expect(validateInput("0 222-222-2222"));
});

test("Country code -1", () => {
  expect(validateInput("-1 111-111-1111"));
});


test('no input', () => {
  expect(validateInput()).toBe(false);
});
