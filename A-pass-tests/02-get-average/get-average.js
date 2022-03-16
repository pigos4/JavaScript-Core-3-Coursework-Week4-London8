// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  const obj = numbers.reduce(
    (acc, v) => {
      if (typeof v === "number") {
        acc.count += 1;
        acc.tot += v;
      }
      return acc;
    },
    { count: 0, tot: 0 }
  );
  return obj.tot / obj.count;
}

module.exports = average;
