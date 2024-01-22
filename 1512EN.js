

// Objects:
/* We said JS variables are containers. Objects are containers too. They can hold multiple values (properties).
    Objects are written within curly braces.
    Object properties are written as "key: value" pairs separated by commas.
*/
// You can assign a function as a value to a key inside an Object. Then that key becomes a method.
// In the example below, fullName() becomes a method.

var std = {
    name: 'George' ,
    lName: 'Clean',
    birthDate: 1900,
    fullName: function(){
        return this.name + ' ' + this.lName;
    }

}

// Accessing Object Properties:
// ObjectName.PropertyName or ObjectName['PropertyName']
console.log(std.name)//George
console.log(std['lName'])//Clean
console.log(std.lName)//Clean
console.log(std.birthDate)//1900
console.log(std.fullName())//George Clean


// this keyword: In the above example, it refers to this object, representing the std Object.
// When creating a function, we need to provide a name. However, in the above example, to create a method,
//      using the function keyword is sufficient, and there's no need to give a name to the function.


//Example
function withName(){
    console.log('I have a name');
}
withName();//I have a name

// Function without name

let withoutName = function(){
    console.log('No need name for function');
}

withoutName();//No need name for function



    // JavaScript Array:
// 1. Way to create Array:
const cars = ['Toyota', 'Honda', 'BMW', 'Bugatti'];

// Objects are usually created using the "const" keyword. However, it doesn't mean the elements of this object are immutable.
// It means you cannot create another array with the same name, but you can change the elements of the array.

// How to add elements to an Array:
const cars2 =[];
console.log(cars2); //[]

cars2[0] = 'Mercedes';
cars2[1] = 'Ferrari';
cars2[2] = 'Lexus';
console.log(cars2); //[ 'Mercedes', 'Ferrari', 'Lexus' ]
console.log(typeof cars2);//object

// 2. Way to create Array:
let name1 = new String('wise');
let name2 = 'wise';

const cars3 = new Array('Mercedes', 'Ferrari', 'Lexus');
console.log(typeof cars3);//objec



// JavaScript Array:
// 1. Way to create Array:
const cars4 = ['Toyota', 'Honda', 'BMW', 'Bugatti'];

// Objects are usually created using the "const" keyword. However, it doesn't mean the elements of this object are immutable.
// It means you cannot create another array with the same name, but you can change the elements of the array.

// How to add elements to an Array:
const cars2 =[];
console.log(cars2); //[]

cars2[0] = 'Mercedes';
cars2[1] = 'Ferrari';
cars2[2] = 'Lexus';
console.log(cars2); //[ 'Mercedes', 'Ferrari', 'Lexus' ]
console.log(typeof cars2);//object

// 2. Way to create Array:
let name3 = new String('wise');
let name4 = 'wise';

const cars5 = new Array('Mercedes', 'Ferrari', 'Lexus');
console.log(typeof cars3);//object


// Accessing elements in an array:
console.log(cars3[0]); //Mercedes
console.log(cars3[1]);//Ferrari

let car1 = cars3[2];
console.log(car1);


// Changing the values of elements in an array:
cars3[1] = 'Lamborghini';
console.log(cars3);// [ 'Mercedes', 'Lamborghini', 'Lexus' ]


/* Arrays are objects.
    Arrays use index numbers to access elements, whereas objects use property names to access elements.
*/

/* Inside an array, you can have elements such as:
    - Array
    - Object
    - Function
    - Element
*/



 // Array Methods:
    // 1) toString(): Converts the array to a string. By default, it separates elements with commas.
        const fruits =['Banana', 'Orange', 'Apple', 'Mango'];
        console.log(fruits)//[ 'Banana', 'Orange', 'Apple', 'Mango' ]
        console.log(fruits.toString())//Banana,Orange,Apple,Mango
        console.log(typeof fruits.toString())//string

        let fruitStr = fruits.toString();
        console.log(fruitStr);//Banana,Orange,Apple,Mango

// 2) join(): Similar to toString() but allows you to specify the separator.
        const fruits2 =['Banana', 'Orange', 'Apple', 'Mango'];
        console.log(fruits2.join('--'));//Banana--Orange--Apple--Mango
        console.log(typeof fruits2.join('--'));//string

