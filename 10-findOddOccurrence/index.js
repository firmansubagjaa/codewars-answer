var arr = [0, 1, 0, 1, 0];
var findOddOccurrence = function (arr) {
    var countMap = {};
    arr.forEach(function (num) {
        countMap[num] = (countMap[num] || 0) + 1;
    });
    var oddNumber = Object.keys(countMap).find(function (key) { return countMap[key] % 2 !== 0; });
    console.log(oddNumber);
};
findOddOccurrence([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
