var num = 1634;
var narcissistic = function (num) {
    var numToStr = num.toString();
    var numDigits = numToStr.length;
    var toNumber = numToStr.split("").map(Number);
    var arr = [];
    for (var i = 0; i < toNumber.length; i++) {
        var pangkat = Math.pow(toNumber[i], numDigits);
        arr.push(pangkat);
    }
    var result = arr.reduce(function (a, b) { return a + b; }, 0);
    console.log(result === num);
};
narcissistic(num);
