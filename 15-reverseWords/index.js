var reverseWords = function (str) {
    var result = str
        .split(" ")
        .map(function (word) { return word.split("").reverse().join(""); })
        .join(" ");
    return result;
};
console.log(reverseWords("This is an example!"));
