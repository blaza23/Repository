//1.zadatak

function floor(number){
    if(number<0){
        return number;
    }else if (number >= 13){
        return number -2;
    }
    else if (number > 0){
        return number + 1;
    }
}
console.log(floor(-5));
console.log(floor(15));
console.log(floor(5));
console.log(floor(18));

//2. zadatak 

function time(hours){
    let liters;
    let wather_per_hour=0.5;

    liters= hours * wather_per_hour;
    return Math.floor((liters));


}
console.log(time(3));
console.log(time(6.7));
console.log(time(11));

//3.zadatak 

function century(year){
   
    stoljece = Math.ceil(year/100);
    console.log(stoljece);
}
century(1987);



