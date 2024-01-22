                //JavaScript

// Programlar bilgisayarlara verilmis instruction lardan olusur. 
// Her bir instruction, bir statement anlamina gelir.
// Her statement in sonunda ; (noktali virgul) olmalidir.
// Apex ve Javascript de bir satirda, aralarina ; konularak bieden gazla statement olsuturulabilir.
// Javascript case sensitive dir.

//      Example:  variableType varableName = 'initialValue'

// Single Line Comment

/*
Multiple Line Comment
*/

/* Javascript Indentifiers / Names:
    Isimler sunlarla baslayabilir. 
        -harfler
        -$ isareti
        -Alt cizgi(_)
    Isimler rakamla baslayamaz.
*/


variableName = 'aasdsaa' ;

// = assign, == equal

//Javascript Variables: 
    //Syntax ==> type nameOfVariable = initialValue ;

//Javascript ile variable olustururken data type ini girmek zorunlu olmadigindan, strongly type programming language degildir. 
//Variable lar bilgi tutan bir konteynirdirlar.

/* Javascript ile variable declare etmenin 4 yolu vardir;
                -var        ==> var isim = 'wise'
                -let        ==> let isim = 'wise'
                -const      ==> const isim = 'wise'
                -nothing    ==> isim = 'wise'
            Bir variable declare edilip initilize edilmezse(bir deger assign edilmezse) undefined olur. 
            Example ==> var isim;
*/



                //var
// nothing ile declare edilmis olan variable lari daha sonradan "var" ile declare edebiliriz.
 //               isim='wise';
//                var isim = 'quarter';

// "var" keyword ile declare edilen variable lar;
//      -daha sonradan herhangi bir yerde yine var ile declare edilebilir.              
//                var isim='wise';
//                var isim = 'quarter';
//      -yeni degerler reassign edilebilir.
//                var isim='wise';
//                isim = 'quarter';  ==> reassign
//      -en ustte hoisted edilir ve herhangi bir anda initilize edilebilir. 
//      -block scope degillerdir. yani bir code block u icerinde tanimlanmis olsa da, o block disindan da ona ulasilabilir.
//      -Hoisting = Declare edilmeden once kullanilabilmeye denir. 

var name1;              //declare
console.log(name1);

name1='Ahmet';          //assign
console.log(name1);

var name1='Mehmet';     //redeclare
console.log(name1);

var name1;
console.log(name1);

name1='wise';           //reassign
console.log(name1);

name1=5;                //reassign 
console.log(name1);

var car;                //declare - undefined
console.log(car);

car='merso';            //reassign
console.log(car);

var car;
console.log(car);

//Block Scope

{
    var carModel=2023;
    console.log(carModel);

    console.log(car);

}

console.log(carModel);

                
                //let

/*
    let keyword ile declare edilen variable lar
        -redeclare edilemez
        -reassign yapilabilir
        -kullanilmadan once declare edilmelidir.
        -Block Scope tur, code block icinde tanimlananlar code block u disinda taninmaz.
            O block disinda taninmadigi icin de o block disinda ayni isimle redeclare yapilabilir. 

*/

let name2='Cemil'
console.log(name2);

name2="Hasan"
console.log(name2);

{
    let name2='Kemal'
    console.log(name2);
}

//                  Const

/* const keyword ile declare edilen variable lar
    -redeclare edilemez.
    -reassign edilemez.
    -Kullanilmadan once declare edilmelidir. 
    -Block Scope tur. let gibi
    -declare edildiginde, initilize da edilmelidir.

*/


const price=300;        //declare
console.log(price)

price=400;               //TypeError: Assignment to constant variable.
console.log(price)

{
    const price2=300;
    console.log(price2) //400
}


//              Operators
// 1.Aritmetic Operators
/*
    
    +, -, *, /, ++, --,
    % Modulus (Reminder) Kalan
    ** Exponentiation (Ussu)

*/

let x=5;
x++;
console.log(x) //6

x--;
console.log(x) //5

// Post Increment (y++)

let y=10;           
console.log(y++)    //10
console.log(y)      //11

// Pre Increment (++y)

let z=20;
console.log(++z) //21
console.log(z)  //21

console.log(z%y) //10

let w=3
console.log(x**w) //5**3 5'in kupu=125 dir

//  2. Assignment Operators

/* 
    x=y     Asssignment
    x+=y    x= x+y;
    x-+y    x= x-y;
    x*=y    x= x*y;
    x/=y    x= x/y;
    x%=y    x= x%y;
    x**=y   x= x**y;
*/

let X=10;
X+=3;
console.log(X) //13

X*=10;
console.log(X) //130

X%=100;
console.log(X) //30

X**=2;
console.log(X) //900


//  3. Logical Operators

/* 
    && AND Butun condition lar true oldugunda sonuz true doner,aksi halde false.
    || OR Butun condition lar false oldugunda sonuz false doner,aksi halde true.
    !  Not

*/

let W=5, Z=3;
let result=(W>Z && Z<7) //true
let result2=(W>Z || Z<4) //true

console.log(!(W==Z))    //true

// Comparison Operators

/*
    ==  equal to(values)
    === equal value and type
    !=  not equal(values)
    !== not equal value or not equal type
    <   less than
    >   greater than
    <=  equal or less than
    >=  equal or greater than
    ?   ternary operator
*/

let a=5;
let b=5;
let c=4;
let d='5';

console.log(a==b)   //t 
console.log(a==c)   //f
console.log(a==d)   //t
console.log(a===b)  //t
console.log(a===c)  //f
console.log(a===d)   //f

console.log(a!=b);//false
console.log(a!=c);//true
console.log(a!=d);//false
console.log(a!==b);//false
console.log(a!==c);//true
console.log(a!==d);//true



// Ternary Syntax 

//    Condition ? (True) : (False)

let age=25;

let votable = (age<18) ? 'too young to vote' : 'Eligible for voting';
console.log(votable);














