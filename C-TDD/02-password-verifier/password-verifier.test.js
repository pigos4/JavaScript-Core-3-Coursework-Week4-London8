const verify = require("./password-verifier");
// ### Step 1

// You will be writing tests and implementing some verifications inside a
// function called 'verify' that takes a password as an argument.
// If the conditions are met, the 'verify' function should return 'Password accepted',
// otherwise the 'verify' function should return 'Password rejected'.
test("Function with arguments", () => {
  expect(verify()).toEqual("Password rejected");
});
test("Function without arguments", () => {
  expect(verify("abcd3fghtlmi")).toEqual("Password accepted");
});

// - If the password is less than 8 characters, the 'verify' function should return 'Password rejected'.

// ### Step 2
test("If the password is less than 8 characters", () => {
  expect(verify("abcd3fghtlmi")).toEqual("Password accepted");
});
// - If the password is null, the 'verify' function should return 'Password rejected'. The requirements from step 1 remain the same.

// ### Step 3
test("If the password is null", () => {
  expect(verify(null)).toEqual("Password rejected");
});
// - If the password does not have at least 1 uppercase letter, the 'verify' function should return 'Password rejected'. The requirements from steps 1 & 2 remain the same.

// ### Step 4

// - If the password does not have at least 1 number, the 'verify' function should return 'Password rejected'. The requirements from steps 1, 2 & 3 remain the same.
test("If the password does not have at least 1 number", () => {
  expect(verify("abcd3fghtlmi")).toEqual("Password accepted");
});