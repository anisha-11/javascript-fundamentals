const batch = (batch, num) => {
  if (batch.length >= 5) return batch;
  return batch.concat(num);
};

console.log