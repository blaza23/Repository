//1. zadatak

function Convert_Letter (rijec) {
    return rijec.charAt(0).toUpperCase() + rijec.slice(1);
}
console.log(Convert_Letter("knjiga"));

//2. zadatak

function Character_Seperate (rijec) {

   for (let index = 0; index < rijec.length; index++) {
       console.log(rijec.charAt(index));
       console.log(rijec[index]);
   }
}
Character_Seperate("more");

//3.zadatak

let novo_ime = " ";
function info(age,name){
   
    if (age%2 != 0){
        
         for (let index = name.length-1; index >= 0; index--) {
             novo_ime += name[index];
         }
         return novo_ime;
        }
        else if(age%2 ==0){
            return name + age;
        
        }    
        else if(age>100 || name.length > 10) {
            return name;
        }

    }

        console.log(info(24,'John'));

//4.zadatak

let brojsati=' ';
let i=0;
do{
    i++;
    brojsati=brojsati + i + ' ';
}while(i<=12)
console.log(brojsati);
