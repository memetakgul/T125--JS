        //Objects
        
        /* JS variable lar container dır demiştik. Object ler de container dır. Birden fazla value (property) tutabilirler.
            Object ler {bunun içinde yazılır}
            Object property leri "key: value" şeklinde aralarına virgül koyularak yazılır. 
        */
        // Object içerisinde bir key' e value olarak function verebilirsiniz. O zaman o key bir method olur.
        
        var std ={
            name:'Veli',
            lastName:'Efendi',
            yearOfBirth:2001,
            fullName : function(){
                return this.name +  ' ' + this.lastName;
            },
            color:'red'
        
        
        }
        
        // Object Property lerine erişim.
        // ObjectName.PropertyName  ya da ObjectName['PropertyName']
        console.log(std.name)//Veli
        console.log(std['lastName'])//Efendi
        console.log(std.fullName());// function oldugu icin () //Veli Efendi
        
        console.log(std);
        // this keyword: Yukarıdaki örnekte bu object anlamına gelir, yani std Object ini temsil eder.
        // Function oluştururken isim vermemiz gerekir ancak yukarıdaki örnekte method oluşturmak için
        //      function kullandığımızdan dolayı, method un adı yeterli oluyor. Function a isim vermeye gerek kalmıyor.
        
        // Ex: 
        function withName(){
            console.log('i have a name')
        }
        withName();
        
        
        //Function without name
        let withoutName = function(){
            console.log(' no need name for a function ');
        }
        withoutName();
        
        
        
        
        //       JavaScript Array
        // 1. Way to create Array:
        const cars = ['Toyota', 'Honda', 'BMW', 'Bugatti'];
        
        
        // Array ler genellikle "const" keyword ü ile oluşturulur. Ammaa bu array elemanları değişmez demek değildir.
        // Aynı isimle başka bir array oluşturamayacağınız anlamına gelir, ama array in elemanlarını değiştirebilirsiniz.
        
        // Array e nasıl eleman eklenir:
        const cars2=[];
        cars2[0]='Mercedes';
        cars2[1]='Ferrari';
        cars2[2]='Lexus';
        console.log(cars2);//[ 'Mercedes', 'Ferrari', 'Lexus' ]
        
        
        // 2. Way to create Array:
        const cars3 = new Array('Audi', 'Volvo', 'Tesla');
        console.log(cars3);
        console.log(typeof cars3);//object
        
        
        // Array in elemanlarına ulaşma:
        console.log(cars3[0]);
        console.log(cars3[1]);
        let car1 = cars3[2];
        console.log(car1);
        console.log(typeof car1);//string
        
        
        // Array in elemanlarının değerini değiştirme:
        cars3[1]='Lamborgini';
        console.log(cars3);//[ 'Audi', 'Lamborgini', 'Tesla' ]
        
        
        /* Array ler Object tir.
            array ler elemanlarına ulaşabilmek için index numarası kullanır.
            Object ler elemanlarına ulaşabilmek için property name i kullanır.
         */
        
        
        /* Array içinde eleman olarak:
            -Array
            -Object
            -Function
            -element
        bunları girebilirsiniz.
         */
        
        //Ex:
        const myArray = [];
        myArray[0]=Date.now;
        myArray[1]=withName;
        myArray[2]= cars;
        
        
            // Array Methods:
        // 1) toString(): Array i string e çevirir. Elemanları default olarak virgülle ayırır.
        const fruits =['Banana', 'Orange', 'Apple', 'Mango'];
        console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]
        console.log(fruits.toString()); //Banana,Orange,Apple,Mango
        console.log(typeof fruits.toString()); //string
        let fruitsStr = fruits.toString();
        console.log(fruitsStr);
        console.log(typeof fruitsStr);
        
        
        
        // 2) join(): toString() methodu gibi davranır ancak bunda separator u siz belirleyebiliyorsunuz.
        const fruits2 =['Banana', 'Orange', 'Apple', 'Mango'];
        let fruits2Str = fruits2.join('--');
        console.log(fruits2Str);//Banana--Orange--Apple--Mango
        console.log(typeof fruits2Str)//string
        
        
        
        // 3) pop(): Array in son elemanını siler ve silinen elemanı return eder.
        let fruits2Str2 = fruits2.pop();
        console.log(fruits2Str2)//Mango
        console.log(fruits2)//[ 'Banana', 'Orange', 'Apple' ]
        
        
        // 4) push(): Array in sonuna yeni elemanlar ekler ve yeni oluşan Array in length ini return eder.
        const fruits3 =['Banana', 'Orange', 'Apple', 'Mango'];
        console.log(fruits3.push('Watermelon', 'Kiwi'))//6
        console.log(fruits3);//[ 'Banana', 'Orange', 'Apple', 'Mango', 'Watermelon', 'Kiwi' ]
        
        // Aynı işi yapacak başka bir yol:
        fruits3[fruits3.length]= 'Erik';
        console.log(fruits3);//[ 'Banana', 'Orange', 'Apple', 'Mango', 'Watermelon', 'Kiwi', 'Erik' ]
        
        
        // 5) shift(): Array in ilk elemanını siler ve silinen elemanı return eder.
        const fruits4 =['Banana', 'Orange', 'Apple', 'Mango'];
        console.log(fruits4.shift());
        console.log(fruits4);//[ 'Orange', 'Apple', 'Mango' ]
        
        // 6) unshift(): Array in başına yeni elemanlar ekler. Yeni oluşan Array in length ini return eder.
        const fruits5 =['Banana', 'Orange', 'Apple', 'Mango'];
        console.log(fruits5.unshift('Elma', 'Melon'))//6
        console.log(fruits5)//[ 'Elma', 'Melon', 'Banana', 'Orange', 'Apple', 'Mango' ]
        
        // 7) delete: Array in elemanları delete operator ile silinebilir. Silinen elemanın yeri boş kalır.
        const fruits6 =['Banana', 'Orange', 'Apple', 'Mango'];
        delete fruits6[2];
        console.log(fruits6);//[ 'Banana', 'Orange', <1 empty item>, 'Mango' ]
        
        fruits6[2]='Kavun';
        console.log(fruits6);//[ 'Banana', 'Orange', 'Kavun', 'Mango' ]
        
        // 8) concat(): Array leri concatenation yapar.
            // mevcut Array i değiştirmez, yeni bir array return eder.
        
            const fruits7 =['Banana', 'Orange', 'Apple', 'Mango'];
        
            const fruits8 =['Kiwi', 'Armut'];
            const fruits9= ['Banana', 'Armut', 'Erik'];
        
            const allArray = fruits7.concat(fruits8, fruits9);
            console.log(allArray);/*[
                'Banana', 'Orange',
                'Apple',  'Mango',
                'Kiwi',   'Armut',
                'Banana', 'Armut',
                'Erik'
              ] */
            console.log(fruits7);//[ 'Banana', 'Orange', 'Apple', 'Mango' ];
        
        
        // 9) splice(startingIndex, length): Listenin belirtilen index'inde itibaren kac adet eleman getirmesini istedigimizi soyleriz.Listeden cekip alir, Ayriyeten parametrenin devaminda, cekip aldigimiz elemanlarin yerine yeni elemanlar ekleyebiliriz.
        const fruits10 =['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Armut'];
        console.log(fruits10.splice(2, 3, 'Avacado', 'Dragon Fruit'));//[ 'Apple', 'Mango', 'Kiwi' ]
        console.log(fruits10);//[ 'Banana', 'Orange', 'Avacado', 'Dragon Fruit', 'Armut' ];
        
        // splice() methoduyla eleman silebilirsiniz, yeri de boş kalmaz.
        const fruits11=['Banana', 'Orange', 'Apple', 'Mango'];
        fruits11.splice(2,1);
        console.log(fruits11);//[ 'Banana', 'Orange', 'Mango' ]
        
        
        // 10) slice(strIndex, endIndex): Array in bir parçasını alır ve onunla yeni bir Array oluşturur.
                // İkinci parametre optional dır. 
                // Mevcut array değişmez.
                const fruits12=['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Armut'];
                console.log(fruits12.slice(2));//[ 'Apple', 'Mango', 'Kiwi', 'Armut' ] ==> index 2 den basladi sona kadar aldi
                console.log(fruits12.slice(2,5));//[ 'Apple', 'Mango', 'Kiwi' ] ==> 2den basladi 5 kadar (5 dahil degil) getirdi
        
                const fruits12Part= fruits12.slice(1,4);
                console.log(typeof fruits12Part);//object
        
        
        
        // 11) sort(): elemanları alphabetically sort eder.
        const fruits13=['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Armut'];
        console.log(fruits13.sort());
        console.log(fruits13);//[ 'Apple', 'Armut', 'Banana', 'Kiwi', 'Mango', 'Orange' ];
        
        
        // 12) reverse(): Array in elemanlarını tersten yazar. Alfabetik olarak tersten siralamaz. Mevcut hali ters cevirir.
        //  Bir Array in elemanlarını descending order a göre sıralamamız için:
        //      önce sort() yapar ascending e göre sıralarız, daha sonra da
        //      reverse() ile descending order a çeviririz.
        const fruits14 = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Armut'];
        fruits14.reverse();//[ 'Armut', 'Kiwi', 'Mango', 'Apple', 'Orange', 'Banana' ]
        console.log(fruits14);
        
        
        const fruits15 = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Armut'];
        fruits15.sort();
        fruits15.reverse();
        console.log(fruits15);
        
        
        // Note: Method ları zincirleme kullanabiliyoruz.
        const fruits16 = ['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Armut'];
        console.log(fruits16.sort().reverse());







        