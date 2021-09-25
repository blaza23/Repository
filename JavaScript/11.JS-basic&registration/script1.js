

// dohvatit podatke iz cijelog elementa a- jel nam se oni traze ko riješenje
const a = document.querySelector('#w3r'); 


// funkcija koja ce nam dohvacat svaki atribut i ispisivati ga
function getAttributes (){

    // ispiši mi (dohvati mi atribut href iz a elementa)
     console.log(a.getAttribute('href'));
     console.log(a.getAttribute('hreflang'));
     console.log(a.getAttribute('rel'));
     console.log(a.getAttribute('target'));
     console.log(a.getAttribute('type'));
}
