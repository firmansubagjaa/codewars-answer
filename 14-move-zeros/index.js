var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var moveZeros = function (arr) {
    var arrForValue = [];
    var arrForZero = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arrForValue.push(arr[i]);
        }
        else {
            arrForZero.push(arr[i]);
        }
    }
    return __spreadArray(__spreadArray([], arrForValue, true), arrForZero, true);
};
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
