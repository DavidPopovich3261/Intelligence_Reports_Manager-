
const compareFunc = (a, b) =>
    a.length === b.length &&
    a.every((element, index) => element === b[index]);

export {compareFunc}



