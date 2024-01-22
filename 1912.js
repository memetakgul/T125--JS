 
 
            // Constructor:

// Constructor özel bir function dır, yeni object ler oluşturmak için kullanılan bir template tır.
// Constructor kullanmanın en önemli amaçlarından biri aynı sablondan birden fazla object oluşturmaktır.

// 1. Built-in JS Constructors:
/*
new String()    // a new String object
new Boolean()   // a new Boolean object
new Array()     // a new Array object
new Date()      // a new Date object
.
.
.
*/

//2. Creating Constructor
function Car(made, model, year){
    this.made= made;
    this.model=model;
    this.year=year;

    this.setMiles=function(miles){
        this.miles = miles;
        return miles;
    }
}
//Constructor kullanarak object olusturma
let car2 = new Car('Bugatti','Chiron',2023);
console.log(car2);//Car { make: 'Bugatti', model: 'Chiron', year: 2023 }
console.log(typeof car2);//object

let car1=new Car('Ferrari', 'F50', 1990);
console.log(car1);//Car { made: 'Ferrari', model: 'F50', year: 1990 }
car1.setMiles(50000);
console.log(car1);
/*Car {
  made: 'Ferrari',
  model: 'F50',
  year: 1990,
  setMiles: [Function (anonymous)],
  miles: 50000
}*/

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create two Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  console.log(myFather);
  console.log(myMother);


// Prototype: 

// Arabanın yaşı için age isimli prototype oluşturalım:
// JavaScript'te prototype özelliği, bir nesnenin prototip zincirinde bulunan diğer nesneleri referanslamak için kullanılır.
// prototype özelliği genellikle bir fonksiyon nesnesi üzerinde kullanılır

Car.prototype.age = function(){
                let ageOfCar = new Date().getFullYear() - this.year;
                return ageOfCar;
}

console.log(car1.age());//33




        // Conditional Statements:


// 1) if/else Statements: tek condition olduğunda kullanılır

let hr = new Date().getHours(); //21
if(hr>20){
    console.log('Good Evening');
}

//Ex
if(hr<20){
    console.log('Good Day');
}else{
    console.log('Good Evening');
}

// 2) else-if Statements: Birden fazla condition olduğunda kullanılır. İhtiyaç olduğu kadar
        // else-if kullanılabilir.


            //ic ice if eger ilk condition true ise iceri girer.
            //else if de ilk if condition false ise else if calisir.


if(hr<11){
    console.log('Good Morning');
}else if(hr<20){
    console.log('Good Day');
}else if(hr<23){
    console.log('Good Evening');
}else{
    console.log('Good Night');
}
//Good Evening

// Ex: Bir sayının ilk once 2'ye bolunup bolunmedigini kontrol edelim. Eger 2'ye bolunmuyorsa konsola 'odd Number' yazilsin.
// Eger 2'ye bolunuyorsa tekrar dan 3'e de bolunup bolunmedigini kontrol edelim.

let x = 7;

if(x%2 == 0){
    if(x%3 == 0){
        console.log('sayi hem 2\'ye hemde 3\'e tam bolunmektedir');
    }else{
        console.log('sayi cift sayidir ve sadece 2\'ye bolunmektedir');
    }

}else{
    console.log('tek sayi');
}



// 3) Switch Statements:
let day= new Date().getDay();
console.log(day);//2
switch(day){
    case 0:
    //case 1: 2 adet durumu ayni anda kontrol etmek icin alt alta case degerleri yazabilirsiniz
        console.log('Pazar');
        break;
    case 1:
        console.log('Pazartesi');
        break;
    case 2:
        console.log('Sali');    
        break;
    case 3:
        console.log('Carsamba');
        break;
    case 4:
        console.log('Persembe');
        break;
    case 5:
        console.log('Cuma');
        break;
    case 6:
        console.log('Cumartesi');
        break;
    default:
        console.log('Boyle bir gun yok');

}

