var highAndLow = function (str) {
    var toArr = str.split(" ").map(Number).sort();
    return "".concat(toArr[toArr.length - 1], " ").concat(toArr[0]);
};
console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
