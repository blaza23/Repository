// 1. zadatak
let minutesMil = 1000 * 60;
let hoursMil = minutesMil * 60;
let daysMil = hoursMil * 24;
let mounthsMil = daysMil * 31;
let yearsMil = mounthsMil * 12;
const timePassCalculator = (doomsday) =>  {
    let todaysDate = new Date();
    let time = Math.abs(todaysDate.getTime() - doomsday.getTime());
    let years = Math.floor(time / yearsMil);
    let mounths = Math.floor((time / mounthsMil) % 12);
    let days = Math.floor((time / daysMil) % 31);
    let hours = Math.floor((time / hoursMil) % 24);
    let minutes = Math.floor((time / daysMil) % 60);
    return "D: " + days + ", M:"  + mounths + ", Y: " + years + ",  H: " + hours + ", MIN: " + minutes ;
}
console.log(timePassCalculator(new Date("04.01.1954.")));
console.log(timePassCalculator(new Date("06.29.2021.")));
console.log(timePassCalculator(new Date("07.07.2021.")));
console.log(timePassCalculator(new Date("01.12.2062.")));

// function timePassCalculator (date){
//     let todaysDate= new Date();
  
//     let y= todaysDate.getFullYear();
//     let past_y=date.getFullYear();
//     let Y= (Math.abs(y-past_y));
    

//     let m= todaysDate.getMonth();
//     let past_m=date.getMonth();
//     let M= (Math.abs(m-past_m));
    

//     let d= todaysDate.getDate();
//     let past_d=date.getDate();
//     let D= (Math.abs(d-past_d));
  
//     let h= todaysDate.getHours();
//     let past_h=date.getHours();
//     let H= (Math.abs(h-past_h));

//     let min= todaysDate.getMinutes();
//     let past_min=date.getMinutes();
//     let Min= (Math.abs(min-past_min));

//     if(m===date.getMonth()&& d ===date.getDate()){
      
//         return ' Y: ' + Y +
//         ' M: ' + '0' + 
//         ' D: ' + '0' +
//         ' H: ' + (math.abs(24 - todaysDate.getHours)) +
//         ' Min: ' + (math.abs(60-todaysDate.getMinutes()));

//     } else if (m === date.getMonth()){
//         return 'Y: ' + Y +
//         ' M: ' + '0' +
//         ' D: ' + D +
//         ' H: ' + H +
//         ' Min: ' + Min;
//     }
//     return 'Y: ' + Y +
//     ' M: ' + M +
//     ' D: ' + D +
//     ' H: ' + H +
//     ' Min: ' + Min;
// }
    



// console.log(timePassCalculator(new Date('01.04.1954.')));
// console.log(timePassCalculator(new Date('06.29.2021.')));
// console.log(timePassCalculator(new Date('07.07.2021.')));
// console.log(timePassCalculator(new Date('12.01.2062.')));