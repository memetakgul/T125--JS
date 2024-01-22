

//1 stringin ilk 3 karaterini donen function'i yaziniz

// ilk once bir function olustururum
// functiona verecegim stringi temsil edecek 1 adet parametre olustururum
// function icerisinde bana parametre olarak verilen stringin ilk 3 karakterini substring ile keserim
// daha sonra bu verilen stringin ilk 3 karakterini return ederim

function calc(stringA){
    return stringA.substring(0,3);
}

let isim3karakter= calc('Wise');
console.log(isim3karakter); //Wis


//2 hem outer function hemde inner function'a parametre verip bu textleri birlestiriniz.

// bir adet outer function olustururum. 1 adet parametre veririm
// bir adet inner function olustururum . Buna da 1 adet parametre veririm
// inner function da bu iki parametreyi concat edip return ederim
// Daha sonra outer functionda da inner functionin kendisini return ederim


function textConc(a){
          
        function textConc2(b){
            return a + ' ' + b;
        }
        
        return textConc2;
}

console.log(textConc('Wise')('Quarter'));



function outer(birinci) {
    
    function inner(ikinci) {
      return birinci + ikinci;
    }
    return inner;
  }
  let innerFunc = outer("Merhaba");
  let result = innerFunc('Wise')
  console.log(result);


 //3 verilen stringin son karakterini donen function'i olusturunuz

 
 function lastChar(sozcuk) {
    return sozcuk.charAt(sozcuk.length - 1);
  }
  

  console.log(lastChar("wISE"));


//4 ayni islemi arrow function ile olusturunuz

lastCharacter = (word) => word.charAt(word.length - 1);
console.log(lastCharacter("Personal Computer"));


//5 ayni islemi arrow function ile {} parantez kullanarak gerceklestiriniz

textSon = (stringA) =>{
    return stringA.charAt(stringA.length -1);
}


//6 name ve lastName property'lerine sahip bir object olusturunuz ve bu objectin icerisindeki name propertysinin R harfi ile bitip bitmedigini kontrol edip konsola yazdiriniz.
// Bir adet object olustururum . Syntax ==> let objectName = {name:'value' , name1:'value2'};
// Objecte olusturdugum name propertsine objectName.propertyName ile ulasirim.
// ve Bu ulastigim propertynin degerinin R harfi ile bitip bitmedigini endsWith() function'i ile kontrol ederim

let std = {
    name:'WiseR',
    lName:'Quarter'
}

let isLastCharR = std.name.endsWith('R');
console.log(isLastCharR);


//7 bir emailde @ isaretinin indexini bulunuz

let email= 'wise33@outlook.com';
console.log(email.length-1);//18 son index
let index1= email.indexOf('@');
console.log(index1);//7
let index2= email.lastIndexOf('@');
console.log(index2);//7

//8 yeni bir object olusturup
// email propertysindeki degerde bulunan @gmail.com eklentisindeki gmaili alip,
// bir variable'a depolayiniz
let std2={
    email:"8123288@outlook.co123m"
}

let mailType = std2.email.substring         (std2.email.indexOf("@") + 1,        std2.email.lastIndexOf("."));
console.log(mailType);

//9 Eger yukaridaki mailType gmail ise "Basarili" seklinde, degilse "Basarisiz" seklinde console'a mesaj yazdiriniz
mailType=='gmail'       ?     console.log('basarili')      :        console.log('basarisiz')       ;

//10 Bir parametreye sahip function olusturunuz. Buna string parametre verip , bu stringin tamamini kucuk harfe ceviriniz . Daha sonra basindaki ve sonundaki bosluklari siliniz .



let fullName = function(a){
    let result = a.toLowerCase().trim();
    return result;
}

console.log(fullName('   Wise  QUaARTER    '));



//11 Object icerisinde value olarak function olusturunuz,
// Ayrica property olarak color isminde bir key olusturup herhangi bir deger veriniz.
// `vermis oldugunuz text\'in max index numarasi X\'dir. Renk ==> Y 'dir` seklinde back-tick ile mesaj yazdiriniz

let stdent ={
    name:'Veli',
    lName:'Efendi',
    dogumTarihi:92,
    color:'kirmizi',
    fullName: function(a){
        console.log(`vermis oldugunuz text'in max index numarasi ${a.length-1} 'dir. Renk ==> ${this.color} 'dir`);
    }

}

stdent.fullName('wise');


//12 sifre isminde variable olusturup deger veriniz. 
//Eger bu sifre buyuk harf ile basliyorsa 'uygun' baslamiyorsa 'uygun degildir' seklinde mesaj yazdiriniz.
// Daha sonra ayriyeten sifrenin  uzunlugunun en az 8 karakter olmasini saglayiniz

let sifre = 'Ksda1234';
let check=      (sifre.charCodeAt(0)>=65    &&   sifre.charCodeAt(0)<=90) && sifre.length>7     ?    'uygun'         :     'uygun degildir'   ;
console.log(check);


//13 Verilen deger number ise uygun, degilse uygun degil seklinde konsola yazdiran arrow function'i yaziniz

let age = 33;

let vote =  Number(age) === age  ?
()=> console.log('uygun')   :
()=> console.log('uygun degildir');

vote();


//14 Verilen degerin uzunlugu 8 den kucuk ise tum karakterleri kucuk harfe, degilse buyuk harfe ceviren arrow function'i yaziniz

let password= 'ASDKJasdasd';

let check1 = password.length<8 ?
()=> password.toLowerCase() :
()=> password.toUpperCase();

console.log(check1());














