// 2. zadatak

function shapesCalculator (a, b, c,){

    if (arguments [0] && arguments[1] && arguments [2]){
        //Opseg trokuta: ot=a+b+c
        let ot=a+b+c;

        //Površina pravokutnog trokuta: ppt=(a*b)/2
        let ppt=(a*b)/2;

        //Kut alfa: 
        let ka= Math.asin(arguments[0] / arguments[2]) * 180/Math.PI;


        //Kut beta:
        let kb= 180-90-ka;

        return 'Opseg trokuta: ' + ot + '\n' + 'Površina pravokutnog trokuta: ' + ppt + '\n' +'Kut alfa: '+ ka + '\n' + 'Kut beta: ' +kb ;
    } else if (arguments[0] && arguments[1]) {
        // Opseg pravokutnika: o=2*(a+b)
        let op=2*(a+b);

       //Površina pravokutnika: p=a*b
       let pp=a*b;

       return 'Opseg pravokutnika: ' + op + '\n' + 'Površina pravokutnika: ' + pp ;
    } else if ( arguments[0]){
        // opseg kruga-> O=2r*Pi, r=a
       let o = 2 * a * Math.PI;

       // površia kruha--> P=r**2*Pi, r=a
       let p = a ** 2 * Math.PI;

       return 'Opseg kruga: ' + o + '\n' +  'Površina kruga: '   + p ;

    }
}
console.log(shapesCalculator(4));
console.log(shapesCalculator(-1));
console.log(shapesCalculator(8, 4));
console.log(shapesCalculator(1, 10));
console.log(shapesCalculator(6, 8, 10));