function loadGrain(levels) {
    let rightMax = 0,
        leftMax = 0,
        rightI = levels.length - 1,
        leftI = 0,
        result = 0;

    while (leftI < rightI) {
        if (levels[leftI] > leftMax) {
            leftMax = levels[leftI];
        }
        if (levels[rightI] > rightMax) {
            rightMax = levels[rightI];
        }
        if (leftMax >= rightMax) {
            result += rightMax - levels[rightI];
            rightI--;
        } else {
            result += leftMax - levels[leftI];
            leftI++;
        }
    }
    return result;
}

loadGrain([15, 0, 6, 10, 11, 2, 5])//20
loadGrain([4, 1, 3])// 2
loadGrain([2, 1, 5, 2, 7, 4, 10])// 7
loadGrain([2, 0, 1, 5, 2, 7]) // 6
loadGrain([2, 4, 2]) // 0
loadGrain([7, 4]) // 0
loadGrain([]) // 0


console.log(loadGrain([35, 39, 48, 14, 36, 32, 33, 6, 1, 9, 0, 47, 42, 23, 32]))// 254


