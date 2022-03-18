const calculator = (...input) => {
  return input.reduce((acc, v) => {
    if (Number(v) < 0)throw new Error(`Negative numbers not allowed: ${v}`);
    if (v !== "" && Number(v) < 1001) acc += Number(v);
    return acc;
  }, 0);
};

module.exports = calculator;
