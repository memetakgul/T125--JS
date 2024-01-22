     //Concept of Data Types
//1. Primitive Data Types = There are 6 types : String, Number, Boolean, Null, Undefined, Symbol
//2. Object Data Types = List, Set, Map, Array, Function
//typeof operator : Used to determine the data type of a variable

let x;
console.log(typeof x);//Undefined
x=7;
console.log(x);//7
console.log(typeof x);//Number

let check = true;
console.log(typeof check);//boolean

let y = 'Ahmet';
console.log(typeof y); //String


// 1.Strings
// You can create a String by putting text between 'single quotes' or "double quotes"
// If creating a String with 'Single quotes', you can "double quotes" inside it
let name1= 'John"s car';
// If creating a String with 'Double quotes', you can "single quotes" inside it
let name2= "John's car";
// Or using the same type of quotes, you should use a backward slash \ between them
let name3= 'John\'s car'
console.log(name3);


//String as Objects : String can also be created as objects using the "new" keyword
let car1 = new String('Ferrari');
console.log(typeof car1);//object
console.log(car1); //[String: 'Ferrari']
let car2 = 'Ferrari';
console.log(typeof car2);//string
console.log(car2);//Ferrari

        //String Methods and Properties
// Strings are "immutable", meaning methods do not modify the original String: that create a new string value
// 1) length : Gives the number of characters in a String
let str1 = "Javascript";
console.log(str1.length);//10
let num1 = str1.length;
console.log(num1);//10

// 2) substring(startIndex, endIndex): Retrieves a portion of a string between specified indexes
        //startIndex is inclusive, endIndex is exclusive. endIndex is optinional
let str1Part1 = str1.substring(2);
console.log(str1Part1);//vascript
console.log(str1);//Javascript

let str1Part2 = str1.substring(2, 5);
console.log(str1Part2);//vas

// 3)slice (startIndex, endIndex) : Similar to substring method. Can take negative index values

let str2 ="apple, pear, orange";
str2Part2 = str2.slice(-6)
console.log(str2Part2); //orange
str2Part2 = str2.slice(-6,-3 )
console.log(str2Part2);//ora
str2Part3 = str2.slice(-17, 5 )
console.log(str2Part3)//ple

// 4)substr(startIndex, length) : Starts from startIndex and takes 'length' number of characters

let str2Part4 = str2.substr(7, 5);
console.log(str2Part4);//pear,

// 5) replace(valueToBeChanged, newValue) : Replaces only the first match found
let str3 = "apple, Pear, orange, pear, banana, pear";
let str3Part1 = str3.replace('pear', 'kiwi');
console.log(str3Part1)//apple, Pear, orange, kiwi, banana, pear

// To replace all matching substrings, use regular expressions with the /g flag (global match)

let str3Part2 = str3.replace(/pear/g, 'kiwi');
console.log(str3Part2)//apple, Pear, orange, kiwi, banana, kiwi

// Use the /i flag for case-insensitive replacement
let str3Part3 = str3.replace(/pear/ig, 'kiwi');
console.log(str3Part3)//apple, kiwi, orange, kiwi, banana, kiwi


// 6) toUpperCase() 
let new1 = 'Javascript';
let new11= new1.toUpperCase();
console.log(new11);//JAVASCRIPT


// 7) toLowerCase()
let new2 = 'JAVASCRIPT';
let new22= new2.toLowerCase();
console.log(new22);//javascript


// 8) concat() : Concatenates multiple strings together
 let text1 = 'Hi';
 let text2 = 'Javascript';

 let textJoin = text1.concat(text2);
 console.log(textJoin);//HiJavascript

 textJoin=text1.concat(' ',text2, ' this is another addition for text1');
 console.log(textJoin);//Hi Javascript this is another addition for text1

 // 9) trim(): Removes starting and ending whitespaces

 let text3 = '        Java     Script       ';
 let text3new= text3.trim();
 console.log(text3new);//Java     Script

console.log(text3.trimStart());
console.log(text3.trimEnd());

// 10) padStart(length, paddingValue) : Adds paddingValue to the beginning until the string reaches length
let text4 = 'a';
console.log(text4.padStart(10, 'x'))  //xxxxxxxxxa
let text44 = 'a';
console.log(text44.padStart(10, 'x')) //xxxxxaaaaa

