async function myFetch() {
    const random = () => {
        return Math.ceil(Math.random() * 897 + 1);
    } ;
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random()}`);
        let myJson = await response.json();
        console.log(myJson);
        let image = document.createElement('img');
        let typeId = document.createElement('div');
        image.src = myJson.sprites.front_default;
        typeId.innerHTML = `Type: ${myJson.types[0].type.name}, ID: ${myJson.id}`;
        
        document.body.appendChild(image);
        document.body.appendChild(typeId); 
}
const button = document.querySelector('button');
button.addEventListener('click', () => {
    myFetch();
});


// const container = document.querySelector(".pokemonInfo");
// const button = document.querySelector("button");
// const random = () => {
//   return Math.floor(Math.random() * 897 + 1);
// };
// button.addEventListener("click", async () => {
//   container.innerHTML = "";
//   await fetch(`https://pokeapi.co/api/v2/pokemon/${random()}`)
//     .then((response) => response.json())
//     .then((json) => generatePokemon(json))
//     .catch((err) => console.log(err));
// });
// const generatePokemon = (data) => {
//   const img = document.createElement("img");
//   img.setAttribute("src", data.sprites.front_default);
//   container.appendChild(img);
//   //type
//   for (let i = 0; i < data.types.length; i++) {
//     const type = document.createElement("p");
//     type.innerHTML = data.types[i].type.name;
//     container.appendChild(type);
//   }
//   //id
//   const id = document.createElement("p");
//   id.innerHTML = data.id;
//   container.appendChild(id);
// };