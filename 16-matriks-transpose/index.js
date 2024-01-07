var MatriksTranspose = function (arr) {
    var barisBaru = arr[0].length;
    var kolomBaru = arr.length;
    var hasilTranspose = new Array(barisBaru);
    for (var i = 0; i < barisBaru; i++) {
        hasilTranspose[i] = new Array(kolomBaru);
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            hasilTranspose[j][i] = arr[i][j];
        }
    }
    return hasilTranspose;
};
console.log(MatriksTranspose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]));
