

//  2. Number
const pi = 3.14;
let r = 5;
console.log(typeof pi); //number
console.log(typeof r);  //number


// Numeric String : If there are only numbers in the string, JS can use them as numbers where necessary
let x = '100';
let y = '10'
let w = 5;
let z = x / y; 
console.log(z); // 10
console.log(typeof z) //number
console.log(y / w) // 2


// If the "+" sign is next to string, it performs concatenation
console.log(y + w); // 105
console.log(w + y); // 510
console.log(typeof (y + w));//string

// Number Methods and Properties

// 1) toString() : Converts a number to a string.
let u =111;
let uv = u.toString();
console.log(uv);//111
console.log(typeof uv);//string


// 2) toExponential(): Writes the number in Exponential Notation. Converts the result to a string.
//    Places the decimal point after the first digit from the left and rounds to the numerical value of the parameter digits after the decimal point.

let X = 5;
console.log(X.toExponential(2)); // 5.00e+0

let X2 = 555;
console.log(X2.toExponential(2)); // 5.55e+2 ==> 5.55 * 10^2 

let X3 = 5555;
console.log(X3.toExponential(2)); // 5.56e+3

let X4 = 54321;
console.log(X4.toExponential(3)); // 5.432e+4

// 3)toFixed(); Rounds the decimal part to the number of digits specified, Returns a string

let a = 19.6543;
console.log(a.toFixed()) // 20
console.log(a.toFixed(1)) //19.7
console.log(a.toFixed(2)) // 19.65


// 4) toPrecision(); Rounds the number to the specified length. Returns a string
let b = 19.6543;
console.log(b.toPrecision()); // 19.6543
console.log(b.toPrecision(1)); // 2e+1 ==> 2 * 10^1  
console.log(b.toPrecision(2)); // 20
console.log(b.toPrecision(3)); // 19.7
console.log(b.toPrecision(4)); // 19.65
console.log(typeof b.toPrecision()); // string



// 5) Number(variable) : Converts JS variables to numbers

console.log(Number(true))  //1
console.log(Number(false))  //0
console.log(Number('     123  '))  //123
console.log(Number('     123  123 ')) //NaN
console.log(Number('     George '))//NaN



// Note : Number() also converts dates to numbers. Starts from January 1 1970 in JS, the timestamp
// Gives the time difference in milliseconds between the given date and January 1, 1970
let date1 = new Date('1970-01-02');
console.log(Number(date1)) // 86400000


// 6) parseInt(); Takes a string and returns the integer part if it encounters a number first (excluding spaces)

console.log(parseInt('   77.77 ')) //77
console.log(parseInt('   77 sasdasd '))//77
console.log(parseInt('   -77 sasdasd ')) //-77
console.log(parseInt(' sasdasd  -77  ')) // NaN
console.log(typeof parseInt()); // number
console.log(parseInt(true))//NaN


// 7) parseFloat(): Takes a string and returns the number if it encounters a number first (excluding spaces).
console.log(parseFloat('77.77 999')); // 77.77
console.log(parseFloat('77.77 text')); // 77.77
console.log(parseFloat('-77.77')); // -77.77
console.log(parseFloat('text 77.77')); // NaN
console.log(typeof parseFloat()); // number
console.log(parseFloat(true)); // NaN


// 3) Boolean : Only accepts "true" and "false" values.
//The Boolean() Function: Determines if an expression is true or false

console.log(Boolean(7<9))//true
console.log(Boolean(7<9 && 9<7))//false
console.log(Boolean(7<9 || 9<7))//true

//Falsy/Truthy Values:
// Javascript has specific values that evaluate to true(Truthy Values) and other that evaluate to false(Falsy Values)

//Falsy Values : false,  ''   , 0   , -0    , NaN    , null    , undefined


console.log(Boolean(false)); // false
console.log(Boolean('')); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false


// Truthy Values:   true    ,  'text'   , 777 , -777   ,   -7   ,    7 , Infinity , -Infinity  ,  {}    ,   []

console.log(Boolean(true)); // true
console.log(Boolean('any text you wrote')); // true
console.log(Boolean(777)); // true
console.log(Boolean(-777)); // true
console.log(Boolean(-7.7)); // true
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true


// 4) Undefined : A variable without a value has an undefined type. Its data type is also undefined

let str;
console.log(str);//undefined
console.log(typeof str);//undefined

// Note: Empty strings are not considered undefined

let str2 ='';
console.log(str2);
console.log(typeof str2);//string

// Coercion : When fdifferent data types are compared or aperated upon, the JS can convert one type to another
// This enables it to perform operations between them
// Type coercion priory order : String > Number > Boolean

console.log(8 + '2'); //82  //string
console.log(typeof (8 / '2')); // 4  / Number
console.log(true + 2) // 3  / Number



        //JavaScript Functions
// It refers to a code block designed to perform a specific task.
// When does a function run:
//          -when invoked (i.e., called), 
//          -when an event occurs (like clicking a button) 
//          -or can run automatically (self-invoked)
/* Syntax: 
function functionName (parameter1, parameter2, parameter3,..){
    code block
}
// If the "return" keyword is used inside the function, it stops reading the code after that point.
// Hence, the "return" statement should be the last part of the code block.
*/

//Ex1
function myFunction (a , b){
    return a * b;
}

console.log(myFunction(7, 8)); //56
let k = myFunction(10, 3);
console.log(k);//30

// Ex2

function myFunction2(a, b){
    console.log(a*b);
    
}

//myFunction2(4, 5)//20
let k1 = myFunction2(3, 2);
console.log(k1)// undefined



// Local Variables / Lexical Environment (Lexical Scope): Variables declared within a function become local to that function.
// Local variables can only be accessed within the function.
// Functional scope: Variables within a function are within that function's scope.

function f1(){
    let carName = 'BMW';
    console.log(carName);
    
}
// console.log(carName); / ReferenceError: carName is not defined
f1();//BMW

let k2 = f1();
console.log(k2); // BMW


// Note: You can access variables in the outer scope from a nested scope; however, variables inside a nested scope
// cannot be accessed from the outer scope.
// You can access variables in the outer scope from a nested scope, but you can't access variables in the nested scope
// from the outer scope.

{//outer scope
let a = '123'

{//nested scope
let b = '456';
b = a;
}

}


//Ex
function get3Char(a){
    let str2 =a.substring(0,3);
    console.log(str2);
}


let indexNumbers = '0123456789';
get3Char(indexNumbers);

let end = 'Javascript';
get3Char(end);//Jav



// Ex.
function f2(){// outer scope
    let stdName = 'George';
    let stdLame = 'Clean';

        function f21(){   // nested scope
            let fName = stdName+ ' ' + stdLame;
            let stdAge=18;
            return fName;
        }
      //let age = stdAge; ReferenceError: stdAge is not defined
        return f21();
}

//f21();  ReferenceError: f21 is not defined
let k3 = f2();
console.log(k3);//George Clean

//Ex2
function outerFunc(x){

    function innerFunc(y){
        return x+y;
    }

    return innerFunc;
}

console.log(outerFunc(2)(3)); // 5


// Ex

function first(){
    var aa = "fresh"
    console.log(aa);
        function second(){
            aa= 'second';
            return aa;
        }
    return second();
}

console.log(first())



    // Arrow Function
function hello(){
    return 'Hello everbody';
}

console.log(hello()); //Hello everbody

// Converting the above function into an Arrow Function

helloFunction = () => 'Hello this is arrow';

console.log(helloFunction());//Hello this  is arrow

//Example :
let sum = (a, b) => {
    let result = a+b;
    return result;
}

console.log(sum(3,5));//8











