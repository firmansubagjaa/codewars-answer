/* Find The Parity Outlier 
   buatlah sebuah fungsi yang menerima parameter array angka
   lalu kita buatkan sebuah perulangan dimana i adalah index dari array
   jika i adalah genap dan array[i] adalah ganjil maka return array[i]
*/

/*
  Parity Outlier
  apa itu parity outlier? parity outlier adalah sebuah angka yang tidak 
  habis dibagi dua atau habis dibagi empat yang tidak sama dengan 0 

  1. siapkan sebuah function bernama findOutlier yang menerima sebuah array of
      number
  2. lalu didalam function, kita buatkan sebuah variable dimana even = 0 dan
      odd = 0 yang bertujuan untuk menyimpan angka genap dan ganjil
  3. lalu kita buat sebuah perulangan dimana i adalah index dari array (0)
  4. lalu kita membuat sebuah validasi dimana 
        - jika array[i] % 2 === 0, maka, variable even akan bertambah 1
        - jika array[i] % 2 !== 0,  maka, variable odd akan bertambah 1
  5. lalu sesudah melakukan for looping dan validasi, kita melakukan validasi
        - jika variable even === 1, maka return array[i]
        - jika variable odd === 1,  maka return array[i]
*/

const findOutlier = (arr: number[]): void => {
  let even: number[] = [];
  let odd: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  if (even.length === 1) {
    console.log(even[0]);
  } else {
    console.log(odd[0]);
  }
};

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
findOutlier([160, 3, 1719, 19, 11, 13, -21]);
