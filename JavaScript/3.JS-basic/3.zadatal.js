// const input = document.querySelector('.js-input');

// function listener (event){
//     event.target.value;
//     console.log(input.value);

// }

// input.addEventListener('keydown',listener);



document.querySelector('.js-input').addEventListener('keydown', (event) => {
    if (event.key === '5') {
        event.preventDefault();
        console.log(event);
    }
    
})
