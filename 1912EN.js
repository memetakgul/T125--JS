

        // Constructor:

// Constructor is a special function used as a template to create new objects.
// One of the main purposes of using a constructor is to create multiple objects from the same template.

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
    this.made = made;
    this.model = model;
    this.year = year;
    this.setMiles = function(miles){
        this.miles = miles;
        return miles;
    }
  }

  let car1 = new Car('Bugatti', 'Chiron', 2023);
  console.log(car1);//Car { made: 'Bugatti', model: 'Chiron', year: 2023 }

  let car2 = new Car('Ferrari', 'F50', 1990);
  console.log(car2);

  car2.setMiles(50000);
  console.log(car2);
  /*
  Car {
  made: 'Ferrari',
  model: 'F50',
  year: 1990,
  setMiles: [Function (anonymous)],
  miles: 50000
}*/

// Prototype:
// Let's create a prototype named age for the car's age:
// The prototype property in JavaScript is used to reference other objects in the prototype chain.
// The prototype property is usually used on a function object.
Car.prototype.age = function(){
    let ageOfCar = new Date().getFullYear() - this.year;
    return ageOfCar;
}

console.log(car2.age());//33
console.log(car1.age());//0





// Conditional Statements:
// 1) if/else Statements: used when there's a single condition.

let hr = new Date().getHours();
console.log(new Date().getHours());//3

if(hr<20){
    console.log('Good Evening');//Good Evening
}


//Ex
if(hr>20){
    console.log('Good Day');
}else{
    console.log('this is else part');
}//this is else part



// 2) else-if Statements: used when there are multiple conditions.
let x = 20;
if(x<10){
    console.log('x is lesser than 10');
}else if(x<15){
    console.log('x is between 10 and 15');
}else if(x < 20){
    console.log('x is between 15 and 20');
}else{
    console.log('x is greater than 19');
}//x is greater than 19



// Ex: 
let w = 6;

if(w%2 == 0){
    if(w%3 == 0){
        console.log('the number is divisible by both 2 and 3');
    }else{
        console.log('the number is divisible by 2');
    }


}else{

    console.log('Odd number');

}//the number is divisible by both 2 and 3




// 3) Switch Statements:
    let day = new Date().getDay(); //3 for wednesday
    let x1= 8;
    switch(x){
        case 0:
            console.log('Its a Sunday');
            break;
        case 1:
            console.log('Its a Monday');
            break;
        case 2:
            console.log('Its a Tuesday');
            break;
        case 3:
            console.log('Its a Wednesday');
            break;  
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        default:
                console.log('Invalid day');

    }

    
//Ex
let a = '11'; // === 
    switch(a){
        case 11:
            console.log('this is number type eleven');
            break;
        case '11':
            console.log('this is string type eleven');
            break;
        default:
            console.log('this isn\'t eleven');

    }




// 4) Ternary operator (?):
// Syntax: condition ? if true this code block runs : if false this code block runs

let k= 14;
let result = k<10 ? 'k is lesser than 10' : 'k is greater than 10';
console.log(result);



//Ex
let w2 = 3;
let y2 = 5;
let z2 = 7;

let result3 = w<10 ? y<10 ? z<10 ? 'wTyTzT' : 'wTyTzF' : 'wTyF' : 'wF';
console.log(result2);//wTyTzT


// Ex: 
let w3 = 13;
let y3 = 5;
let z3 = 7;
let result4 = w<10 ? y<10 ? z<10 ? 'wTyTzT' : 'wTyTzF' : 'wTyF' : 'wF';
console.log(result2); // wF

// Ex: 
let w4 = 3;
let y4 = 15;
let z4 = 7;
let result5 = w<10 ? y<10 ? z<10 ? 'wTyTzT' : 'wTyTzF' : 'wTyF' : 'wF';
console.log(result2);//wTyF

//Ex
let w5 = 3;
let y5 = 5;
let z5 = 17;
let result6 = w<10 ? y<10 ? z<10 ? 'wTyTzT' : 'wTyTzF' : 'wTyF' : 'wF';
console.log(result2);//wTyTzF


//Ex
let w6 =4;
let y6 =11;
let result7 = w<10 ? y<10 ?  'wTyT' : 'wTyF' : 'wF' ;
console.log(result2);//wTyF



// Loops:
// 1) for-loop:
// If you know exactly how many iterations you will perform, you can use this loop.
//Ex

for(let i = 1 ; i<100 ; i++){
    console.log('Number is ' +i);

}

for(let i = 1 ; i<100 ; i+=5){
    console.log('Number is ' +i);

}


//Ex
let a2 = 100;// declare outside of loop

for(let a = 1 ; a<50 ; a+=2){// declare inside of block-scope
    console.log(a);

}
console.log(a);// 100 ==> Variables declared with the "let" keyword are block-scoped, meaning they cannot be accessed from outside that code block.
// The variable 'a' here refers to the 'a' declared before the 'for' loop.



// 2) while-loop:
// This loop is used when the increment/decrement operation is complex or when the exact number of iterations is unknown.

let a3 = 1;

while(a<51){
    console.log(a)


    a++;
}


// 3) do-while loop:
// Use this loop when you want a code block to run at least once.
// It runs the code block at least once even if the condition is false.

let a4 = 1;

do{
    console.log(a)


    a++;
}while(a<0);

//Ex

let n = 10;

do{
    console.log(n);//10 , 20 , 30, 40, 50
    n+=10;
}while(n<51)

console.log(n);//60


//Ex
let n1 = 50;

do{
    console.log(n);//50
    n+=10;
}while(n<51)

console.log(n);//60