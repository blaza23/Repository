const select =document.querySelector('select');

fetch('https://restcountries.eu/rest/v2/all')
.then (function (response){
    return response.json();
})
.then(function(json){

    json.forEach(item => {
        let options = document.createElement('option');
        options.innerHTML = item.name;

        select.appendChild(options);
    });
})
.catch(function(error){
    console.log(error);
})