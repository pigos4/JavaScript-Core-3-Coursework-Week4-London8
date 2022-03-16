const calculator = require("./calculator");
describe("Sum of strings", () => {
  test("Add two string numbers", () => {
    expect(calculator("", "1")).toEqual(1);
  });
  test("Add three string numbers", () => {
    expect(calculator("", "1", "3")).toEqual(4);
  });
  test("Add five string numbers", () => {
    expect(calculator("", "1", "3", "5", "8")).toEqual(17);
  });
  test("Add two empty string numbers", () => {
    expect(calculator("", "")).toEqual(0);
  });
  test("Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2", () => {
    expect(calculator("2", "1001")).toEqual(2);
  });

  test("Negative number throw error", () => {
    expect(()=>calculator("-1", "2", "3")).toThrowError(
      "Negative numbers not allowed: -1"
    );
  });
});
