"use strict" /* delete calismaz, keywordler degisken adi
olarak kullanilamaz, tanimlanmayan degiskenler kullanilamaz*/
let x = 14

document.write(x + "</br>")



const arabalar = ["bmw", "volvo", "mercedes", "audi"]
arabalar[0] = "togg"
document.write("arabalar: " + arabalar + "</br>")

//Date    --- new ile obje ornegi alinir
const tarih = new Date()

document.write("tarih: " + tarih + "</br>")

document.write("tarih getDate: " + tarih.getDate() + "</br>")
document.write("tarih getDay: " + tarih.getDay() + "</br>")
document.write("tarih getFullYear: " + tarih.getFullYear() + "</br>")
document.write("tarih getTime: " + tarih.getTime() + "</br>")


tarih.setFullYear(2019)
document.write("tarih getFullYear: " + tarih + "</br>")


//Math -> Statik olan siniflara obje ornegi almadan direk sinif adi ile icerisine ulasiriz
document.write("Math PI: " + Math.PI + "</br>")
// 
let fiyat = 3.235235
//en yakin deger yuvarlar
document.write("fiyat round: " + Math.round(fiyat) + "</br>")
//yukariya yuvarlar
document.write("fiyat ceil: " + Math.ceil(fiyat) + "</br>")
//asagiya yuvarlar
document.write("fiyat ceil: " + Math.floor(fiyat) + "</br>")
//ust alir
document.write("Math pow: " + Math.pow(2, 3) + "</br>")
//ust alir
document.write("Math sqrt: " + Math.sqrt(4) + "</br>")

document.write("Math min: " + Math.min(10, 6, 7, 1, 2, 4) + "</br>")
document.write("Math max: " + Math.max(10, 6, 7, 1, 2, 4) + "</br>")

//Random
const rastgeleSayi = Math.round((Math.random() * 100)) //parseInt
document.write("rastgeleSayi: " + rastgeleSayi + "</br>")

document.write("4==4 : " + (4 == 4) + "</br>")
document.write("6==4 : " + (6 == 4) + "</br>")
document.write("6!=4 : " + (6 != 4) + "</br>")
document.write("6>4 : " + (6 > 4) + "</br>")
document.write("6>=6 : " + (6 >= 6) + "</br>")
document.write("6<6 : " + (6 < 6) + "</br>")
document.write("6<=6 : " + (6 <= 6) + "</br>")

document.write("6===6 : " + (6 === "6") + "</br>")
document.write("4==4 && 3==3: " + (4 == 4 && 3 == 3) + "</br>")
document.write("4<4 || 3<3: " + (4 < 4 || 3 < 3) + "</br>")


let yas = 18
let sonuc = yas >= 19 ? "ehliyetli" : "ehliyetsiz"
document.write("sonuc: " + sonuc + "</br>")

let adim = null
let geciciAd = "gecici ad memo"
let yaziSonuc = adim ?? geciciAd
document.write("yaziSonuc: " + yaziSonuc + "</br>")

//IF ELSE

const sayi1 = 4
const sayi2 = 5

if (sayi1 < sayi2) {
    document.write("4 5 ten kucuktur" + "</br>")
}

if (sayi1 > sayi2) {
    document.write("4 5 ten buyuktur" + "</br>")
} else {
    document.write("4 5 ten buyuk degildir" + "</br>")
}

if (sayi1 == 5 && sayi2 == 4) {
    document.write("sayi1 5 ve sayi2 4 tur" + "</br>")
} else if (sayi1 == 4 && sayi2 == 5) {
    document.write("sayi1 4 ve sayi2 5 tir" + "</br>")
} else {
    document.write("sayi1 ve sayi2 4 ve 5 degildir" + "</br>")
}

/* 
Disaridan kullanicidan bir sayi aliyorsunuz bu alinan
sayi ile sizin programiniz 0-100 arasinda rastgele bir sayi 
uretiyor. Eger bu 2 sayi esit ise ekrana "kazandiniz" degilse
"kaybettiniz" yazan bir js kodu yaziniz
*/

//Switch

const gun = 3

