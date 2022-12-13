const checkLength = (phone) => {
  return phone.length <= 10;
};

const filterLongNumbers =(phoneArray) => {
  return phoneArray.filter(checkLength);
};

const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' 
];

console.log(filterLongNumbers(numbers));
// [ '1763687364', '4763687363', '7867867862' ]

console.log(filterLongNumbers(['4763687363', '7867867862'])); // no number to filter out
// [ '4763687363', '7867867862' ]

console.log(filterLongNumbers([]));
// [ ]