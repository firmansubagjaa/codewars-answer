const num = 1634;

const narcissistic = (num: number): void => {
  const numToStr = num.toString();
  const numDigits = numToStr.length;
  const toNumber = numToStr.split("").map(Number);

  let arr = [];
  for (let i = 0; i < toNumber.length; i++) {
    let pangkat = Math.pow(toNumber[i], numDigits);
    arr.push(pangkat);
  }

  const result = arr.reduce((a, b) => a + b, 0);
  console.log(result === num);
};

narcissistic(num);
