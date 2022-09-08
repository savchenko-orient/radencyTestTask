function loadGrain(levels) {
    let prevNum = 0;
    let result = 0;
    if (levels.length < 3) return 0;

    if (levels.length === 3) {
        let left = levels[0];
        let midl = levels[1];
        let right = levels[2];
        let min = Math.min(left, right);

        if (left > midl && right > midl && min !== midl) {
            result += min - midl;
        }
    } else if (levels.length > 3) {
        for (let i = 0; i < levels.length - 1; i++) {
            let a = levels[i];
            let b = levels[i + 1];

            if (a > b) {
                result += a - b;
                prevNum = a;
            } else if (prevNum > b) {
                result += prevNum - b;
            }
        }
    }
    return result;
}
console.log(loadGrain([4, 1, 3]))// 2
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10])) // 7
console.log(loadGrain([2, 0, 1, 5, 2, 7])) // 6
console.log(loadGrain([2, 4, 2])) // 0
console.log(loadGrain([7, 4])) // 0
console.log(loadGrain([])) // 0



