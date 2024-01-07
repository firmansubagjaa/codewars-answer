const moveZeros = (arr: (boolean | string | number)[]) => {
  let arrForValue = [];
  let arrForZero = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arrForValue.push(arr[i]);
    } else {
      arrForZero.push(arr[i]);
    }
  }
  return [...arrForValue, ...arrForZero];
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
