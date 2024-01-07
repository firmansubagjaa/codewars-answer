const reverseWords = (str: string) => {
  let result = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
  return result;
};

console.log(reverseWords("This is an example!"));
