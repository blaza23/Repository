const button1 = document.querySelector('.but1');
const button2 = document.querySelector('.but2');
const theBox = document.querySelector('.box');

// direktno u JS mijenjamo style za css
function changeStyle (){
    theBox.style.backgroundColor ='red';
}

//klasi border iz css dodajemo togglamo joj promjenju
function addClass(){
    theBox.classList.toggle('border');
}

button1.addEventListener('click', changeStyle);
button2.addEventListener('click', addClass);
