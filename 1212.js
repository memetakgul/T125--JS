//          Concept of Data Types

/*
    1. Primitive Data type
        1-String
        2-number
        3-boolean
        4-null
        5-undefined
        6-symbol
*/

/*
    2.Object DAta Types
        1-list
        2-set
        3-map
        4-array
        5-function
*/

// "typeof operator" : bir variable in data type ini ogrenmek icin kullanilir.

let x;
console.log(typeof x); //undefined
x=7;
console.log(x); //7
console.log(typeof x); //number

x='ahmet'
console.log(x)  //ahmet
console.log(typeof x) //string

let check=true;
console.log(typeof check); //boolean


// 1.String
//'tek tirnak' ya da "cift tirnak" 
//Stringi 'tek tirnak'la olusturursaniz icine "cift tirnak" ile ayrac olusturabilirsiniz. 
//Stringi "cift tirnak"la olusturursaniz icine 'tek tirnak' ile ayrac olusturabilirsiniz. 
// Ya da ayni isareti ayrac olarak kullanacaksak, oncesine backward slash \ kullanmaliyiz.

let isim='ahmet\' in ayakkabisi\' nin'
console.log(isim)

// Single quote inside double quotes:
let answer1 = "It's alright";
console.log(answer1);
// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";
console.log(answer2);
// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';
console.log(answer3);

  

// String as Objects: Stringleri "new"nkeyword ile object olarak da olusturabiliriz.

let car4=new String('Ferrari'); 
console.log(car4)   //Object


         //String Methods and Properties

// String ler "immutable" dir. Yani method lar uygulandiklari String leri degistirmezler.
// yeni string degeri olustururlar.
// 1)length: String in karakter sayisini verir       

let str1 = "Javascript";
console.log(str1.charAt(5)); //c

console.log(str1.length); // 10​

// 2) substring(startIndex, endIndex) : Bir string icerisinden belirtilen index araligini alir.
    //startIndex dahildir. endIndex dahil degildir 

    let str1Part = str1.substring(2);
    console.log(str1Part); //vascript
    console.log(str1.substring(2, 5)); //vas
    console.log(str1); //Javascript

// 3) slice(startIndex, endIndex): substring methodu ile ayni ozellikleri tasir. Ekstra olarak eksi index degerleri alabilir

let str2 ="elma, armut, portakal";
let str2Part = str2.slice(6,11);
console.log(str2Part);//armut
let str2Part2 = str2.slice(-15, -10);
console.log(str2Part2);//armut

// 4) substr(startIndex, length): startIndex ten almaya baslar, length adedince karakteri alir.

let str2Part3 = str2.substr(6, 6); 
console.log(str2Part3);  //armut,

// 5) replace(valueToBeChanged, newValue) : Sadece buldugu ilk eslesmeyi degistirir

let str3 ="elma, Armut, portakal, armut, muz, armut";
let str3Part1 = str3.replace('armut', 'kiwi');
console.log(str3Part1);//elma, Armut, portakal, kiwi, muz, armut

// Eger butun eslesen substring lerin degismesini istiyorsak, /g flag iyle (global match);

let str3Part2 = str3.replace(/armut/g, 'kiwi');
console.log(str3Part2); // elma, Armut, portakal, kiwi, muz, kiwi

//case insensitive icin /i flag'i (insensitive) kullanilir.

let str3Part3 = str3.replace(/armut/ig , 'kiwi')
console.log(str3Part3);//elma, kiwi, portakal, kiwi, muz, kiwi

// 6)toUpperCase(); Butun karakterleri buyuk harfe cevirir

let new1='JavaScript';
let new2= new1.toUpperCase();
console.log(new2); //JAVASCRIPT

// 7)toLowerCase(); Butun karakterleri kucuk harfe cevirir

let new3='JavaScript';
let new4= new3.toLowerCase();
console.log(new4); //javascript

// 8) concat() : birden fazla stringi birbirine ekler

let text1 = 'Hi';
let text2 = 'Javascript';

let textJoin = text1.concat(' ', text2, ' burasi ekstradan eklendi');
console.log(textJoin); //Hi Javascript burasi ekstradan eklendi

// 9) trim(): Bastaki ve sondaki bosluklari siler

let text3 = '       java    script         ';
console.log(text3.trim());//java    script


// 10) padStart(length, paddingValue) : String onune, String in karakter sayisi length miktarinca oluncaya kadar paddingValue olarak verilen karakteri ekler

let text4= '4';
let text4P= text4.padStart(3,'x');
console.log(text4P);//xx4

// 11) padEnd(length, paddingValue) : String sonuna, String in karakter sayisi length miktarinca oluncaya kadar paddingValue olarak verilen karakteri ekler 

let text5= '4';
let text5P= text5.padEnd(3,'y');
console.log(text5P);//4yy

// 12) charAt(index) : Belirtilen indexteki karaktere bu sekilde de ulasabiliriz

let text6= 'Javascript';
console.log(text6.charAt(0)); // J

    //Note: Property Access[]: belirtilen indexdeki karaktere bu sekilde de ulasabiliriz.
    console.log(text6[0]); //J

