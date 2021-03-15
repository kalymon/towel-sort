module.exports = function towelSort(matrix) {
    if (matrix == undefined || matrix == null || matrix.length == 0) {
        var newArray = [];
        return newArray;
    }

    var newArray = [];
    var matrixRows = [];
    for (var i = 0; i < matrix.length; i++) {
        var matrixRows = matrix[i];
        if (i % 2 == 0) {
            for (var j = 0; j < matrixRows.length; j++) {
                newArray.push(matrixRows[j]);
            }
        } else {
            for (var j = (matrixRows.length - 1); j >= 0; j--) {
                newArray.push(matrixRows[j]);
            }
        }
    }
    return newArray;
};
