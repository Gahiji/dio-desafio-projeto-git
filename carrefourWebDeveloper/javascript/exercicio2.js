const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(workArray) {
    const mySet = new Set(workArray);

    return [...mySet];
}

console.log(valoresUnicos(myArray));