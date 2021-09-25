let button=document.querySelector('button');
const input=document.querySelector('input');
const body= document.querySelector('body');



function click_button(){

    if (input.value.length===0){
         alert ("Input field can't be empty");
    } else {
        let para= document.createElement('p');
        para.textContent=input.value;
        body.appendChild(para);

        let buttonx= document.createElement('button');
        let atribute=document.createAttribute('class');
        atribute.value='x';
        buttonx.setAttributeNode(atribute);

        let node=document.createTextNode('X');

        buttonx.appendChild(node);
        para.appendChild(buttonx);

        function allert_message(){
            if (confirm ("Are you sure?”")){
                body.removeChild(para);
            }
            
           }
       buttonx.addEventListener('click',allert_message);
    


    }
}

button.addEventListener('click',click_button);

