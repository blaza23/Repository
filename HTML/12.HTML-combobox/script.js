// get the elements
const textbox = document.querySelector("#comboboxInput");
const listbox = document.querySelector("#comboboxListbox");
const combobox = document.querySelector ('#combobox');
const items = listbox.querySelectorAll('.result');
const KEYCODES = {
     Tab: 9,
     Emnter: 13,
     Escape: 27,
     Scape: 32,
     ArrowUp: 38,
     ArrowDown: 40,
};

const showListbox = () => {
   
    listbox.classList.remove('hidden');
    combobox.setAttribute('aria-expanden','true');

};

const hideListbox = () => {
    listbox.classList.add('hidden');
    combobox.setAttribute('aria-expanden','false');

    items.forEach((item) =>{
        item.classList.remove('highlighted');
    })

};

const checkToHide = (event) => {

    console.log(event.target);

    // hide listbox if clicked in etxtbox or  anywhere inside combobox
    if (event.target !== textbox && !combobox.contains(event.target)){
        hideListbox();
    }

    
};

const selectItem = (item) => {
    //set value to text field

    textbox.value = item.innerText;

    textbox.setAttribute('aria-activedescendant', items[newIndex].getAttribute('id'));
    


    //hide the listbox
    hideListbox();
}

const clickItem = (event) => {
 
    // if clicked on real option, call selectItem method
    if (event.target && event.target.nodeName === 'LI') {
          selectItem(event.target);
       
    }

};

const checkKey = (event) => {
   const key= event.which || event.keyCode;

    //prevent search on sontrol key (enter, escape, arrows)
    //console.log(key);

    switch (key){
        case KEYCODES.ArrowDown:
        case KEYCODES.ArrowUp:
        case KEYCODES.Escape:
        case KEYCODES.Enter:
         event.preventDayfault();
        default: 
        searchResults();
    }

};

const searchResults = () => {

    // get the value of text field

    const searchString = textbox.value.toLowerCase();
    const items = listbox.querySelectorAll ('.result');

    //filter the list items

    for (let i=0; i < items.length; i++ ){

        const item = items[i];

        //check if the item value starts with entered search string 

        if(item.textContent.toLocaleLowerCase().startsWith(searchString)){
            item.classList.remove('hidden');
        }
        else {
            item.classList.add('hidden');
        }

    }

};

const checkOfListboxVisible = () =>{
    if (listbox.classList.contains('hidden')){
        showListbox();
    }
}

const handleKeyboardInput = (event) =>{
       const key = event.which || event.keyCode;
       const itemsArray = Array.from(listbox.querySelectorAll('.result:not(.hidden)'));
       const numOfResults =itemsArray.length;
       let newIndex = itemsArray.findIndex((item) => {
            return item.classList.contains('highlighted');
       });

        //if ESC or Tab, hide listbox
        // if ArrowDown or ArrowUp, "navigate" trough list
       // if Enter, set the value to input field 


       switch(key) {

        //if ESC or Tab, hide listbox
           case KEYCODES.Escape:
           case KEYCODES.Tab:
              hideListbox();
              return;

        // if ArrowDown or ArrowUp, "navigate" trough list
           case KEYCODES.ArrowDown:
            checkOfListboxVisible();
               // calculate next item 

               //
               if(newIndex === numOfResults -1){
                   newIndex = 0;


               }
              else {
                newIndex++;
              }
               
               break;

            case KEYCODES.ArrowUp:
                checkOfListboxVisible();
                // calculate the previous intem

                if (newIndex <= 0){
                    newIndex = numOfResults -1;

                }
                else {
                    newIndex --;
                }
                break;

            case KEYCODES.Enter:

            if(newIndex  !== -1){
                event.preventDayfault();
                selectItem(itemsArray[newIndex]);
                return;

            }
               
               

            default:
                return;

       }

       //highlighting logic 
       // 1.korak remowe "highlighted" class for all
       itemsArray.forEach((item) => {
           item.classList.remove('highlighted');
       });

       //2.korak highlight the new item
       itemsArray[newIndex].classList.add('highlighted');
       textbox.setAttribute('aria-activedescendant', items[newIndex].getAttribute('id'));
};
// bind events
textbox.addEventListener('focus', showListbox);
document.body.addEventListener ('click', checkToHide);
listbox.addEventListener('click', clickItem);
textbox.addEventListener('keyup', checkKey);
textbox.addEventListener('keydown', handleKeyboardInput)
