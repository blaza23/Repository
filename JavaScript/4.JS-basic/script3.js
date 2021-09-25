window.addEventListener('keydown', klicking);

function klicking(event){
 document.querySelector('p').innerHTML=`You pressed ${event.key}`;
  

};