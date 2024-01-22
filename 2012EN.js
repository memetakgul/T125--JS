// "break" keyword:
// If you want to run a loop until a specific value, you can use this.
for(let i =1 ; i<11 ; i++){
    
    if(i==5){
        break;// Exit the loop when encountered, skip the rest.
    }
    console.log(i);//1, 2, 3, 4
}


// "continue" keyword:
// If you don't want to execute the code for a specific value, you can use this.

for(let i =1 ; i<11 ; i++){  
    if(i==5){
        continue;
    }
    console.log(i);//1, 2, 3, 4, 6, 7, 8, 9, 10 ==> Skipped 5, didn't print it
}


// 4) for in-loop:
/* - Iterates over properties in an object.
   - Each iteration brings keys (x) of the object and runs the loop.
   - Using the key, you can access the value associated with that key ==> objectName[x].
*/

const person = {
    fname: 'Ahmet',
    lname: 'OZ',
    age: 33
};

//console.log(person.fname);//Ahmet
//console.log(person['fname']);//Ahmet


for(let y in person){
    console.log(y);//fname, lname, age
}

for (let x in person) {
    console.log(person[x]); //Ahmet, OZ, 33
}


// Array in for-in loop
const numbers=[5, 2 , 8 , 12];

for(let a in numbers){
    console.log(a);//0, 1, 2, 3
}

for(let b in numbers){
    
    console.log(numbers[b]);//5, 2 , 8 , 12
}


// 5) for of-loop:
// Iterates over the values in an object. Works with Arrays, Strings, Maps, Sets, etc.

const numbers2=[5, 2 , 8 , 12];

for(let a of numbers2){
    console.log(a);//5, 2 , 8 , 12
}




let str = 'I love Javascript very much!';
let sessiz ='';

for(let x of str){
    if(x=='a' || x=='o' || x=='e' || x=='u' ||x=='i' || x=='I' ){
        continue;
    }
    sessiz += x;
    
}
console.log(sessiz);


//Ex
const person2 =new Map([
    ['Wise', 1], ['Quarter',2]
]
)

for(let z of person2){
    console.log(z); //['Wise', 1], ['Quarter',2]
}

// mapName.keys() ==> Brings the keys of the Map.
// mapName.values() ==> Brings the values of the Map.


// JavaScript classes
// Classes are templates for creating objects.
// Should use the "class" keyword.
/* Constructor:
   Special function.
   Should be used within the class. If you don't add it, JS creates an empty constructor for you.
   Automatically invoked when an object is created from that class.
   Used to initialize object properties.
*/
/*
Syntax structure
class ClassName {
    constructor() { ... }
    method_1() { ... }
    method_2() { ... }
    method_3() { ... }
}
*/

class Car{
    constructor(name, year){
        this.carName= name;
        this.carYear=year;
    }

    age(a){
        let dt = new Date();
        let result= dt.getFullYear() - this.carYear;
        return result;
    }
}

let car1= new Car('Tofas', 1990);
console.log(car1);//Car { carName: 'Tofas', carYear: 1990 }
console.log(car1.age());//33


// Class Inheritance:
// Using the "extends" keyword in the child class.

class Car{ //SuperClass / Parent
    constructor(a){
        this.carBrand = a;
        this.carDeneme;
    }

    present(){
        return 'My car is: ' + this.carBrand;
    }

}



class Model extends Car{
        constructor(childBrand, model){
            
            super(childBrand);
            this.carModel= model;
        }

        show(){
            return this.present() + ' this data comes from the superClass ====>  ' + this.carModel + ' this data comes from the child';
        }
}

let car2 = new Model('Tofas', 'Slx');
console.log(car1);//Model { carBrand: 'Tofas', carModel: 'Slx' }
console.log(car1.show());//My car is: Tofas this data comes from the superClass ====>  Slx this data comes from the child




// Static Keyword:
class Car3 {
    constructor(name) {
        this.carName = name;
    }
    static hello() {
        return 'You cannot reach me by object, if you want to reach me use ClassName';
    }
}

let myCar3 = new Car3('Bugatti Chiron');
console.log(myCar3); // Car3 { carName: 'Bugatti Chiron' }
//console.log(myCar3.hello()); // Cannot access the method through an object.
console.log(Car3.hello()); // You cannot reach me by object, if you want to reach me use ClassName

// Access static functions with className.functionName() and non-static functions with objectName.functionName().