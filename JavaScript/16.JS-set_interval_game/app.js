const buttonStart = document.querySelector('.start');
const circle = document.querySelector('.circle');

let interval = 0;
let counter = 0;

const hopHopCircle = () => {
   counter = 0;
    if (interval){
        clearInterval(interval);
    }
    randomInterval();
}


const randomInterval = () => {

    interval = setInterval(function(){

        circle.style.top = Math.floor(Math.random() * 500) + 'px';
        circle.style.left = Math.floor(Math.random() * 500)+ 'px';
        counter ++;

        if(counter === 10){
            circle.style.backgroundColor ='red';
            clearInterval(interval);
        }
        
    }, 500);

}
buttonStart.addEventListener('click', hopHopCircle);

const stopingTheGame = () =>{
    clearInterval(interval);
    circle.style.backgroundColor = 'green'
}
circle.addEventListener('mouseover', stopingTheGame);