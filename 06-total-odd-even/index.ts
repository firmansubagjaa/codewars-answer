/* menghitung masing masing total angka ganjil dan genap
    1. siapkan sebuah function yang bernama TotalOddEven dengan memiliki 
      paramater untuk menerima sebuah array of number
    2. lalu didalam function, kita buatkan sebuah variable dimana 
          ganjil = []
          genap = []
    3. lalu kita sebuah perulangan dimana i adalah index dari array (0)
    4. lalu kita membuat sebuah validasi dimana
        - jika array[i] % 2 === 0, maka akan dimasukkan ke variable array ganjil
        - jika array[i] % 2 !== 0,  maka akan dimasukkan ke variable array genap
    5. lalu kita return hasil dan menentukan panjang dari variable ganjil 
        dan genap
*/

const TotalOddEven = (arr: number[]): string => {
  const ganjil = [];
  const genap = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) ganjil.push(arr[i]);
    if (arr[i] % 2 !== 0) genap.push(arr[i]);
  }

  return `Ganjil : ${ganjil.length}\nGenap : ${genap.length}`;
};

console.log(TotalOddEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
