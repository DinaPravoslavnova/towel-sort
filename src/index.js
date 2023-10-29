// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) return [];

    let towelSortArray = [];
    let i = 0;

    while (i < matrix.length) {
        if (i % 2 === 0) {
            towelSortArray = towelSortArray.concat(matrix[i]);
        } else {
            towelSortArray = towelSortArray.concat(matrix[i].reverse());
        }
        i++;
    }

    return towelSortArray;
};
