//JAVASCRIPT
//Programs are composed of intructions given to computers
//Each instruction represents a statement
//      Example =    variableType variableName = 'wise quarter';
//In Apex and Javascript, multiple  statements can be written on a single line by seperating them with semicolon
//      variableType variableName = 'wise quarter'; variableType variableName2 = 'wise quarter';
//Keywords and name in Javascript are case sensitive
//      variableName != VariableNAME


// Single Line Comment

/* 
    Multiple Comment
*/


/*  Javascript Identifiers / Names
        Names can start with;
            -letters
            -the $ sign
            -underscore (_)
        Names cannot start with a number
*/


//Javascript Variables: Syntax ==> type nameOfVariable = initialValue;
//In Javascript, It's not mandatory to specify the data type when we creating a variable, It's not a Strongly Typed Language.
//      nameOfVariable = initialValue;   ==>   isim = 'wise';
//Variables act as containers for holding information

/*  There are 4 ways to declare a variable in Javascript;
        -var        ==> var isim= 'wise';
        -let        ==> let isim= 'wise';
        -const      ==> const isim= 'wise';
        -nothing    ==> isim= 'wise';
    If a variable is declared but not initialized (no value is given), it becomes undefined
        Example ==>   var isim;
*/

        //var
/*Variables declared with "nothing" can be re-declared later with the "var" keyword
        isim='wise';
        var isim = 'quarter';
​
Variables declared with the "var" keyword;
    -can be re-declared using "var" anywhere      
        var isim ='wise';
        var isim ='quarter';
    -can be reassigned new values.
        var isim ='wise';
        isim ='quarter';  ==>re-assign
    -are hoisted to the top and can be initialized at any point
    -are not block-scoped. Meaning, even if declared within a code block, they can be accessed from outside that block
*/


sehir = 5;
sehir1=sehir+4;
console.log(sehir);

nothingVariable
var varVariable

name1 ='USA';       //declared
console.log(name1);

name1 = 'England';  //re-assign
console.log(name1);

var name1;//re-declared
console.log(name1);

var name1=5;         //re-declared
console.log(name1);

//Block Scope

{
    console.log(name1);
    name2='wise quarter';

}
console.log(name2);

        //let
/*Variables declared with the "let" keyword;
    -cannot be re-declared
    -can be reassigned
    -must be declared before use
    -are block scoped. Variables declared within a code block are not recognized outside that block
        This means the same name can be declared outside that block
*/
    let city1 ='Ankara'; //declare
    console.log(city1);

    city1='Istanbul';   //reassign
    console.log(city1);

    {
        let city2='Konya'; //declare
        console.log(city2);
    }
    console.log(city2); // ReferenceError: city2 is not defined

    {
        let sport ='football';
        console.log(sport);
    }
        let sport ='basketball';
        console.log(sport);


        //const
/*Variables declared with the "const" keyword
    -cannot be re-declared
    -cannot be re-assigned
    -must be declared before use
    -are block-scoped. Variables declared within a code block are recognized outside that block
        This means the same can be declared outside that block
    -When declared, must also be initialized.
    Meaning, a value must be provided
​
*/
const city10='Balikesir';

const price = 300; //declare
console.log(price);


{
    const price = 400;
    console.log(price);
}

{
    const price =500
    console.log(price)
}


        //Operators:
// 1. Aritmetic Operators
/*
    +, -, *, /, ++, --
    % Modulus (Reminder)
    ** Exponentation
​
*/

let x = 5;
x++;    //x+1 = 6
console.log(x);
x--;    //x-1 =5
console.log(x);

// Post Increment

let y =10;
console.log(y++);
console.log(y); //11

// Pre Increment

let z= 20;
console.log(++z) //21

console.log(z%y);  // 21/11 Reminder is 10

let w = 3;
console.log(x**w) // 125


// 2. Assignment Operators
/*
    x = y       Assignment
    x += y      x = x + y
    x -= y      x = x - y
    x *= y      x = x * y
    x /= y      x = x / y
    x %= y      x = x % y
    x **= y     x = x ** y
​
*/

let num1 = 10;
num1 += 3;
console.log(num1); //13

num1 *= 10;
console.log(num1) //130

num1 %= 100; // 30
console.log(num1);

num1 **= 2; 
console.log(num1) //900


//  3.Logical Operators
/*      AND When all conditions are gonna be True, Its return True
        OR  When any condition is true, Its return True
        !
*/
let Z =5 , W=3;
let result =(Z > W && W < 7); 
console.log(result) // true

let result2= (Z < W || W < 4);
console.log(result2)//true

console.log(!(Z == W)) 
console.log(result2)//true


// 4. Comparison Operators
/*
    ==      equal to(values)
    ===     equal value and equal type
    !=      not equal
    !==     not equal value or equal type
    <       less than
    >       greater than
    <=      less than or equal
    >=      greater than or equal
    ?       ternary operator
*/

let a = 5;
let b = 5;
let c = 4;
let d = '5';

console.log(a==b); //true
console.log(a==c); //false
console.log(a==d); //true
console.log(a===d);//false


//Ternary Syntax = condition ? 'first value will return if condition is true'  :   'second value will return if condition is false'


let age = 25;
let votable = (age<18)  ? 'Too young to vote' : 'Eligible for voting';
console.log(votable); // Eligible for voting





