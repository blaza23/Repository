let max = 0;
let min = 0;

function highAndLow (stringNumber) {
    let newArray = stringNumber.split(' ');
    max = Math.max(...newArray);
    min = Math.min(...newArray)
    return [max, min];
}
console.log(highAndLow('1 2 3 4 5'));
console.log(highAndLow('1 2 -3 4 5'));
console.log(highAndLow('1 -9 3 4 -5'));
console.log(highAndLow('1 -9 3 10 -5'));