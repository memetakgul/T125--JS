

            // 2. Number
const pi = 3.14;
let r= 5;

console.log(typeof pi); // number
console.log(typeof r); // number

// Numeric String : Eger stringin icerisinde sadece sayilar var ise, o zaman gereken yerlerde JS bunlari number olarak kullanabilir

let x= '100';
let y ='10';
let w =5;
let z = x/y;
console.log(z); //10
console.log(y/w);//2

console.log(typeof z); // number



// "+" isaretinin yanindakilerden en az birisi string ise, o zaman concatenation yapar.
let deneme = y+w; //105
console.log(typeof deneme);//string
 


//      Number Methods and Properties

// 1) toString : number i string e cevirir

let u = 111;
let uv= u.toString();
console.log(uv);//111
console.log(typeof uv);//string


// 2) toExponential(); Sayiyi Exponential Notation ile yazar. Sonucu string e cevirir
//  Noktayi sayinin soldan ilk basamagindan sonraya koyar, noktadan sonra da girilen parametrenin sayisal degeri kadar basamaga yuvarlar.

let X=5;
console.log(X.toExponential(2));//5.00e+0

let X2 = 555;
console.log(X2.toExponential(2));//5.55e+2 ==> 5.55 * 10^2

let X3= 5.555;
console.log(X3.toExponential(2));//5.56e+3

let X4 = 54321;
console.log(X4.toExponential(3))//5.432e+4

let X5 = 5432100;
console.log(X5.toExponential(1))//5.4e+6

let X6 = 5432100;
console.log(X6.toExponential(0))//5e+6

// 3) toFixed(): Ondalık kısmı, parametre olarak verilen sayı kadar basamağa yuvarlanır. String return eder. 

let a = 19.6543;
console.log(a.toFixed())//20
console.log(a.toFixed(1))//19.7
console.log(typeof a.toFixed())//string



//4) toPrecision(): Girilen parametre kadar uzunluğu olacak şekilde sayıyı yuvarla. String return eder.
let b = 19.6543;
console.log(b.toPrecision())//19.6543
console.log(b.toPrecision(1))//2e+1 ==> 2 * 10^1
console.log(b.toPrecision(2))//20



// 5) Number(variable): JS variable larını number a çevirir.

console.log(Number(true))//1
console.log(Number(false))//0
console.log(Number('      16     '))//16
console.log(Number('      16    17 '))//NaN
console.log(Number('George'))//NaN


// Note: Number() date i de number a çevirir. 1 Ocak 1970 ten başlar JS te tarih damgası.
// Girilen date ile 1 Ocak 1970 arasındaki milisaniye ( saniyenin binde biri) cinsinde zaman farkını verir.

let date1 = new Date('1970-01-02');
console.log(Number(date1))//86.400.000 milisaniye = 1 gun


// 6) parseInt(): Bir string i alır. İçerisinde boşluk haricinde ilk olarak number la karşılaşırsa, number ın tam sayı kısmını verir.Bana number return eder.

console.log(parseInt('  77.77 999'  ))//77
console.log(parseInt('  77.77 text'  ))//77
console.log(parseInt(' text  77.77 '  ))//NaN
console.log(parseInt(true))//NaN



// 7) parseFloat(): Bir string i alır. İçerisinde boşluk haricinde ilk olarak number la karşılaşırsa, number ın kendisini verir.

console.log(parseFloat('77.77 999'));//77.77
console.log(parseInt('  77.77 text'  ))//77.77
console.log(parseInt(' text  77.77 '  ))//NaN
console.log(parseInt(true))//NaN

        // 3. Boolean: Sadece "true" ve "false" değerlerini alır. Apex te ise "null" değerini de alıyordu.

// The Boolean() Function: Bir expression ın true mu false mu olduğunu bulabilirsiniz.
console.log(Boolean(9>8));//true
console.log(Boolean(9==7 || 7<9))//true
console.log(Boolean(9==7 && 7<9))//false

// Falsy/Truthy Values: 
//      JavaScript te belli değerler vardır, bunların Boolean değerleri true dur. Bunlara Truthy Values denir. 
//      Bazı değerler de vardır ki, bunların da Boolean değerleri false tur. Bunlara da Falsy Values denir.

// Falsy Values: false, '', 0, -0, NaN, null, undefined
console.log(Boolean(undefined))//false



// Truthy Values: true, 'text', 777, -777, -7,7, Infinity, -Infinity, {}, []

console.log(Boolean('text')); // true
console.log(Boolean([])); // true

 


       // String taskleri

