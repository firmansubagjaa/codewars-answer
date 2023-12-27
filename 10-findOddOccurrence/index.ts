const arr = [0, 1, 0, 1, 0];

const findOddOccurrence = (arr: number[]): void => {
  const countMap = {};

  arr.forEach((num) => {
    countMap[num] = (countMap[num] || 0) + 1;
  });

  const oddNumber = Object.keys(countMap).find(
    (key) => countMap[key] % 2 !== 0
  );
  console.log(oddNumber);
};

findOddOccurrence([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
