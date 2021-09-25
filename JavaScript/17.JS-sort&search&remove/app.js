//Neki objekt:
const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];

const list = document.querySelector ('.list');

const sortName = document.querySelector('#sortName');
const sortValue = document.querySelector('#sortValue');
const search = document.querySelector('#searchInput');


const renderTemplate = (items) => {
  const source = document.querySelector('#listTemplate').innerHTML;
const template = Handlebars.compile(source);
const output = template({person:items});
list.innerHTML = output;
}

renderTemplate(items);




//za brisanje Osoba na klik na gumb delete
const deletePerson = (event) =>{
  if(event.target.closest('.delete')){
    event.target.parentElement.remove();
  }
  else{
    event.preventDefault();
  }
}

list.addEventListener('click', deletePerson);

//sortiranje imena od (A-Z) i od (Z-A)
const sortingByName = (event) =>{
  if(event.target.value === 'A-Z'){
    items.sort((x,y) => x.name.localeCompare(y.name));
    console.log(items);
    renderTemplate(items);
      
  }else if(event.target.value === 'Z-A'){
    items.sort((x,y) => y.name.localeCompare(x.name));
    console.log (items);
    renderTemplate(items);
  }
}
sortName.addEventListener('change', sortingByName);

//sortiranje value
const sortByValue = (event) => {
  if(event.target.value === 'fromHighestNumber'){
    items.sort((x,y) => {
      if (x.value > y.value){
        return -1;
      }
      else if(x.value < y.value){
        return 1;
      }
      return 0;
     
    });
    console.log(items);
    renderTemplate(items); 
  }
  else if( event.target.value === 'fromLowestNumber'){
    items.sort((x,y) => {
      if (x.value > y.value){
        return 1;
      }
      else if(x.value < y.value){
        return -1;
      }
      return 0;
    })
    console.log(items);
    renderTemplate(items);
  }
}
sortValue.addEventListener('change', sortByValue);


//za search
const searchItems = (event) => {
  list.innerHTML = ''; //sve obrisala
  let filterItems = items.filter(item => item.name.toLowerCase().startsWith(event.target.value.toLowerCase()));
  renderTemplate(filterItems);
}
search.addEventListener('keyup', searchItems);