// 3) pop(): Removes the last element of the array and returns the removed element.

        const fruits3 =['Banana', 'Orange', 'Apple', 'Mango'];
        console.log(fruits3.pop()); //Mango
        console.log(fruits3)//[ 'Banana', 'Orange', 'Apple' ]


// 4) push(): Adds new elements to the end of an array and returns the new length of the array.

        console.log(fruits3.push('Watermelon', 'Kiwi'));//5
        console.log(fruits3);//[ 'Banana', 'Orange', 'Apple', 'Watermelon', 'Kiwi' ]


// Another way to achieve the same process:
fruits3[fruits3.length]='Pear';
console.log(fruits3); //[ 'Banana', 'Orange', 'Apple', 'Watermelon', 'Kiwi', 'Pear' ]



// 5) shift(): Removes the first element from an array and returns that removed element.
const fruits4 =['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits4.shift());//Banana
console.log(fruits4);//[ 'Orange', 'Apple', 'Mango' ]

// 6) unshift(): Adds new elements to the beginning of an array and returns the new length of the array.
const fruits5 =['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits5.unshift('Pear', 'Melon'));//6
console.log(fruits5);//[ 'Pear', 'Melon', 'Banana', 'Orange', 'Apple', 'Mango' ]



// 7) delete: Array elements can be deleted using the delete operator. The deleted element leaves a hole in the array.

const fruits6 =['Banana', 'Orange', 'Apple', 'Mango'];
delete fruits6[2];
console.log(fruits6);//[ 'Banana', 'Orange', <1 empty item>, 'Mango' ]
console.log(fruits6.length);//4

fruits6[2]= 'Melon';
console.log(fruits6);//[ 'Banana', 'Orange', 'Melon', 'Mango' ]



// 8) concat(): Concatenates arrays. It doesn't change the existing arrays but returns a new array.
const fruits7 =['Banana', 'Orange', 'Apple', 'Mango'];
const fruits8 =['Kiwi', 'Pear'];
const fruits9=['Banana', 'Pear', 'Melon'];

const allArray = fruits7.concat(fruits8, fruits9);
console.log(allArray);
console.log(fruits7);//[ 'Banana', 'Orange', 'Apple', 'Mango' ]


// 9) splice(startingIndex, length):
const fruits10 = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Pear'];
console.log(fruits10.splice(2, 3, 'Avacado', 'Dragon Fruit'))//[ 'Apple', 'Mango', 'Kiwi' ] ==> returns the deleted elements
// Starting at index 2, remove 3 elements and add 'Avocado' and 'Dragon Fruit' in their place.
console.log(fruits10);//[ 'Banana', 'Orange', 'Avacado', 'Dragon Fruit', 'Pear' ]


// Splice() method can delete elements without leaving empty spaces.
const fruits11 = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Pear'];
fruits11.splice(2 , 1);
console.log(fruits11);//[ 'Banana', 'Orange', 'Mango', 'Kiwi', 'Pear' ]

// 10) slice(startIndex, endIndex): Takes a slice of an array and creates a new array from it.
// The second parameter is optional.
// The original array remains unchanged.
const fruits12 = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Pear'];
console.log(fruits12.slice(2));//[ 'Apple', 'Mango', 'Kiwi', 'Pear' ]
console.log(fruits12);//[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Pear' ]
console.log(fruits12.slice(2,5))//[ 'Apple', 'Mango', 'Kiwi' ] ==> starts from index 2, goes until index 5 (not inclusive)

// 11) sort(): Sorts elements alphabetically.
const fruits13 = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Pear'];
fruits13.sort();
console.log(fruits13);



// 12) reverse(): Reverses the order of elements in an array.
// To sort an array in descending order:
// first, use sort() to sort it in ascending order, then
// use reverse() to reverse the order.
const fruits14 = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Pear'];
fruits14.reverse();
console.log(fruits14);

fruits14.sort(); //A-Z
fruits14.reverse();//Z-A
console.log(fruits14);


// Note: Chaining of methods is possible.
const fruits15 = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Pear'];
console.log(fruits15.sort().reverse());//[ 'Pear', 'Orange', 'Mango', 'Kiwi', 'Banana', 'Apple' ];