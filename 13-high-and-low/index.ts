const highAndLow = (str: string) => {
  let toArr = str.split(" ").map(Number).sort();
  return `${toArr[toArr.length - 1]} ${toArr[0]}`;
};

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
