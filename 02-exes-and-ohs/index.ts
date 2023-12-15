/*
   exes and ohs
   exes and ohs adalah sebuah fungsi untuk menghitung x dan o dari sebuah string
   dan jika x sama dengan o maka return true dan jika tidak sama maka return false

   1. siapkan sebuah function untuk menghitung x dan o dengan memiliki parameter
      sebuah string
   2. lalu kita buat sebuah variable dimana x dan o adalah 0
   3. lalu kita buat sebuah perulangan dimana i adalah index dari sebuah string
   4. lalu kita buat validasi untuk pengecekan x dan 0 dimana
      - jika string[i] adalah x, x bertambah 1
      - jika string[i] adalah o, o bertambah 1
   5. lalu kita return x sama dengan o dimana
      - jika x sama dengan o, return true
      - jika x tidak sama dengan o, return false
*/

const xo = (str: string): boolean => {
  let x = 0;
  let o = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") x++;
    if (str[i] !== "o") o++;
  }

  return x === o;
};

console.log(xo("xo"));
console.log(xo("xxOo"));