switch (gun) {
    case 0:
        document.write("pazar" + "</br>")
        break;
    case 1:
        document.write("pazartesi" + "</br>")
        break;
    case 2:
    case 3:
        document.write("carsamba" + "</br>")
        break;
    case 4:
        document.write("persembe" + "</br>")
        break;
    case 5:
        document.write("cuma" + "</br>")
        break;
    case 6:
        document.write("cumartesi" + "</br>")
        break;
    default:
        document.write("bilinmeyen gun" + "</br>")
        break;
}
document.write("-- - -- - - -- - - -" + "</br>")
document.write(arabalar + "</br>")
document.write("-- - -- - - -- - - -" + "</br>")

//Loop
for (let index = 0; index < arabalar.length; index++) {
    document.write(arabalar[index] + "</br>")
}

/* bir dongu ile 10 kere adinizi ekrana yazdiran bir
js projesi yapiniz */
document.write("-- - -- - - -- - - -" + "</br>")

for (const anahtar in arabalar) {
    if (anahtar == 0) { continue }
    if (anahtar == 2) { break }
    document.write(arabalar[anahtar] + "</br>")
}

document.write("-- - -- - - -- - - -" + "</br>")

//While
let sayac = 0
while (sayac < arabalar.length) {
    document.write(arabalar[sayac] + "</br>")
    sayac++
}
document.write("-- - -- - - -- - - -" + "</br>")

//do while
let yeniSayac = 0
do {
    document.write(arabalar[yeniSayac] + "</br>")
    yeniSayac++
} while (yeniSayac < arabalar.length);

/* 
Kullanici sayi tahmin oyunu oynamaktadir. Kullanicinin 3 hakki
vardir eger kullanici dogru tahmin yaparsa kazandiniz, yanlis tahmin
yapar ve hala hakki varsa bu sefer kullanicinin girdigi degere
gore "daha buyuk" veya "daha kucuk" bir deger girmesi gerektigini
kullaniciya soyleyen, ama 3 hakkinida bitirmisse "kaybettiniz"
yazan bir js projesi yapiniz.

const randomsayi = Math.round(Math.random() * 100);

let haklar = 3;

while (haklar > 0) {
  const tahmin = prompt("Lütfen bir sayı tahmin edin.");

  if (tahmin === randomsayi) {
    document.write("Kazandınız !!!!");
    break; 
  } else if (tahmin < randomsayi) {
    alert("Daha büyük bir sayı girin");
  } else {
    alert("Daha küçük bir sayı girin"); 
  }

  haklar--;
}

if (haklar === 0) {
  document.write("Hakkınız tükendi. Doğru cevap: " + randomsayi);
}

*/


//SET -  WeakSet benzersiz deger tutar
const isimler = new Set(["mavis", "can", "serife", "efe"])

isimler.add("mehmet")//ekle
isimler.delete("yıldız")//sil
document.write("-- - -- - - -- - - -" + "</br>")
//var mi?
document.write("isimler has: " + isimler.has("serife") + "</br>")
//elemaan sayisi
document.write("isimler size: " + isimler.size + "</br>")
// isimler.clear() hepsini sil
for (const deger of isimler) {
    document.write(deger + "</br>")
}
isimler.delete("yıldız")//sil
document.write("-- - -- - - -- - - -" + "</br>")

for (const deger of isimler.entries()) {
    document.write(deger + "</br>")
}

//MAP ile benzersiz anahtarlara sahip deger tutan yapilar olusturulmasi saglanir

const sehirler = new Map(
    [
        ["isim", "yıldız"],
        ["soyad", "onaran"],
        ["yas", 26]
    ]
)
sehirler.set("isim", "yıldız")
sehirler.delete("isim")
document.write("-- - -- - - -- - - -" + "</br>")

for (const deger of sehirler.values()) {
    document.write(deger + "</br>")
}
document.write("-- - -- - - -- - - -" + "</br>")

for (const deger of sehirler.keys()) {
    document.write(deger + "</br>")
}

//TypeOf
document.write("sayi: " + (typeof sayi1) + "</br>")
document.write("adim: " + (typeof adim) + "</br>")
document.write("sehirler: " + (typeof sehirler) + "</br>")
document.write("arabalar: " + (typeof arabalar) + "</br>")

