function sales(carsSold) {
  return carsSold.reduce(
    (acc, v) =>{
      acc[v.make] ? (acc[v.make] += v.price) : (acc[v.make] = v.price);return acc},
    {}
  );
}

module.exports = sales;
