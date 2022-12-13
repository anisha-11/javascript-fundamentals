const batch = (batch, num) => {
  if (batch.length >= 5) return batch;
  return batch.concat(num);
};

console.log(batch([1], 2));
console.log(batch([5, 4, 3, 2], 1));
console.log(batch([2], 2));