/* 
try da hata olursa catch icine hatayi atar ve catch calisir
finally her zaman calisir
*/

try {
    let degerimiz = (4 / 0) + 5
    throw "sifira bolunme olmaz!"
    document.write("degerimiz: " + degerimiz + "</br>")
} catch (error) {
    document.write("error: " + error + "</br>")
} finally {
    document.write("finally calisti " + "</br>")
}

document.write("ad1 " + ad1 + "</br>")

var ad1 = "mavis"


//This
const kisi = {
    ad: "can",
    yas: 20,
    bilgiYaz: function () {
        document.write("ad: " + this.ad + " yas: " + this.yas + "</br>")
    }
}

kisi.bilgiYaz()

/* 
elinizde araba objesi olsun bu objenin rengi ve beygir gucu ozellikli
ve ayni zamanda satis metodu olsun. bu metot calistirildiginda
ekrana "hosgeldiniz " deyip devaminda rengi ve beygir gucunu yazan
bir js kodu yaziniz.


const araba = {

   renk: "kirmizi",
   beygirgücü: 800,
   satismetodu: "nakit",
   bilgiyaz: function(){
    document.write("renk:" + this.renk + "<br>"+ "beygir gücü: "+  + this.beygirgücü + "<br>" +" satış metodu: " + this.satismetodu )
   }



}

araba.bilgiyaz()
*/

const kisi1 = {
    adSoyad: function () {
        this.ad = "ahmet1"
        document.write("ad: " + this.ad + " soyad: " + this.soyad + "<br>")
    }
}

const kisi3 = {
    adSoyad: function () {
        document.write("ad: " + this.ad + " soyad: " + this.soyad + "<br>")
    }
}

const kisi2 = {
    ad: "yıldız",
    soyad: "onaran"
}

//call miras almaktir, bir fonksiyon icin baska bir objenin elemanlarinin kullanilmasini sglar
//eger ayni miras alinacak obje icini bir noktada degistirirsek
// daha sonrakiler icinde degismis olur
/* 
apply ve call aynidir. Call da parametreler tek tek giderken
Apply da ise dizi olarak gider
*/
kisi1.adSoyad.call(kisi2)
kisi3.adSoyad.apply(kisi2)

/*bir obje icindeki fonksiyonun odunc alinip istenildigi zaman
ilgili isimde cagirilip kullanilmasini saglar */
let oduncAlinan = kisi3.adSoyad.bind(kisi2)
oduncAlinan()

//ARROW FUNCTIONS
function hesapla1(sayi1, sayi2) {
    return sayi1 + sayi2
}

const hesapla2 = (sayi1, sayi2) => sayi1 + sayi2

document.write("hesapla2: " + hesapla2(1, 4) + "<br>")
document.write("hesapla1: " + hesapla1(1, 4) + "<br>")

/* 
kisiden isim soyisim alarak geriye bunlari yan yana donduren
bir arrow func yaziniz ve donen degeri ekrana yazdiran bir js
kodu yaziniz
*/


// Class
class Hayvan {
    constructor(adi) {
        this.ad = adi
        this.renk = "sari"
    }
    adYazdir(yas) {
        document.write("ad: " + this.ad + " renk: " + this.renk + " yas" + yas + "<br>")
    }
}

const hayvan = new Hayvan("tekir")
hayvan.adYazdir(10)

/*
Eliniz Insan diye bir sinif olsun, bu kisinin adi ve yasi nesne
ornegi olusturulurken(constructor ile) gonderildir. Daha Sonra
beslen diye bir metotdu da olsun. Bu metot ise hangi yemegi ne kadar surede 
yiyecegini parametre olarak alsin. Bu bildilerin hepsini ad, yas
yemek ve sureyi ekrana yazdirana bir js kodu yaziniz

class Insan {
    constructor(adi) {
        this.ad = adi
        this.yas = 36
    }
    beslen(x, y) {
        document.write(this.ad + " " + this.yas + " " + x + " yemeğini " + y + " saatte yiyebilirsin" + "<br>")
    }
}

const insan = new Insan("Ayşegül")
insan.beslen("pizza", 5)
*/