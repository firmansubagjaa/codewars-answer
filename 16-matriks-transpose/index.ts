const MatriksTranspose = (arr: number[][]) => {
  const barisBaru = arr[0].length;
  const kolomBaru = arr.length;
  const hasilTranspose = new Array(barisBaru);

  for (let i = 0; i < barisBaru; i++) {
    hasilTranspose[i] = new Array(kolomBaru);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      hasilTranspose[j][i] = arr[i][j];
    }
  }
  return hasilTranspose;
};

console.log(
  MatriksTranspose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
