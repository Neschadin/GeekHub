function findMatrixCoordinates(R, C, y, x) {

    function validator(arg1, arg2) {
        return typeof arg1 === "string" ||
            typeof arg2 === "string" ||
            !/^([1-9]|[1-9][\d]|[1][0][0])$/.test(arg1) ||
            !/^\d*$/.test(arg2) ||
            arg2 >= arg1;
    }

    if (validator(R, y) || validator(C, x)) return "Please provide a valid number";

    const arr = [];
    let i = 1;
    let stepR = 0;
    let stepC = 1;
    let incr = 2;

    while (i <= R * C) {
        for (let j = 1; j < incr; j++) {
            if (x >= 0 && x < C && y >= 0 && y < R) {
                arr.push([y, x]);
                i += 1;
            }
            y += stepR;
            x += stepC;
        }

        if (stepC === 1) {
            stepR = 1;
            stepC = 0;
        } else if (stepR === 1) {
            stepR = 0;
            stepC = -1;
            incr += 1;
        } else if (stepC === -1) {
            stepR = -1;
            stepC = 0;
        } else if (stepR === -1) {
            stepR = 0;
            stepC = 1;
            incr += 1;
        }

    }

    return arr;
}


findMatrixCoordinates(1, 4, 0, 0);