// 4. Bir adet undefined variable olusturunuz. Bunun value sini ve type ini consolda gorunuz
let str;
console.log(str); // undefined
console.log(typeof str); // undefined


// Note: İçi boş string ler undefined değildir.
let str2 = '';   
console.log(str2);
console.log(typeof str2); // string


// Coercion: Birbirinden farklı data type ları kıyaslarken ya da işlem yaparken, JS engine bir type'i diğer bir type a çevirebilir.
//          Böylece işlemi gerçekleştirebilir. 


// Type coercion priority order: String > Number > Boolean


console.log(8 + '2' );//82  / Type String
console.log( 8 / '2'); //4  / Number
console.log(8 ** '2');//64  / Number / ** sayinin ussunu almamizi saglar
console.log(true + 2);//3  / Number



                    // JavaScript Functions


// Belirli bir task i gerçekleştirmek için dizayn edilmiş olan code bloğuna denir.
// Function ne zaman çalışır:
//          -invoke edildiğinde (yani çağrıldında), 
//          -bir olay gerçekleştiğinde (bir buton a tıklanınca gibi) 
//          -veya otomatik olarak (self invoked) çalışabilir.
/* Syntax: 
function functionName ('parameter1', parameter2, parameter3,..){
    code bloğu
}
// function ın içinde "return" keyword kullanılmış ise, oradan sonra function içinde yazılacak olan kodları okumaz.
// onun için code bloğunda return kısmı son kısım olmalıdır.
*/
//Ex1

function myFunction(a, b){
       return a * b;
}

console.log(myFunction(5 , 6)); //30

let k = myFunction(3 ,5);//15
console.log(k);


//Ex2  Konsolda / Verdiginiz parametrelerin carpiminin sonucu 30'dur



function myFunction2(a, b){
        console.log('Verdiginiz parametrelerin carpiminin sonucu ' + (a*b) + '\'dir');
}

myFunction2(3,2) // Verdiginiz parametrelerin carpiminin sonucu 6'dir



// Local Variables / Lexical Environment (Lexical Scope): Function içinde declare edilen variable lar,
//              Function a local hale gelir. Local variables a sadece function içinden ulaşılabilir.
// Functional scope: Function içindeki variable lar function ın scope undadır denir.

//Ex

function f1(){
        let carName ='Toyota';
        console.log(carName);
        
}
// console.log(carName); // ReferenceError: carName is not defined
f1(); // Toyota



// Note: Variables in the outer scope can be accessed in a nested scope; But variables inside a nested scope
//      CANNOT be accessed by the outer scope.

// Nested scope tan, outer scope taki variable lara ulaşabilirsiniz, ancak nested scope taki variable lara
//  outer scope tan ulaşamazsınız.

//Ex :

function f2(){ //outer scope
        let stdName = 'Ahmet';
        let strLname= 'Oz';
         // let newAge = stdAge; / ReferenceError: stdAge is not defined ==> inner scope ta declare edilmiş olan variable a
                            // outer scope tan ulaşamıyor.

        function f21(){ //inner scope
                let fName=stdName + ' ' + strLname;
                let stdAge=18;
                return fName;
        }
        return f21();
}

 console.log(f2()); // Ahmet Oz



 //Ex2 

function outerFunc(x){

        function innerFunc(y){
                return x+y;
        }
        return innerFunc; // Functionda parametre varsa outer scope'da return ederken parametre parantezi acmiyoruz
}

console.log(outerFunc(2)(4));


// Scope chain: The nested hierarchy of scope is called the scope chain. The JS engine looks for variables in the scope chain
//                  upwards (it its ancestors, until found)

//Ex
var aa ='global';

function first(){
        
        var aa='fresh//';
        console.log(aa);
                function second(){
                        aa='second';
                        return aa;
                }
        return second();        

}

console.log(first());


      //Arrow Function

function hello(){
       return 'Hello EveryBody';
}
console.log(hello());


// Yukardaki function ın Arrow Function ile yazılması:
helloArrow = () => 'Hello EveryBody';

console.log(helloArrow())

//Eger arrow functionda { } kullanirsak, { } icine return key wordu kullanmaliyiz.

//Ex 
let age = 33;
let vote = age < 18  ?
() => console.log('You cannot vote') :
() => console.log('You are eligible to vote');



vote(); // You are eligible to vote
// let vote = () => console.log('You are eligible to vote');



//Ex
let sum = (a , b) => {
       let result = a+b;
       return result;
}

console.log(sum(3,5));