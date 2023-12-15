/* Find The Parity Outlier 
   buatlah sebuah fungsi yang menerima parameter array angka
   lalu kita buatkan sebuah perulangan dimana i adalah index dari array
   jika i adalah genap dan array[i] adalah ganjil maka return array[i]
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
