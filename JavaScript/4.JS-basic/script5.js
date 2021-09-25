const button = document.querySelector('#btn');
const target = document.querySelector('#target');
let counter=0;


function start(){
    
    target.style.position = "absolute";
    target.style.top = `${Math.ceil(Math.random()*(700-0)+0)}px`;
    target.style.left = `${Math.ceil(Math.random()*(700-0)+0)}px`;
    target.style.right = `${Math.ceil(Math.random()*(700-0)+0)}px`;
    target.style.bottom = `${Math.ceil(Math.random()*(700-0)+0)}px`;
   
    
    
    
}

setInterval(start, 1000);
button.addEventListener('click',start);