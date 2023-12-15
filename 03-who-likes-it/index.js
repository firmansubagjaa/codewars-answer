/*
   who likes it?

   https://github.com/sindresorhus/who-likes-it

   siapkan sebuah function bernama whoLikesItn dengan menggunakan tipe data
   string yang menerima parameter berupa array of string
*/
var whoLikesIt = function (likes) {
    var like = likes.length;
    if (like === 0)
        console.log("No one likes this");
    if (like === 1)
        console.log("".concat(likes[0], " likes this"));
    if (like === 2)
        console.log("".concat(likes[0], " and ").concat(likes[1], " likes this"));
    if (like === 3)
        console.log("".concat(likes[0], ", ").concat(likes[1], ", and ").concat(likes[2], " likes this"));
    if (like > 4)
        console.log("".concat(likes[0], ", ").concat(likes[1], ", and ").concat(likes.length - 2, " others like this"));
};
var arr = ["Peter", "John", "James", "Mary", "Joseph", "Max"];
whoLikesIt(arr);
