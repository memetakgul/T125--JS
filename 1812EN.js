// Date Objects:
// Created with the new Date() constructor. There are four ways:
// JavaScript counts months starting from zero: January = 0, February = 1, ... December = 11.
// Provides specified times by converting them from GMT (0) to UTC (Universal Time Coordinated).
// According to JS, the "zero time" is January 1, 1970. JS dates keep the difference between the specified time and zero time in milliseconds.
// The date calculations here are based on GMT+3 for this computer.
// Therefore, it converts the given time to GMT+0 by subtracting 3 hours.

// 1) new Date(): Provides the current date and time by creating a new date object.

const d = new Date();
console.log(d);//2023-12-19T01:26:56.193Z Current date and Time

// 2) new Date(year, month, day, hours, minutes, seconds, milliseconds):
const d1 = new Date(2018, 2, 18, 11);
console.log(d1);//2018-03-18T08:00:00.000Z

const d2= new Date(2018, 2, 18, 11, 33, 40, 412);
console.log(d2);//2018-03-18T08:33:40.412Z

// 3) new Date(dateString): Creates a date object from a string.

const d3= new Date('March 18, 2018 13:44:00');
console.log(d3);//2018-03-18T10:44:00.000Z


// 4) new Date(milliseconds): Creates a new date object based on the given milliseconds + zero time.

const zeroTime = new Date(0);
console.log(zeroTime);//1970-01-01T00:00:00.000Z

const d4 = new Date(86400000);
console.log(d4);//1970-01-02T00:00:00.000Z



// Date Methods:

// 1) Date.parse(): Returns the milliseconds difference between the given date as a string and zero time.

let msec = Date.parse('December 18, 2023');
console.log(msec);//1702846800000


// 2) Get Date Methods:
// getTime(): Provides the time difference in milliseconds between the given date and zero time.
// Date.now(): Provides the time difference in milliseconds between the current time and zero time.
// getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds(), getMilliseconds(), getDay();

console.log(Date.now()); // 1679682523869
const d7 = new Date();
console.log(d7); // 2023-03-24T18:28:43.874Z
console.log(d7.getTime()); // 1679682523874
console.log(d7.getFullYear()); // 2023
console.log(d7.getMonth()); // 11
console.log(d7.getDate()); // 19
console.log(d7.getHours()); // 4 ==> Gives according to the local time.
console.log(d7.getMinutes()); // 28
console.log(d7.getSeconds()); // 43
console.log(d7.getMilliseconds()); // 874
console.log(d7.getDay()); // 2 ==> Returns the day of the week. Sunday start from 0 ==> Saturday is 6


// 3) Set Date Methods:
// Sets (years, months, days, hours, minutes, seconds, milliseconds) for a date object.
const d8 = new Date();
console.log(d8); // 2023-12-19T01:33:20.154Z
d8.setFullYear(2000);
console.log(d8); // 2000-12-19T02:33:20.154Z
d8.setMonth(1);
console.log(d8); // 2000-02-19T02:33:20.154Z
d8.setDate(11);
console.log(d8); // 2000-02-11T02:33:20.154Z
d8.setHours(19);
console.log(d8); // 2000-02-11T17:33:20.154Z
d8.setMinutes(20);
console.log(d8); // 2000-02-11T17:20:43.361Z
d8.setSeconds(25);
console.log(d8); // 2000-02-11T17:20:25.361Z
d8.setMilliseconds(222);
console.log(d8); // 2000-02-11T17:20:25.222Z
d8.setTime(86400000);
console.log(d8); // // 1970-01-02T00:00:00.000Z ==> Adjusts 'd8' to the specified date by adding milliseconds to the zero time.






// JavaScript Sets:
// Consists of unique values.

const numbers = new Set();
numbers.add(3);
numbers.add(5);
numbers.add(7);
console.log(numbers); //Set(3) { 3, 5, 7 }


const fruits = new Set(['Orange', 'Banana','Pear', 'Orange']);
console.log(fruits); //Set(3) { 'Orange', 'Banana', 'Pear' }
console.log(typeof fruits);//object
fruits.add('Kiwi');
fruits.add('Melon');
fruits.add(2);
console.log(fruits);//Set(5) { 'Orange', 'Banana', 'Pear', 'Kiwi', 'Melon' }


// forEach(): Invokes a function for each element in the Set.

const fruits2 = new Set(['Orange', 'Banana', 'Apple', 'Kiwi', 'Mango']);

let text = '';

fruits2.forEach(function(value){
        text += value;   
        
}

)

console.log(text);//OrangeBananaAppleKiwiMango


// values(): Creates a new iterator object containing all the values in the Set.

const fruits3 = new Set(['Orange', 'Banana', 'Apple', 'Kiwi', 'Mango']);
console.log(fruits3.values());//[Set Iterator] { 'Orange', 'Banana', 'Apple', 'Kiwi', 'Mango' }

let text2='';
for(const x of fruits3.values()){
    text2 += x +'**';
}



// JavaScript Maps:
// Stores entries in a key-value pair format. Keys can be any data type.
// Keys must be unique.
// Map retains the order of key creation.
// Creating Map:
// 1. Way:
const cities = new Map();
cities.set('New York', 1);
cities.set('Washington', 2);
cities.set('Arizona', 3);

console.log(cities); //Map(3) { 'New York' => 1, 'Washington' => 2, 'Arizona' => 3 }
cities.set('Washington', 5);
console.log(cities);//Map(3) { 'New York' => 1, 'Washington' => 5, 'Arizona' => 3 }

// 2. Way:
const cities2 = new Map([
    ['New York', 1]  ,  ['Washington', 2]  , ['Arizona', 3]
])
console.log(cities2);//Map(3) { 'New York' => 1, 'Washington' => 2, 'Arizona' => 3 }



// To retrieve the value associated with a key in a map, use the get() method.
console.log(cities2.get('New York'));//1


// The has() method checks the presence of a key in the map and returns a boolean.
console.log(cities2.has('New York')); //true

// delete() method: Used to delete an entry associated with a specified key.
cities2.delete('New York');
console.log(cities2);


// size property: Returns the number of entries in the Map.

console.log(cities2.size);//2



// forEach():
const cities3 = new Map([
    ['istanbul', 34],
    ['trabzon', 61],
    ['izmir', 35]
]);

// Print all entries:
cities3.forEach(function(value, key){
    console.log(key + ' ==> ' + value);
}

)
/* 
istanbul=>34
trabzon=>61
izmir=>35
*/

const cities4 = new Map();
cities4.set('New York', 1);
cities4.set('Washington', 2);
cities4.set('Arizona', 3);

let text3='';

cities4.forEach(function(value, key){
    text3 += key + ' ==> ' + value + ', ';
}

)
console.log(text3);


//Entries

const cities5 = new Map();
cities5.set('New York', 1);
cities5.set('Washington', 2);
cities5.set('Arizona', 3);


let text4='';

for(const x of cities5.entries()){
    text4 += x+ '???';
}
console.log(text4);//New York,1???Washington,2???Arizona,3???


let text5='';

for(const x of cities5.values()){
    text5 += x+ '???';
}
console.log(text5);//1???2???3???