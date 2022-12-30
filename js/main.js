// Type conversions
// var str = "22";

// console.log(typeof(str));
// +str;
// console.log(typeof(Number(str)));
// console.log(typeof(Boolean(str)));
// console.log(typeof(parseInt(str)));
// console.log(typeof(parseFloat(str)));


// var n = 11;
// console.log(typeof(n));
// console.log(typeof(String(n)));
// console.log(typeof(n + ""));

// var str = "123salom";
// console.log(typeof(str));
// console.log(typeof(Number(str)));
// console.log(typeof(parseInt(str)));
// String();
// Number();
// Boolean();
// Array();
// Object();
// BigInt();
// Symbol();
// parseInt();
// parseFloat();
// Infinity();

/*
 1. String
 2. Number
 3. Boolean
 4. null
 5. Undefined
 6. BigInt
 7. Symbol
 8. Object
*/

// var n = 12;
// console.log(typeof(n));

// var isMarried = false;
// console.log(typeof(isMarried));

// var age = null;
// console.log(typeof(age));

// var a;
// console.log(typeof(a));

// var bigInt = 100n;
// console.log(typeof(bigInt));

// var sym = Symbol("ID");
// console.log(typeof(sym));

// var obj = {};
// console.log(typeof(obj));

// var arr = [];
// console.log(typeof(arr));

// String Methods
// String length -> not Method
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String charAt()
// String split()
// String startsWith()
// String endsWith()

var str = "Hello world! world!";
console.log(str);
console.log(str.length);
// length - stringni uzunligini aniqlab beradi

// console.log(str.slice(0, 5));
// slice() - stringni, belgilangan indexdan boshlab, belgilangan indexgacha qirqib beradi, ya'ni 0-indexdan boshlab 5-indexgacha qirqib bermoqda, 5-indexni hisobga olmaydi
// console.log(str.slice(1, -1));
// 1-indexdan boshlab, -1-indexgacha qirib beryapti, -1-index elementlarni oxirgisi degani

// console.log(str.slice(0, -7));

// console.log(str.slice(13));

// console.log(str.substring(0, 5));
// substring() - 0-indexdan boshlab, 5-indexgacha qirib beradi, 5-index hisobga olinmaydi

// console.log(str.substring(1, -1));
// console.log(str.substring(1, str.length -1));

// console.log(str.slice(5, 11));
// console.log(str.substring(5, 11));
// console.log(str.substr(5, 11))
// substr() - 0-indexdan boshlab, 11 ta elementlarni qirqib beradi

// console.log(str.replace("world!", "Dunyo!"));
// replace() - matnni ichidan belgilangan so'zni, birinchi kelganini o'zgartiradi
// console.log(str.replaceAll("world!", "Hammasi"));
// replaceAll() - matnni ichidagi melgilangan so'zni, barchasini o'zgartirib beradi

// console.log(str.toUpperCase()); // strni barcha elementlarini katta harflarga o'girib beradi
// console.log(str.slice(0, 5).toUpperCase() + str.slice(5)); 
// console.log(str.toLowerCase()); // stringni barcha elementlarini kichik harflarga o'girib beradi

// console.log(str.slice(20).concat(" Nimadir! ", str));

// console.log(str.charAt(0));
// console.log(str.charAt(0 + 1));

// console.log(str.split(" "));

// console.log(str.startsWith("Hello"));
// console.log(str.startsWith("lo"))

// console.log(str.endsWith("world!"));
// console.log(str.endsWith("wor"));

// console.log(str.slice(2, 4) === "ll");

// && and va
// || or yoki
// ! not 

// if(12 > 10 && 12 < 13){
//     console.log(true);
// }

// if(12 > 10 || 12 < 11){
//     console.log(true);
// } else {
//     console.log(false);
// }

// if(!false){
//     console.log(true);
// } else {
//     console.log(false);
// }

// 1-masala
// helloName
// var name = "Bob";

// console.log("Hello " + name  + "!");
// console.log(`Hello ${name}!`);

// 2-masala
// makeAbba
// var a = "Hi", b = "Bye";
// HiByeByeHi

// console.log(a + b + b + a);
// console.log(`${a}${b}${b}${a}`);

// 3-masala
// makeTags
// <i>Yay</i> 
var tag = "i", word = "Yay";
console.log("<" + tag + ">" + word + "</" + tag + ">");
console.log(`<${tag}>${word}</${tag}>`);

// 4-masala
// makeOutWord
var out = "<<<>>>", word = "WooHoo";
console.log(out.slice(0, out.length / 2) + word + out.slice(out.length / 2))

// 5-masala
// extraEnd
var str = "Hello"; // lololo
console.log(str.slice(-2) + str.slice(-2) + str.slice(-2));
console.log(str.slice(-2).repeat(3));

// 6-masala
// firstTwo
var str = "Hello"; // He
console.log(str.slice(0, 2));

// 7-masala
// firstHalf
var str = "WooHoo"; //Woo
console.log(str.slice(0, str.length / 2));