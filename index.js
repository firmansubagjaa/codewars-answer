/*
   who likes it?

   ini untuk mencari berapa banyak orang yang menyukai suatu item
   1. siapkan sebuah function yang bernama whoLikesIt yang memiliki parameter
      sebuah array of string
   2. lalu didalam function, kita buatkan sebuah validasi untuk mengecek
      - jika array.length === 0, maka return "No one likes this"
      - jika array.length === 1, maka return "{} likes this"
      - jika array.length === 2, maka return "{} and {} likes this"
      - jika array.length === 3, maka return "{}, {} and {} likes this"
      - jika array.length === 4, maka return "{}, {} and {} others like this"
   3. selesai
*/
var whoLikesIt = function (likes) {
    if (likes.length === 0)
        console.log("No one likes this");
    if (likes.length === 1)
        console.log("".concat(likes[0], " likes this"));
    if (likes.length === 2)
        console.log("".concat(likes[0], " and ").concat(likes[1], " likes this"));
    if (likes.length === 3)
        console.log("".concat(likes[0], ", ").concat(likes[1], " and ").concat(likes[2], " likes this"));
    if (likes.length === 4)
        console.log("".concat(likes[0], ", ").concat(likes[1], " and ").concat(likes.length - 2, " others like this"));
};
whoLikesIt(["Alex", "Jacob", "Mark", "Max"]);
whoLikesIt(["Alex", "Jacob"]);
whoLikesIt(["Alex", "Jacob", "Steven"]);
