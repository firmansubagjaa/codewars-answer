/*
  highest and lower value
  1. buatlah sebuah fungsi yang menerima parameter array of string dengan isi angka
  2. lalu kita ubah string menjadi number
  3. lalu kita buat sebuah perulangan dimana i adalah index dari array
  4. lalu kita buat sebuah perulangan dimana j adalah index dari array
  5. lalu kita buat sebuah perulangan dimana k adalah index dari array
*/
var highAndLow = function (numbers) {
    var numbersArr = numbers
        .split(" ")
        .map(function (num) { return parseInt(num); })
        .sort(function (a, b) { return a - b; });
    return "".concat(numbersArr[numbersArr.length - 1], " ").concat(numbersArr[0]);
};
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
