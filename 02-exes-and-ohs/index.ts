/*
  Exes and Ohs

  kita buatkan sebuah fungsi yang menerima parameter string
  lalu kita buat sebuah variable dimana x dan o adalah 0

  lalu kita gunakan sebuah for looping untuk melihat sebuah index yang ada di 
  parameter str

  jika salah satu huruf dari str adalah x maka dilanjutkan 
  jika salah satu huruf dari str adalah o maka dilanjutkan

  jika panjang x sama dengan o maka return true
  jika panjang x tidak sama dengan o maka return false
*/

const xo = (str: string): void => {
  let x = 0;
  let o = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      console.log(`nilai x = ${x}`);
      x++;
    } else if (str[i] === "o") {
      console.log(`nilai o = ${o}`);
      o++;
    }
  }
  if (x === o) {
    console.log(true);
  } else {
    console.log(false);
  }
};

// xo("xoxo");
xo("oxo");
// xo("xox");
