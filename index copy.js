/*
   vowel count

   buatlah sebuah fungsi yang menerima parameter string

   lalu kita buat sebuah variable dimana count adalah 0

   lalu kita gunakan sebuah for looping untuk melihat sebuah index yang ada di string

   jika sebuah huruf dari string adalah a,i,u,e,o maka count akan bertambah 1

   lalu kita return count dari hasil tersebut
*/
var vowelCount = function (str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "a" ||
            str[i] === "i" ||
            str[i] === "i" ||
            str[i] === "e" ||
            str[i] === "o") {
            count++;
        }
    }
    console.log(count);
};
vowelCount("abracadabra");
