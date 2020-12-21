const getSum2 = (arr) => arr.reduce((prev, curr) => prev+curr)
  
console.log(getSum2([1, 2, 3, 4, 5]));
console.log(getSum2([5, 10, 15, 20]));
console.log(getSum2([2, 10, 9, 11]));