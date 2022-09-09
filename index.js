function loadGrain(levels) {
    let result = 0

    if (levels.length < 3) {
        return 0
    }

    if (levels[0] > levels[levels.length - 1])
        for (let i = levels.length - 1; i >= 0; i--) {
            if (levels[i] > levels[i - 1]) {
                result += levels[i] - levels[i - 1]
                levels[i - 1] = levels[i]
            }
        }
    else {
        for (let i = 0; i < levels.length; i++) {
            if (i + 1 === levels.length - 1) {
                break
            }
            if (levels[i] > levels[i + 1]) {
                result += levels[i] - levels[i + 1]
                levels[i + 1] = levels[i]
            }
        }
    }
    return result;
}

loadGrain([15, 0, 6, 10, 11, 2, 5])//20g
loadGrain([4, 1, 3])// 2
loadGrain([2, 1, 5, 2, 7, 4, 10])// 7
loadGrain([2, 0, 1, 5, 2, 7]) // 6
loadGrain([2, 4, 2]) // 0
loadGrain([7, 4]) // 0
loadGrain([]) // 0



