// //******* ORNEK-1*******//

// //! Arrow Function
// let kareBul = (sayi) => sayi * sayi;

// //! Expression Function
// function kareAl(sayi2) {
//     return sayi2 * sayi2;
// }

// console.log(kareBul(10));
// console.log(kareAl(10));

// //******* ORNEK-2*******//

// let cevirFahrenheit = (asfiyanur) => (asfiyanur * 9) / 5 + 32;

// let deger = +prompt("Bir değer gir");

// console.log(cevirFahrenheit(deger));
// // console.log(cevirFahrenheit(20));

// //******* ORNEK-3*******//

// let alanBul = (a, b) => {
//     return `Dikdörtgenin Alanı: ${a * b}`;
// };

// let kısaKenar = +prompt("Kısa kenarı gir");
// let uzunKenar = +prompt("uzun kenarı gir");
// // console.log(alanBul());

// console.log(alanBul(kısaKenar, uzunKenar));

// //******* ORNEK-4*******//

// let cemberCevre = (yaricap) =>
//     `Çemberin Çevresi: ${2 * Math.PI * yaricap} ve Çemberin Alanı: ${Math.PI * yaricap * yaricap
//     }`;

// console.log(cemberCevre(5));

// //******* ORNEK-5*******//

// let sayiCevir = (sayi) => {
//     let tersCevir = 0;
//     while (sayi != 0) {
//         tersCevir = tersCevir * 10;
//         tersCevir = tersCevir + (sayi % 10);
//         sayi = Math.trunc(sayi / 10); //! Direkt Küsuratı Atar. Örn 10.5, 10 olur
//     }
//     return tersCevir;
// };

// console.log(sayiCevir(1234567));

// //? COZUM 2
// let sayiCevir2 = (sayi) => {
//     let tersSayi = sayi.toString().split("").reverse().join("");
//     // return parseInt(tersSayi);
//     return +tersSayi; //! + operatörü ile string ifadeyi tekrar sayıya çevirdik.
// };

// // console.log(sayiCevir2(123456));
// // let girilenSayi = Number(prompt("bir sayı giriniz"));
// // console.log(sayiCevir2(girilenSayi));

// //******* ORNEK-6 *******//

// let harfSirala = (metin) => {
//     return metin.toLowerCase().split("").sort().join("");
// };

// console.log(harfSirala("nfdjnavcbvsnmcanc"));

//******* ORNEK-7 *******//

// let unluBul = (kelime) => {
//   let sayac = 0;
//   kelime = kelime.toLowerCase();
//   for (let i = 0; i < kelime.length; i++) {
//     let harf = kelime.charAt(i);
//     if (
//       harf == "a" ||
//       harf == "e" ||
//       harf == "ı" ||
//       harf == "i" ||
//       harf == "o" ||
//       harf == "ö" ||
//       harf == "u" ||
//       harf == "ü"
//     ) {
//       sayac++;
//     } else {
//       return `Senin kelimende ünlü harf yok`;
//     }
//   }
//   return sayac;
// };

// let metin = prompt("bir kelime gir");
// unluBul(metin);

// Örnek-8
// Kullanıcını girdiği kelimenin palindrom olup olmadığını kontrol eden fonksiyonu yazalım.
// örn => kayak yazınca true değer verecek. murat yazınca false değer verecek
// (palindrom tersten ve düzden yazılınca aynı olan kelime. örn; tat, kayak, kelek vb.)
let palindromeKontrol = (metin) => {
    metin = metin.toLowerCase();
    for (let i = 1; i < metin.length; i++) {
        if (metin.charAt(i) != metin.charAt(metin.length - i - 1)) {
            // Comparison fail
            return false;
        }
    }
    return true;
};
​

// Örnek-9
// Kullanıcın girdiği cümledeki kelimelerin ilk harfini büyüten fonksiyonu yazalım.
// örn => bu cümledeki her kelimenin ilk harfi büyük olacak
// çıktı => Bu Cümledeki Her Kelimenin Ilk Harfi Büyük Olacak

// Örnek-10
// Girilen sayının faktöriyelini alan recursive fonksiyonu yazalım.
// let fak = 1;
// const fakBul = (x) => {
//   for (let i = 1; i <= x; i++) {
//     fak = fak * i;
//   }
//   return fak;
// };

let f = (sayi) => {
  if (sayi === 1) {
    return 1;
  } else if (sayi <= 0) {
    return 0;
  } else {
    return sayi * f(sayi - 1);
  }
};
console.log(f(6));

// Örnek-11
// Girilen cümlede hangi harften kaç tane olduğunu bulan fonksiyonu yazalım.
// örn => bu bir cümledir. kullanıcı b harfini sorgularsa 2 değeri dönecek. u harfini sorgularsa 1 dönecek.

const harfBul=(cumle,harf)=>{
let sayac=0;
let cumle2=cumle.toLoverCase();
for(let i=0; cumle2)
}


// Örnek-12
// Girilen sayının asal sayı olup olmadığını bulan recursive fonksiyonu yazalım.

// Örnek-13
// Cümlede tekrar eden harfleri sayıya çeviren fonksiyon
// örn => aaabbcccd çıktı => 4a2b3c1d olacak
