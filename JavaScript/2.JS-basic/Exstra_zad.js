
//1.zadatak

function fibonacci(n) {

    if (n === 0) {
        return 1;
    } else if (n === 1) {
        return 1;
    } else {
        return (fibonacci(n - 1) + fibonacci(n - 2));
    }

}
for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}

//2.zadatak

const star = '*';
function stars() {
    for (let i = 0; i < 1; i++) {
        console.log(star);
        for (let j = 0; j < 2; j++) {
            console.log(star);
        }
        for (let k = 0; k < 3; k++) {
            console.log(star);
        }
        for (let l = 0; l < 4; l++) {
            console.log(star);
        }
        for (let m = 0; m < 5; m++) {
            console.log(star);
        }
    }
}
stars();

//3.zadatak

let how_frequently = Number(prompt("1.Dnevno, 2.Tjedno, 3.Mjesecno", ""));
let time_period = Number(prompt("Koliki vremenski period?", ""));
let amount_money = Number(prompt("Koliki iznos novaca: ", ""));

function Saving_Calculator(how_frequently) {

    switch (how_frequently) {
        case 1:
            return 31 * time_period * amount_money;
        case 2:
            return 4 * time_period * amount_money;
        case 3:
            return time_period * amount_money;
        default:
            return "Krivi unos!";
    }
   
}

console.log(Saving_Calculator(how_frequently));