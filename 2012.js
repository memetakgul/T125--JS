
//loops contunies...

// "break" keyword:
// belirli bir değere kadar loop u çalıştırmak isterseniz kullanabilirsiniz.
for(let i =1 ; i<11 ; i++){
    if(i==5){// loop un kod bloğu içinde ilk önce bu if bloğunu yazmalısınız.
        break;// bunu gördüğünde loop tan çık, bırak git.
    }

    console.log(i);//1,2,3,4

}

// "continue" keyword:
// belirli bir değer için kodu çalıştırmak istemiyorsanız bunu kullanabilirsiniz.

for(let j =1 ; j<11 ; j++){


    console.log(j);//1,2,3,4,5,6,7,8,9,10
    if(j==5){// loop un kod bloğu içinde ilk önce bu if bloğunu yazmalısınız. 
        continue;// bunu gördüğünde increment/decrement kısmına geç
    }
    console.log(j);//1,2,3,4,6,7,8,9,10 ==> 5 i atladı, yazdırmadı
}



// 4) for in-loop:
/*  - object in property lerinde iteration yapar.
    - her bir iteration sırasıyla key (x) leri getirip loop'u calistirir.
    - key i kullanarak, o key e ait value ya ulaşabiliriz ==> objectName[x].
*/
const person= {
    fname : 'Ahmet',
    lname: 'OZ',
    age: 33
}
console.log(person.fname);//Ahmet
console.log(person['fname']);//Ahmet

for(let x in person){ // x temsili ismi person objecti icerisindeki key'leri teker teker for in loop icerisinde temsil eder.
    console.log(x);//fname, lname, age 
}

for(let x in person){
    console.log(person[x]);//Ahmet, OZ, 33

}



// Array lerde for-in

const numbers= [3, 9, 7 , 4];
// console.log(numbers[1]);// 9 ==>  Array'lerde index numarasi ile bu sekilde elemanlarin kendilerine ulasabiliyorduk.

for(let x in numbers){
    console.log(x);//0,1,2,3    eger for-in loop array icin calisti ise x temsili degeri index numaralarini getirir.

    console.log(numbers[x]);

    /*
0 --3
1 --9
2 --7
3 --4
    */
}


// 5) for of-loop:
// Bir objectteki value larda iteration yapar. Arrays, Strings, Maps, Set gibi..

const numbers2 = [3,9,7,4];

for(let x of numbers2){
    console.log(x); //3, 9, 7, 4

}


//Ex

let str = 'I love Javascript very much!';

for(let x of str){
    console.log(x);// String variable'daki her bir karakter icin teker teker loop'u calistirir.
}

//Ex
const person2= new Map([
    ['Istanbul', 34],  ['Izmir', 35]
])

for (let a of person2.keys()){ // keys() methodu map'in icerisindeki sadece key'leri getirir. values() ise sadece value'leri getirir.
    console.log(a);// Map'lerde entry'nin tamamini getirir.
    }



            // JavaScript classes
// class lar, object oluşturmak için birer template tır.
// "class" keyword ü kullanılmalı
/* Constructor:
    Özel bir function dır.
    "constructor()" kullanılmalı class ın içinde. Siz eklemezseniz JS sizin için boş bir constructor oluşturur.
    O class tan bir object oluşturulduğunda otomatik olarak constructor invoke olur.
    Object property lerini initialize yapmak için kullanılıyor.
 */
/*
Syntax yapısı
class ClassName {
 constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
*/
class Car{
    constructor(name , year){
        this.carName = name;
        this.carYear = year;
    }

    age(){// class icinde function olustururken "function" keywordunu yazmamiza gerek yoktur.
        let dt= new Date();
        let result = dt.getFullYear() - this.carYear;
        return result;
    }


}

// Car classindan bir object olusturalim
let car1 = new Car('Tofas', 1990);
console.log(car1);//Car { carName: 'Tofas', carYear: 1990 }
console.log(typeof car1); //object
console.log(car1.age());//33



// class Inheritance:
// child class ta "extends" keyword kullanıyoruz.
class Car2{ // superClass
    constructor(superBrand){
        this.carBrand= superBrand;
    }
    present(){ //==>method
        return 'My car is : ' + this.carBrand;
    }

}


class Model extends Car2{
    constructor(childBrand , model){
        super(childBrand); // "super" keyword ile parentClass (superClass) ın constructor ını da çağırıp kullanıyor.
        this.carModel =model;
    }

    show(){
        return this.present() + ' ==> bu veri, SuperClasstan geliyor ====> ' + this.carModel + ' ===> Bu veri ise child classtan geliyor'
    } // "this" keyword ile hem mevcut class ın elemanlarına hem de superClass ın elemanlarına ulaşabilirsiniz.
      // Önce mevcut class a bakar çağırılan eleman var mı diye, orada yoksa superClass a bakar.

}

let myCar1 = new Model('Mustang', 'Mach1');
console.log(myCar1);//Model { carBrand: 'Mustang', carModel: 'Mach1' }

console.log(myCar1.present());//My car is : Mustang
console.log(myCar1.show());//My car is : Mustang ==> bu veri, SuperClasstan geliyor ====> Mach1 ===> Bu veri ise child classtan geliyor





// Static Keyword:
        class Car3{
            constructor(name){
                this.carName = name;
            }
            static hello(){
                return 'You cannot reach me by object, if you want to reach me use ClassName';
            }
        }
        let myCar3 = new Car3('Bugatti Chiron');
        console.log(myCar3); // Car3 { carName: 'Bugatti Chiron' }
        //console.log(myCar3.hello()); // ulaşamıyor method a
        console.log(Car3.hello()); // You cannot reach me by object, if you want to reach me use ClassName

        //static function'lara                  className.functionName()   ile ulasiriz.
        //static olmayan function'lara          objectName.functionName()  ile ulasiriz.