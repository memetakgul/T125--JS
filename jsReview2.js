/////////////////  1 /////////////////////
// Bir restoranda her ay otomatik tum yemek fiyatlarina yuzde 10 zam yapan kodu yaziniz.
// Soru 1: Bir restoranın menüsündeki yemekler ve fiyatlarını takip etmek için hangi veri yapısını kullanmak daha uygun olur, Set mi yoksa Map mi? Neden?

// Write the code that automatically increases the prices of all meals in a restaurant by 10 percent every month.
// Question 1: Which data structure would be more appropriate to use to keep track of the dishes and prices on a restaurant's menu, Set or Map? From where?

const restaurantMenu = new Map();
restaurantMenu.set('Kofte', 25);
restaurantMenu.set('Izgara Tavuk', 20);
restaurantMenu.set('Kumpir', 30);
restaurantMenu.set('Kabak Dolmasi', 18);

// Soru 2: Bugünün tarihini ve dünün tarihini nasıl alabiliriz?
// Question 2: How can we get today's date and yesterday's date?
const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate()-1);


// Soru 3: Eğer bugünün ayı ile dünün ayı farklıysa yemeklere %10 zam yapiniz.
// Question 3: If today's month is different from yesterday's month, increase the meals by 10%.
if(today.getMonth() !== yesterday.getMonth()){
    for(const menuItem of restaurantMenu.entries()){
        const [food, price] =menuItem;
        const updatedPrice =price * 1.1 //%10 zam
        restaurantMenu.set(food, updatedPrice );
    }
}
console.log(restaurantMenu);






////////////////  2 ///////////////////////

// Kullanicinin girmis oldugu alarm saatinde, alarmin calmasini (console.log) saglayiniz.
// Kullanıcıdan alarm saati bilgisini alalım
const alarmHour = prompt("Alarmi kaçta kurmak istersiniz? (Saat olarak girin, 24 saat formati kullanin)");
/*
prompt JavaScript'te bir kullanıcıdan veri almak için kullanılan bir yöntemdir. Tarayıcı ortamında kullanıcıya bir ileti kutusu gösterir ve kullanıcının metin girmesine izin verir. Kullanıcı bir metin girdikten sonra, bu metni bir değişkene atayabilir veya işleyebilirsiniz.
prompt metoduyla alınan veri varsayılan olarak bir string olarak döner
*/
const currentHour = new Date().getHours();// Icinde bulundugumuz tarih ve saatden, suanki saati alalim

const alarmTime = parseInt(alarmHour);// Kullanicinin girmis oldugu saat number'a cevirelim

if(alarmTime === currentHour){// Kullanicinin kurdugu alarm degeri ile icinde bulundugumuz saati karsilastiralim
    console.log('Alarm zamani');
}else{
    console.log(`Alarm ${alarmHour} olarak ayarlandi`);
}





//////////////////////////// 3 ///////////////////////////////////

// Alışveriş Sepeti olusturup, kullanicinin ekledigi esyayi sepete ekleyiniz. Daha sonra son eklenen esyayi sepetten cikariniz.Daha sonra Sepette belirli bir urunun varligini kontrol ediniz.


let alisverisSepeti =['kalem', 'kitap', 'silgi', 'defter', 'raptiye'];
// Ürün Ekleme ve Çıkarma
// 2. Alışveriş sepetine yeni bir ürün eklemek için hangi array metodu kullanılabilir? Örnek bir kullanım gösterebilir misiniz?
alisverisSepeti.push('Cetvel');
console.log(alisverisSepeti);


// 3. Sepetten bir ürün çıkarmak için hangi array metodu kullanılabilir? Nasıl kullanılır?
alisverisSepeti.pop();
console.log(alisverisSepeti);
/*
alisverisSepeti.indexOf('kitap');
alisverisSepeti.splice(alisverisSepeti.indexOf('kitap'), 1);
console.log(alisverisSepeti);
*/



// Belirli Bir Ürünün Varlığını Kontrol Etmek
// 4. Bir alışveriş sepetinde belirli bir ürünün var olup olmadığını nasıl kontrol edebiliriz?

if(alisverisSepeti.includes('defter')){// /Includes/ Array icerisinde belirtilen elemanin bulunup bulunmadigini kontrol eder
    console.log('sepetinizde defter bulunuyor')
}else{
    console.log('sepetinizde defter bulunmuyor')
}



