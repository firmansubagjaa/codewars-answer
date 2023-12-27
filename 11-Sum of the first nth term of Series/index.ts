/*
 Your task is to write a function which returns the sum of following series upto nth term(parameter).
   Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

   solution
      1. buat sebuah fungsi SeriesSum yang menerima parameter number
      2. lalu buatkan sebuah variable sum dimana nilainya 0
      3. lalu kita akan menggunakan for looping untuk mendapatkan nilai dari index 0 ke nilai
         parameter n
      4. karena setiap index ditambahkan 3 sehingga harus mulai dari 1/4, 1/7, ... , maka kita
         harus menggunakan rumus 1 / (1 + i * 3) dengan i dimulai dari 0 dan akan ditambahkan dengan
         variable sum sehingga
            sum += 1 / (1 + i * 3)
      5. lalu kita buat sebuah variable roundedSum bulatkan dari hasil sum dengan 
         menggunakan method toFixed(2) yang mana method javascript toFixed() ini berfungsi 
         untuk membulatkan sebuah angka decimal dengan 2 karena hasil dari sum tersebut banyak
         angka desimal, misalkan 1 / (1 + i * 3) = 1/7 dan 1/7 = 0.14285714285714285, maka
         kita akan bulatkan desimalnya dengan menggunakan method toFixed(2) dengan panjang 
         sebanyak 2 angka sehingga 1 / (1 + i * 3) = 0.14
      6. lalu kita return variable roundedSum
*/

const SeriesSum = (n: number): void => {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3);
  }
  const roundedSum = sum.toFixed(2);

  console.log(roundedSum);
};

SeriesSum(5);
