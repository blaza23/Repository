const meter = document.querySelector("meter");
const input = document.querySelector("input");



const howStrongIsPassword = () => {

    if(input.value.length < 8){
        meter.value = 31;
    }
    if( input.value.length > 8){
        meter.value = 45;
    }
    if(input.value.length >= 12){
        meter.value = 100;
    }

}

input.addEventListener('keyup', howStrongIsPassword);