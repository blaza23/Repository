const container = document.querySelector('.container');
function myFetch (numberPara = 10) {
    let i = 0;
    while(i < numberPara) {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
             json.forEach(element => {
            const para = document.createElement('p');
            para.innerHTML = `${element.title}`;
            container.appendChild(para);
            }); 
        });
        i++;
    }
}
myFetch();
// function handleIntersection (entries) {
//     // entries.forEach(entry => {
//         // if (entry.isIntersecting) {
//         //     myFetch(entry.target);
//         // }
//     // });
//     console.log(entries)
// }
// const options = {
//     threshold: 0.9
// }
// const observer = new IntersectionObserver(handleIntersection, options);
// observer.observe(container);
window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        myFetch();
    }
});













