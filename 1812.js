

        // Date Objects:

// new Date() constructor ı ile oluşturulur. Dört yolla oluşturulur:
// JS ayları sıfırdan başlayarak numaralandırır. Ocak = 0, Şubat = 1, ..... Aralık = 11
// Belirtilen zamanları GMT(0) => UTC (Universal Time Coordinated) a çevirerek verir.
// JS e göre "zero time" = 1 Ocak 1970 tir. JS date leri, belirtilen tarih zaman ile zero time
    // arasındaki zaman farkının milisaniye cinsinden değeriyle tutar.
// Buradaki date hesaplamaları bu bilgisayarın saat dilimi olan GMT+3 e göre yapılmıştır.
        // Onun için verilen zamandan önce 3 saat çıkararak GMT+0 a çevirir
        
        // 1) new Date(): Şu anki tarih ve zamanı yeni bir date object oluşturarak verir.
        const d = new Date();
        console.log(d);//2023-12-18T18:50:54.248Z
        
        
        // 2) new Date(year, month, day, hours, minutes,seconds, milliseconds):
        const d1 = new Date(2018, 2, 18,11);
        console.log(d1)//2018-03-18T08:00:00.000Z
        
        const d2 = new Date(2018, 2, 18, 11, 33, 24, 111);
        console.log(d2);//2018-03-18T08:33:24.111Z
        
        
        // 3) new Date(dateString): String den date object i oluşturur.
        const d3 = new Date('March 18, 2018 13:44:00');
        console.log(d3);//2018-03-18T10:44:00.000Z
        
        
    
        // 4) new Date(milliseconds): Girilen milisaniye + zero time olarak şekilde yeni bir date object oluşturur.
        const zeroTime = new Date(0); 
        console.log(zeroTime);//1970-01-01T00:00:00.000Z
        
        
        
        
        // Date Methods:
        // 1) Date.parse(): String olarak verilen date in zero time la arasındaki milisaniye cinsinden zaman farkını verir.
        let msec = Date.parse('March 18, 2018');//==> bu tarihi önce Zulu ya çevirir sonra milisaniye farkını bulur.
        console.log(msec);// 1521320400000  ==> verilen tarihle zero time arasında bu kadar milisaniye fark var demek ki
        
        const d6= new Date(msec);
        console.log(d6);//2018-03-17T21:00:00.000Z
        
        
        // // 2) Get Date Methods:
        // getTime(): Verilen tarihle zero Time arasındaki zaman farkını milisaniye cinsinden verir.
        // Date.now(): şu anki zamanla zero time arasındaki zaman farkını milisaniye cinsinden veriyor.
        // getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds(), getMilliseconds(), getDay();
        
        console.log(Date.now()); // 1702926629362
        const d7 = new Date();
        console.log(d7); // 2023-12-18T19:10:46.625Z
        console.log(d7.getTime()); //1702926671294
        console.log(d7.getFullYear()); // 2023
        console.log(d7.getMonth()); // 11
        console.log(d7.getDate()); // 18  ==> Verilen tarilin ayin kacinci gunu oldugunu verir
        console.log(d7.getHours()); // 22 ==> Yerel saate gore verir.
        console.log(d7.getMinutes()); // 11
        console.log(d7.getSeconds()); // 40
        console.log(d7.getMilliseconds()); // 538
        console.log(d7.getDay()); //1 ==> Haftanin kacinci gununde oldugunuzu verir. Pazar == 0   Cumartesi ==6
        
        
        // 3) Set Date Methods:
        // Bir date objecti için (years, months, days, hours, minutes, seconds, milliseconds) bunları set eder.
        
        const d8 = new Date();
        console.log(d8); // 2023-03-24T18:55:23.192Z
        d8.setFullYear(2000);
        console.log(d8); // 2000-03-24T19:55:23.192Z
        d8.setMonth(1);
        console.log(d8); // 2000-02-24T19:55:23.192Z
        d8.setDate(11);
        console.log(d8); // 2000-02-11T19:55:23.192Z
        d8.setHours(19);
        console.log(d8); // 2000-02-11T17:55:23.192Z
        d8.setMinutes(33);
        console.log(d8); // 2000-02-11T17:33:23.192Z
        d8.setSeconds(44);
        console.log(d8); // 2000-02-11T17:33:44.192Z
        d8.setMilliseconds(222);
        console.log(d8); // 2000-02-11T17:33:44.222Z
        d8.setTime(86400000);
        console.log(d8); // // 1970-01-02T00:00:00.000Z ==> d8 i, zero time belirtilen kadar milisaniye ekleyerek o tarihe ayarla
        

                    // JavaScript Sets:
        // Unique value'lerden olusur
        
        const numbers = new Set();
        numbers.add(3);
        numbers.add(5);
        numbers.add(7);
        console.log(numbers);//Set(3) { 3, 5, 7 }
        
        const fruits = new Set(['Orange', 'Banana', 'Apple', 'Orange']);
        console.log(fruits);//Set(3) { 'Orange', 'Banana', 'Apple' }
        console.log(typeof fruits);//object
        
        fruits.add('Kiwi');
        fruits.add('Mango');
        
        console.log(fruits);//Set(5) { 'Orange', 'Banana', 'Apple', 'Kiwi', 'Mango' }
        
        
        
        // forEach(): Bu method Set in her bir elemanı için function ı çağırır. // Loop
        const fruits2 = new Set(['Orange', 'Banana', 'Apple', 'Kiwi', 'Mango']);
        
        let text ='';
        
        fruits2.forEach(function(value){//elemanlari tek tek (value)kismina alir calistir.
            
                text +=  value + '**';
            
        }
        )
        
        console.log(text);//Orange**Banana**Apple**Kiwi**Mango**
        
        
        
        // values(): Set teki bütün value ları içeren yeni bir iterator object oluşturur
        
        const fruits3 = new Set(['Orange', 'Banana', 'Apple', 'Kiwi', 'Mango']);
        console.log(fruits3.values());//[Set Iterator] { 'Orange', 'Banana', 'Apple', 'Kiwi', 'Mango' }
        
        
        
        
        let text2 = '';
        
        for( const x of fruits3.values() ){
            text2 += x + '**';
        }
        console.log(text2);//Orange**Banana**Apple**Kiwi**Mango**
        
        
        
        
        // JavaScript Maps:
        // key-value şeklinde entry ler tutar. key ler herhangi bir data type olabilir.
        // key ler unique olmalıdır.
        // Map, key lerin oluşturulma sırasını aklında tutar.
        // Creating Map:
        // 1.Way
        
        const cities =new Map();
        cities.set('Istanbul', 34);
        cities.set('trabzon', 63);
        cities.set('Izmir', 35);
        console.log(cities);//Map(3) { 'Istanbul' => 34, 'trabzon' => 63, 'Izmir' => 35 }
        
        
        // Note: aynı key eklenilirse, o key in value sunu update eder. Yani o key i bir daha eklemez.
        cities.set('trabzon', 61);
        console.log(cities);//Map(3) { 'Istanbul' => 34, 'trabzon' => 61, 'Izmir' => 35 }
        
        
        
        //2.Way
        const cities2 = new Map([
         ['Istanbul', 34]  , ['trabzon', 61]  , ['Izmir', 35]   
        ]);
        console.log(cities2);//Map(3) { 'Istanbul' => 34, 'trabzon' => 61, 'Izmir' => 35 }
        
        
        // map teki bir key e ait value yu getirmek için get() methodu kullanılabilir.
        console.log(cities2.get('trabzon'));//61
        
        // has() methodu ile bir key in map içerisindeki varlığı sorgulanır, boolean return eder.
        console.log(cities2.has('trabzon')); // true
        
        // delete() methodu: belirtilen key e ait entry i silmek için kullanılır.
        cities2.delete('trabzon');
        console.log(cities2);//Map(2) { 'Istanbul' => 34, 'Izmir' => 35 }
        
        // size property: Map in entry sayısını verir.
        console.log(cities2.size);//2
        
        
        
        
        // forEach():
        const cities3 = new Map([
            ['istanbul', 34],
            ['trabzon', 61],
            ['izmir', 35]
        ]);
        
        // Bütün entry leri yazdıralım:
        cities3.forEach(function(value, key){ // JS map forEach function'in da ilk parametre olarak her zaman entry'deki value'yi okur. O sebeple ilk verdigimiz parametre value'yi temsil eder.
            console.log(key + '=>' + value);
        }) /* 
        istanbul=>34
        trabzon=>61
        izmir=>35
        */
        
        // Ex:
        let text3 = '';
        cities3.forEach(function(value, key){
            text3 += key + '=>' + value + ', ';
        })
        console.log(text3); // istanbul=>34, trabzon=>61, izmir=>35, 
        
        
        // entries():
        const cities4 = new Map([
            ['istanbul', 34],
            ['trabzon', 61],
            ['izmir', 35]
        ]);
        
        let text4 = '';
        for(const x of cities4.entries()){
            text4 += x + '???';
        }
        console.log(text4); // istanbul,34???trabzon,61???izmir,35???
        
        // Ex:
        let text5 = '';
        for(const x of cities4.values()){
            text5 += x + '***';
        }
        console.log(text5); // 34***61***35***