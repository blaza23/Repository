function loadAsset(url, type, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;
    xhr.onload = function() {
      callback(xhr.response);
    };
    xhr.send();
  }

  //1.dio.zadatka-pozivanje prvih pet!

  function showingFirstFive(data) {
      for(let i = 0; i < 5; i++){
          console.log(data[i]);
      }
    // ili ovako :
    // console.log(data.slice(0,5));
  }

  loadAsset('https://jsonplaceholder.typicode.com/todos', 'json', showingFirstFive )

  //2.dio.zadatka- ispis 1.titla

  function showFirstTitle(data){
      console.log(data[0].title);
  }

  loadAsset('https://jsonplaceholder.typicode.com/todos','json',  showFirstTitle);

 //Promise

 const myPromise = new Promise((resolve, reject) => {
     setTimeout(()=>{
         resolve('Bravo!');
     }, 500);
     });

     myPromise.then(msg => console.log(msg));
 
//Fetch

fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(data) {
    return data.json();
  }).then(function(json) {
    let posts = json;
    console.log(posts);
  }).catch(function(err) {
    console.log('Fetch problem: ' + err.message);
  });

//Fetch
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(response){
//     return response.json();
// }).then(function(json){
//     let info = json;
//     let id = info[1].id;
    
//     fetch('https://jsonplaceholder.typicode.com/userId=' + id).then(function (data){
//         return data.json();
//     }).then(function(userId){
//         let idUser = userId;
//         console.log(idUser);
//     });

// });

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json();
    }).then(function(json){
        let info = json;
        let userId = info[1].id;
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId).then(function (data) {
            return data.json();
        }).then(function (id) {
            let idUser = id;
            console.log(idUser);
        })
    });

// fetch s inputom i buttonom

let input = document.querySelector('#name');
let button = document.querySelector('.button');

d