// 11) padEnd(length, paddingValue) : Adds paddingValue to the end until the string reaches length
 let text5 ='a';
 console.log(text5.padEnd(10, 'x'))//axxxxxxxxx

 // 12)charAt(index) : Returns the character at the specified index.
let text6 = 'Javascript';
console.log(text6.charAt(2));//v

// Note : Property Access[]: You can also access characters using this notation
console.log(text6[2]); //v

  
// 13) charCodeAt(index) Return the ASCII value of the character at the specified index

console.log(text6.charCodeAt(0));


// 14) split() Splits the string into an array based on provided substrings

let xx = "Hi JS, I love u very much JS, what r u doing so far!";
console.log(xx);// Hi JS, I love u very much JS, what r u doing so far!
let ww= xx.split();
console.log(ww);  // [ 'Hi JS, I love u very much JS, what r u doing so far!' ]

console.log(xx.split(''))
/*
[
  'H', 'i', ' ', 'J', 'S', ',', ' ', 'I',
  ' ', 'l', 'o', 'v', 'e', ' ', 'u', ' ',
  'v', 'e', 'r', 'y', ' ', 'm', 'u', 'c',
  'h', ' ', 'J', 'S', ',', ' ', 'w', 'h',
  'a', 't', ' ', 'r', ' ', 'u', ' ', 'd',
  'o', 'i', 'n', 'g', ' ', 's', 'o', ' ',
  'f', 'a', 'r', '!'
]
*/

console.log(xx.split(' '))
/*
[
  'Hi',   'JS,',  'I',
  'love', 'u',    'very',
  'much', 'JS,',  'what',
  'r',    'u',    'doing',
  'so',   'far!'
]
*/

console.log(xx.split('JS')); // [ 'Hi ', ', I love u very much ', ', what r u doing so far!' ]


// 15) indexOf(searchValue, startIndex) : Return the index of the first occurence of a searchValue

let str6 = "Hi JS, I love u very much JS, what r u doing so far!";
console.log(str6.indexOf('JS'))//3

// The second parameter can be used as the starting index for the search

console.log(str6.indexOf('JS', 5 ))//26

// If you ask for something that doesn't exist, it returns "-1"

console.log(str6.indexOf('js', 5 ))//-1

// 16) lastIndexOf(searchValue, startIndex) Gives the index of the last occurance of the specified searchValue within the string
// You can also input the second parameter as the starting index for the search

let str7 = "Hi JS, I love u very much JS, what r u doing so far!";

console.log(str7.lastIndexOf('JS'))//26

// 17) search()
// This method doesn't take the second parameter, unlike indexOf();
// The indexOf() method cannot oparate with regular expressions

let str77 = "Hi JS, I love u very much JS, what r u doing so far!";
console.log(str77.search('JS'))//3
console.log(str77.search(/JS/i))//3


// 18) match() : Regular expression can be used. Result are shown within an Array

// If you don't use the /g flag it only provides the first value result found
let str8 = "Hi JS, I love u very much JS, what r u doing so far!";
console.log(str8.match(/JS/g)) // [ 'JS', 'JS' ]

// 19) includes(searchValue, startIndex) : Returns true if it contains the value, otherwise false.
//     the second parameter is optional
let str88 = "Hi JS, I love u very much JS, what r u doing so far!";
console.log(str88.includes('js'))// false
console.log(str88.includes('JS'))//true
console.log(str88.includes('Hi' , 3 )) // false

// 20) startsWith(searchValue, startIndex)  : Returns true if the string starts with the speficied searchValue,
//     otherwise false

//     the second parameter is optional
let str9 = "Hi JS, I love u very much JS, what r u doing so far!";
console.log(str9.startsWith('JS'))//false
console.log(str9.startsWith('JS', 3))//true

// 21) endsWith(searchValue, length) : Returns true if the string ends with the specified searchValue parameter, otherwise false
// second parameter is optional. It takes the characters from the beginning of the string up to the specified length and checks if that portion ends with searchValue or not
let str10 = "Hi JS, I love u very much JS, what r u doing so far!";
console.log(str10.endsWith('far'))//false
console.log(str10.endsWith('far!'))//true
console.log(str10.endsWith('JS' ,5))//true

// Create a string with back-tick character

let fName = 'John';
let lName = 'Washington';

let fullName = `Your full name is : ${fName} ${lName}  Your age is 40`;
console.log(fullName);


// Ex; 
let quantity = 100;
let price = 1.5;

let total = `Total Price is : ${quantity * price}`;
console.log(total);// Total Price is : 150


