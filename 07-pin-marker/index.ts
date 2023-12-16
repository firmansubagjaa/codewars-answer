/*
  pin marker
  1. buatlah sebuah fungsi yang menerima parameter number
  2. lalu kita ubah number menjadi string dan lalu ubah menjadi array
  3. lalu kita buat sebuah perulangan dimana i adalah index dari array
  4. lalu kita melakukan validasi
      - jika i > arr.length - 4 atau i lebih besar dari index arr terakhir sebelum 4 maka akan ubah menjadi marker #
      - jika i < 4 maka akan tetap menjadi number
  5. lalu kita return array dan ubah menjadi string
*/

const marker = (n: number): void => {
  let arr = n.toString().split("");
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 4) {
      arr[i] = "#";
    }
  }
  console.log(arr.join(""));
};

marker(12345678953456);
