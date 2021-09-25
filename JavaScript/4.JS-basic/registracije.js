//kreiranje konstruktor funkcije - objekty
let today = new Date();
let price = 0;
let dayOfRegistration;
let monthOfRegistration;
let yearOfRegistration;
let valid;
let ageOfOwner; 
let ageOfCar;

function registrationInfo(name, surname, birthOfOwner, brand, model, horsepower, firstRegistration){
    this.name = name;
    this.surname = surname;
    this.birthOfOwner = birthOfOwner;
    this.brand = brand;
    this.model = model;
    this.horsepower = horsepower;
    this.firstRegistration = firstRegistration;
    

    this.errorRegistration = function (){

    ageOfOwner = today.getFullYear() - this.birthOfOwner.getFullYear();
   

        if ((ageOfOwner < 21  && this.horsepower > 100) && ageOfOwner < 18){
            return false;   
            
        }else {
            return true;
        }
    }
        
        this.price = function() {
            ageOfCar = today.getFullYear() - this.firstRegistration.getFullYear();
            if( ageOfCar < 10){
               return price = 1250;
   
           } else if ( ageOfCar > 10){
             return price = 1450;
           }
        }
    this.validRegistration = function (){
        dayOfRegistration = this.firstRegistration.getDate();
        monthOfRegistration = this.firstRegistration.getMonth() +1;
        yearOfRegistration = today.getFullYear() +1;

        valid = dayOfRegistration + '.' + monthOfRegistration + '.' + yearOfRegistration +'.';
        let age = this.errorRegistration();
        let price1 = this.price();
        let birth = '0' +this.birthOfOwner.getDate() + '.' + this.birthOfOwner.getMonth()+1 + '.' + this.birthOfOwner.getFullYear();

        if(age){
            console.log('Owner: ' + this.name + ' ' + this.surname +'\n'+ 'Born: ' + birth + '.' + '\n'+ 'Car: ' + this.brand + ' ' + this.model + '\n'+ 'Registration is valid till:' + valid + '\n'+ 'Price: ' +price1 + ' HRK');
        } else {
            alert('The registration can’t be completed!');
        }

            
    }

    this.validRegistration();
 }

 new registrationInfo('Honey', 'Bunny', new Date('1912-1-1'), 'Fiat', 'Punto', 100, new Date ('1990-12-12'));