// break yazmazsak hepsini calistirir. break ile buldugu yeri caslistirir. 


//Ex
let a= '11';  

switch(a){   // switch e verilen degerlerin data type'lari da kontrol edilir. Yani === gibi calisir.
    case 11:
        console.log('equals');
        break;
    case '11':
        console.log('strictly equals');
        break;
    default:
        console.log('herhangi bir sekilde belirttiginiz deger bulunmamaktadir');

}// strictly equals ==> demek ki, switch hem type ını kontrol eder hem de value sunu (checks if strictly equals)





// 4) Ternary operator (?):
// Syntax: condition ? if true this code block runs : if false this code block runs

let k =10 , l=14;

let result = k<l ? 'k kucuktur l' : 'k buyuktur l';
console.log(result);//k kucuktur l



//Ex 
let w = 3;
let y = 5;
let z = 7;

let result2 = w<10 ? y<10 ? z<10 ? 'wTyTzT' : 'wTyTzF' : 'wTyF' : 'wF';

console.log(result2);//wTyTzT


// Ex: 
let w2 = 13;
let y2 = 5;
let z2 = 7;
let result1 = w<10 ? y<10 ? z<10 ? 'wTyTzT' : 'wTyTzF' : 'wTyF' : 'wF';
console.log(result2);//wF

// Ex: 
let w3 = 3;
let y3 = 15;
let z3 = 7;
let result4 = w<10 ? y<10 ? z<10 ? 'wTyTzT' : 'wTyTzF' : 'wTyF' : 'wF';
console.log(result2); //wTyF

// Ex: 
let w4 = 3;
let y4 = 5;
let z4 = 17;
let result5 = w<10 ? y<10 ? z<10 ? 'wTyTzT' : 'wTyTzF' : 'wTyF' : 'wF';
console.log(result2); //wTyTzF



            // Loops:


// 1) for-loop:

// Tam olarak kaç defa iteration yapacağınız belliyse bu loop u kullanabilirsiniz.

let kacDefaCalisti = 0;// Disarda olusturdugumuz degerler, icerde yeni atanan degerleri hatirlar.
for(let i =1       ; i<101     ; i++ ){
//baslangic degeri ; condition ; loop bitiminde arttir
    kacDefaCalisti+=1;
    console.log('sayi = ' + i + ' kac defa calistinin degeri = ' + kacDefaCalisti);
}

//Ex
for(let i =1 ; i<101 ; i+=5){
    console.log('sayi = ' + i);
}


//Ex
let j =100;

for(let j =1 ; j<101; j+=2){
    console.log(j);
}
console.log(j);// 100 ==> "let" keyword ile declare edilen variable lar block-scope tur. Yani o code bloğu dışından ulaşılamaz.
// buradaki j variable ı for bloğundan önceki tanımlanan j variable ıdır.


//Ex
var p=100;

for(var p = 0; p<51 ; p+=2){
    console.log(p);// 0, 2, 4, 6...
}
console.log(p);//52 ==> "var" block-scope değildir.



// 2) while-loop:

// increment/decrement operation ının karmaşık olduğu, kaç defa iteration yapılacağının tam belli olmadığı durumlarda bu loop kullanılır. 

let m = 0;

while(m<51){
    if(m%2 == 0){
        console.log(m+ ' cift sayidir');
    }else{
        console.log(m+ ' tek sayidir');
    }
 
    m++; 
}


// 3) do-while loop:
// en az bir kere çalışmasını istediğiniz bir kod varsa bu loop u kullanınız.
// condition false olsa bile code bloğunu en azından bir kere çalıştırır.

let r = 0;

do{//conditionu görene kadar en azindan bir kere çalışır
    if(r%2 == 0){
        console.log(r+ ' cift sayidir');
    }else{
        console.log(r+ ' tek sayidir');
    }
 
    r++; 
}while(r<0);