// 13) charCodeAt(Index): Belirtilen index teki karakterin ASCII degerini verir.

console.log(text6.charCodeAt(0)); //74
console.log('j'.charCodeAt(0))

// 14) slit(): String i belirtilen substring lerden ayirarak, ayrilan elementlerden Array olusturur.

let str5='Hi JS, I need to practice you. JS, what are u doing so far.';
let array1 = str5.split()
console.log(array1)
        // [ 'Hi JS, I need to practice you. JS, what are u doing so far.' ]
console.log(str5)

console.log(typeof array1); //object

let array2 = str5.split('')
console.log(array2)
/*
[
  'H', 'i', ' ', 'J', 'S', ',', ' ', 'I', 'n',
  'e', 'e', 'd', ' ', 't', 'o', ' ', 'p', 'r',
  'a', 'c', 't', 'i', 'c', 'e', ' ', 'y', 'o',
  'u', '.', ' ', 'J', 'S', ',', ' ', 'w', 'h',
  'a', 't', ' ', 'a', 'r', 'e', ' ', 'u', ' ',
  'd', 'o', 'i', 'n', 'g', ' ', 's', 'o', ' ',
  'f', 'a', 'r', '.'
]
 */

let array4 = str5.split(' ');
console.log(array4);
 /*
 [
  'Hi',       'JS,',
  'Ineed',    'to',
  'practice', 'you.',
  'JS,',      'what',
  'are',      'u',
  'doing',    'so',
  'far.'
]
*/

let array3 = str5.split('.');
console.log(array3); // [ 'Hi JS, I need to practice you', ' JS, what are u doing so far', '' ]

let array5 = str5.split('JS');
console.log(array5); // [ 'Hi ', ', I need to practice you. ', ', what are u doing so far.' ]

// 15) indexOf(searchValue, StartIndex): 

// Belirtilen string icerisinde ilk var oldugu yerin ilk karakterinin index ini verir. ikinci parametre zorunlu degil.

let str6='Hi JavaScript, I need to practice you. JavaScript, what are u doing so far JavaScript.';

console.log(str6.indexOf('JavaScript')) //3

// ikinci parametreyi, search e baslayacagi index numarasi olarak girebilirsiniz. 

console.log(str6.indexOf('JavaScript',4)) //39

// 16) lastIndexOf(): Belirtilen substringin string icerisinde son var oldugu yerin (ilk karakterinin) index ini verir.
// ikinci parametreyi, search e baslayacagi index numarasi olarak girebilirsiniz. 

console.log(str6.lastIndexOf('JavaScript')) //75

// 17) search(): Bu method, ikinci parametreyi almaz. indexOf un aksine regular expressionlarla islem yapmaz. 

let str7='Hi JavaScript, I need to practice you. JavaScript, what are u doing so far.';

console.log(str7.search('JavaScript')); //3
console.log(str7.search(/JavaScript/i)); //3

let newstr7 =str7.replace(/JavaScript/gi , 'Apex')
console.log(newstr7);

// 18) match(): regex kullanabilir. sonuclari array icerisinde gosterir.
// /g flagini kullanmazsaniz, sadece ilk buldugu sonucu verir. 

console.log(str7.match(/JavaScript/g)); //[ 'JavaScript', 'JavaScript' ]

// 19) includes('searchValue', 'startIndex') searchValue iceriyorsa tru doner, yoksa false. 

console.log(str7.includes('practice')) //true
console.log(str7.includes('practice',33)) //false

// 20) startsWith ('searchValue', 'startIndex'): belirilen searchValeu ile basliyorsa true doner. yoksa false. 
//ikinci parametre optional.

let str8='Hi JavaScript, I need to practice you. JavaScript, what are u doing so far.';

console.log(str8.startsWith('HI')) //false
console.log(str8.startsWith('JavaScript',3))// true

//21) endsWith('searchValue', length): belirilen searchValue ile bitiyorsa true doner. yoksa false. 
//ikinci parametre optional. Stringin basindan length adedince karakteri alir o kismi check eder

console.log(str8.endsWith('JavaScript'))// false
console.log(str8.endsWith('JavaScript',13))// true




// JS String Templates : Template Literals, Template Strings, String Templates, Back-Ticks
 
let fName1 = 'Mehmet';
let fName2 = 'Akif';
let lName = 'Ersoy';

//Tek veya Cift tirnakla stringi variable ile bir alt satirdaki gibi concat edebiliriz.
let text = 'İstiklal marşinin yazarinin ' + fname1 +' '+ fname2+ ' '+lName;
// Back-tick kullanirsak ise icerisindeki bosluklari da variable'lar arasina otomatik karakter olarak ekleyecektir.

let texta = `İstiklal marşinin yazari ${fName1} ${fName2} ${lName}'dur.`  
console.log(text);

// Ex: 
let quantity = 100;
let price = 1.5;
let total= `Total price is ${price * quantity} `;
console.log(total); //Total price is 150 






