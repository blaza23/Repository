

function arrayDiff(x,y) {
    return x.filter(element => !y.includes(element));
}


console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));