// Sepeti Boşaltma
// 5. Bir alışveriş sepetini method kullanarak tamamen bosaltiniz. Daha sonra eger sepet dolu ise Alisveriniz sepetiniz doludur yazdiriniz. Dolu degilse bostur yazdiriniz.
alisverisSepeti.splice(0, alisverisSepeti.length)
console.log(alisverisSepeti);

if(alisverisSepeti.length >0){
    console.log('sepetiniz doludur')
}else{
    console.log('sepetiniz bostur')
}




///////////////////////////////////////////////////   4              /////////////////////////////////////////////

// Soru 1: Bir e-ticaret sitesindeki ürünleri temsil eden bir constructor fonksiyonu hazirlayiniz. Icerisinde isim, kategori ve fiyat degerleri iceren sablon olusturunuz

function Product(name, category, price){
    this.name= name;
    this.category= category;
    this.price= price;
    // Soru 3: Verilen indirim oranina gore urunlerin fiyatlarini dusuren function'i method icerisinde olusturunuz.
    this.discountedPrice = function(discount){
        return this.price - (this.price * (discount /100));
    }
}

// Soru 2: Bu Product constructor ile phone , shirt ve book isimli 3 adet object olusturunuz.
let phone = new Product('Iphone 13', 'Electronics', 1200);
let shirt = new Product('Slim Fit Shirt', 'Fashion', 35);
let book = new Product('Javascript Basics', 'Books', 20);

// Ürünlerin indirimli fiyatlarını hesaplayalım ve console'da gorelim.
console.log(phone.discountedPrice(10));//1080
console.log(shirt.discountedPrice(20));//28
console.log(book.discountedPrice(30));//14





////////////////////////////////// 5 /////////////////////////

// Soru: Bir online alışveriş platformunda, kullanıcının sepetindeki ürünlerin toplam fiyatını hesaplayan bir fonksiyon yazmanız isteniyor. Ayrıca, eğer kullanıcının alışveriş tutarı belirli bir sınırdan yüksekse, kargo ücreti alınmaması gerekiyor. Bu durumu nasıl ele alırsınız?

// Kullanıcı sepetindeki ürünler

const userCart = [
    {name:'Telefon' , price:1500}  ,
    {name:'Kulaklik' , price:100}  ,
    {name:'Kalem Seti' , price:20} 
]


function calculateTotalPrice(cart){
    let total=0;
    for(const item of cart){
        
        total +=item.price;
    }
    return total;
}


// Kargo ücreti kontrolü

function applyShippingDiscount(totalAmount){
    const freeShippingThreshold=1000; // Bedava kargo icin sinir toplam ucret

        if(totalAmount > freeShippingThreshold){
            return 'Toplam tutar ' + totalAmount + ' TL. Kargo Ucreti sizden alinmayacaktir';
        }else{
            return 'Toplam tutar ' + totalAmount + ' TL. Kargo ucreti ekleniyor'
        }
}


const totalAmount = calculateTotalPrice(userCart);
const shippingMessage=  applyShippingDiscount(totalAmount);
console.log('Sepet toplami  ' + totalAmount+ ' TL');
console.log(shippingMessage);




////////////////////////////////// 6 ////////////////////////////////////

class Hayvan{
    constructor(isim, yas){
        this.isim =isim;
        this.yas=yas;
    }

    konus(){
        console.log(`${this.isim} ses cikariyor`)
    }
    yasHesapla(){
        console.log(`${this.isim} ${this.yas} yasinda`)
    }

}
let hayvan1 = new Hayvan('inek' , 4);
//Alt sinif

class Kopek extends Hayvan{
    constructor(isim, yas, tur){
        super(isim, yas);// Üst sınıfın constructor'ını çağırır ve isim, yaş özelliklerini ayarlar
        this.tur = tur;
    }

    hareketEt(){
        console.log(`${this.isim} kosuyor`)
    }
}



class Kedi extends Hayvan{
    constructor(isim, yas, cins){
        super(isim, yas);
        this.cins =cins;
    }

    miyavla(){
        console.log(`${this.isim} miyavliyor`)
    }

}


// Kopek ornegi olusturalim 

let karabas = new Kopek('Karabas', 5, 'Golden');
karabas.konus();
karabas.yasHesapla();
karabas.hareketEt();
console.log(karabas);


  // Kedi örneği oluşturalım
  let pamuk = new Kedi('Pamuk', 3, 'Siyam');
  pamuk.konuş(); // Kedinin konuşma metodu
  pamuk.yaşHesapla(); // Kedinin yaşını hesaplayan metot
  pamuk.miyavla(); // Kedinin miyavlama metodu