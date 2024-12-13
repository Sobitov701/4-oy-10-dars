//1-misol
//Berilgan massivdagi barcha elementlarni ekranga chiqaruvchi dastur yozing.

let num1 = [1, 2, 3, 4, 5, 6, 7];

num1.forEach(function (value) {
  console.log(value);
});

//2-misol
//Massivdagi har bir elementning kvadratini hisoblang va ekranga chiqaring.

let num2 = [1, 2, 3, 4, 5, 6, 7];

num2.forEach(function (value) {
  console.log(value ** 2);
});

//3-misol
//Massivdagi barcha elementlarni ikkiga ko'paytiring va ularni yangi massivga joylang.

let num3 = [1, 2, 3, 4, 5, 6, 7];

num3.forEach(function (value) {
  console.log(value * 2);
});

//4-misol
//Berilgan massivdan 5 dan katta bo'lgan barcha elementlarni topib, ularni ekranga chiqaruvchi dastur yozing.

let num4 = [1, 2, 3, 4, 5, 6, 7];

num4.forEach(function (value) {
  if (value > 5) {
    console.log(value);
  }
});

//5-misol
//Har bir elementga 10 qo'shib, yangi massivga saqlang.

let num5 = [1, 2, 3, 4, 5, 6, 7];
let sum5 = [];

num5.forEach(function (value) {
  sum5.push(value + 10);
});

console.log(sum5);

//6-misol
//Massivdagi barcha juft sonlarni ekranga chiqaring.

let num6 = [1, 2, 3, 4, 5, 6, 7];

num6.forEach(function (value) {
  if (value % 2 == 0) {
    console.log(value);
  }
});

//7-misol
//Har bir elementning teskari tartibini chiqaruvchi dastur yozing (reverse bilan).

let num7 = ["salom", "dunyo", "dastur", "tillar"];

num7.forEach(function (value) {
  let sum7 = value.split("").reverse().join("");
  console.log(sum7);
});

//8-misol
//Berilgan massivdan "a" harfi mavjud bo'lgan elementlarni ekranga chiqaring (includes bilan).

let num8 = ["salom", "dunyo", "dastur", "tillar", "olma"];

num8.forEach(function (value) {
  if (value.includes("a")) {
    console.log(value);
  }
});

//9-misol
//Massivdagi har bir elementni yangi massivga indexOf orqali indeks bilan birlashtiring.

let num9 = [1, 2, 3, 4, 5, 6, 7];
let sum9 = [];

num9.forEach(function (value) {
  let index = num9.indexOf(value);
  sum9.push(index, value, `;`);
});

console.log(sum9);

//10-misol
//Har bir elementni vergul orqali birlashtirib, satr ko'rinishida chiqaruvchi dastur yozing (join bilan).

let num10 = [1, 2, 3, 4, 5, 6, 7];

let sum10 = num10.join(", ");

console.log(sum10);

//11-misol
//Massivdagi har bir elementdan faqat birinchi 3 belgisini chiqaruvchi dastur yozing (slice bilan).

let num11 = ["salom", "dastur", "dunyo", "anor"];
let sum11 = [];

num11.forEach(function (value) {
  sum11.push(value.slice(0, 3));
});

console.log(sum11);

//12-misol
//Har bir elementning oxirgi belgisini chiqaruvchi dastur yozing.

let num12 = ["salom", "dunyo", "dastur", "tillar"];

num12.forEach(function (value) {
  console.log(value.slice(-1));
});

//13-misol
//Massivdagi har bir elementni uzunligiga qarab tartiblang va natijani ekranga chiqaring (sort bilan).

let num13 = ["salom", "dunyo", "dastur", "tillar", "a", "uz"];

num13.sort(function (a, b) {
  a.length - b.length;
});

num13.forEach(function (value) {
  console.log(value);
});

//14-misol
//Har bir elementga oxiriga ! qo'shing va yangi massivga saqlang.

let num14 = ["salom", "dunyo", "dastur", "tillar"];
let sum14 = [];

num14.forEach(function (value) {
  sum14.push(value + "!");
});

console.log(sum14);

//15-misol
//Berilgan massivning barcha elementlarini kichik harflarga o'zgartirib ekranga chiqaring.

let num15 = ["SALOM", "DUNYO", "DASTUR"];

//16-misol
//Massivdagi har bir elementni 2 barobar kattalashtirib yangi massivga saqlang.

let num16 = [1, 2, 3, 4];

let sum16 = num16.map(function (value) {
  return value * 2;
});

console.log(sum16);

//17-misol
//Har bir elementning kvadratini hisoblab yangi massivga saqlang.

let num17 = [1, 2, 3, 4, 5, 6, 7];
let sum17 = [];

num17.map(function (value) {
  return sum17.push(value ** 2);
});

console.log(sum17);

//18-misol
//Massivdagi barcha elementlarni teskari tartibda yangi massivga saqlang (reverse bilan).

let num18 = [1, 2, 3, 4, 5];

let sum18 = num18.reverse();

console.log(sum18);

//19-misol
//Har bir elementdan oxirgi 3 ta belgisini olib yangi massivga saqlang (slice bilan).

let num19 = ["annas", "behi", "olma", 7];

let sum19 = num19.map(function (value) {
  return value.slice(-3);
});

console.log(sum19);

//20-misol
//Har bir elementni katta harf bilan yozib yangi massivga saqlang.

let num20 = ["salom", "dunyo", "javascript", "nodejs"];

let sum20 = num20.map(function (value) {
  return value.toUpperCase();
});

console.log(sum20);

//21-misol
//Har bir elementga "Hello, " qo'shib yangi massivga saqlang.

let num21 = ["salom", "dunyo", "javascript", "nodejs"];

let sum21 = num21.map(function (value) {
  return "Hello, " + value;
});

console.log(sum21);

//22-misol
//Har bir elementni ikki marta takrorlang va yangi massivga saqlang.

let num22 = ["a", "b", "c", "d"];

let sum22 = num22.map(function (value) {
  return value + value;
});

console.log(sum22);

//23-misol
//Har bir elementning uzunligini aniqlang va yangi massivga saqlang.

let num23 = ["salom", "dunyo", "javascript", "nodejs"];

let sum23 = num23.map(function (value) {
  return value.length;
});

console.log(sum23);

//24-misol
//Har bir elementning indeksini element bilan birlashtirib yangi massivga saqlang (indexOf bilan).

let num24 = ["salom", "dunyo", "javascript", "nodejs"];

let sum24 = num24.map(function (value, index) {
  return value + "-" + index;
});

console.log(sum24);

//25-misol
//Har bir elementning teskari yozilishini hisoblab yangi massivga saqlang (split, reverse, join bilan).

let num25 = ["salom", "dunyo", "javascript", "nodejs"];

let sum25 = num25.map((value) => {
  return value.split("").reverse().join("");
});

console.log(sum25);

//26-misol
//Massivdagi har bir elementdan boshidagi va oxiridagi belgisini olib tashlang (slice bilan).

let num26 = ["salom", "dunyo", "javascript", "nodejs"];

let modified = num26.map(function (value) {
  return value.slice(1, -1);
});

console.log(modified);

//27-misol
//Massivdagi barcha elementlarni tartiblab yangi massivga saqlang (sort bilan).

let num27 = ["salom", "dunyo", "javascript", "nodejs"];

let sum27 = num27.sort();

console.log(sum27);

//28-misol
//Har bir elementni katta harfga o‘zgartiring va yangi massivga saqlang.

let num28 = ["salom", "dunyo", "javascript", "nodejs"];

let sum28 = num28.map(function (value) {
  return value.toUpperCase();
});

console.log(sum28);

//29-misol
//Har bir elementning uzunligi 5 dan katta yoki kichik ekanligini belgilang va yangi massivga saqlang.

let num29 = [1, 2, 3, 4, 5, 6, 7];

let sum29 = num29.map(function (value) {
  if (value > 5) {
    console.log(sum29);
  }
});

//30-misol
//Har bir elementdan faqat sonlarni olib yangi massivga saqlang.

let num30 = [1, "salom", "dunyo", "javascript", 6, 7];

let sum30 = arr.map(function (value) {
  return Number(value);
});

console.log(sum30);

//31-misol
//Berilgan massivdan faqat juft sonlarni olib tashlang va yangi massivga saqlang.

let num31 = [1, 2, 3, 4, 5, 6, 7, 8];

let sum31 = num31.filter(function (value) {
  return value % 2 !== 0;
});

console.log(sum31);

//32-misol
//Massivdan faqat manfiy sonlarni olib yangi massivga saqlang.

let num32 = [1, -2, 3, -4, 5, -6, 7, -8];

let sum32 = num32.filter(function (value) {
  return value < 0;
});

console.log(sum32);

//33-misol
//Berilgan massivdan "a" harfi mavjud bo'lgan elementlarni olib yangi massivga saqlang (includes bilan).

let num33 = ["salom", "dunyo", "javascript", "nodejs"];

let sum33 = num33.filter(function (value) {
  return value.includes("a");
});

console.log(sum33);

//34-misol
//Faqat uzunligi 5 dan katta bo'lgan elementlarni olib yangi massivga saqlang.

let num34 = ["salom", "dunyo", "javascript", "nodejs"];

let sum34 = num34.filter(function (value) {
  return value.length > 5;
});

console.log(sum34);

//35-misol
//Berilgan massivdan faqat "test" so‘zini o‘z ichiga olgan elementlarni olib yangi massivga saqlang.

let num35 = ["apple", "test123", "banana", "testcase", "testing"];

let sum35 = num35.filter(function (value) {
  return value.includes("test");
});

console.log(sum35);

//36-misol
//Massivdan faqat teskari tartibda joylashtirilgan elementlarni olib yangi massivga saqlang (reverse bilan).

let num36 = ["apple", "elppa", "banana", "ananab", "grape", "eparg"];

let sum36 = num36.filter(function (value) {
  return value == value.split("").reverse().join("");
});

console.log(sum36);

//37-misol
//Massivdan faqat 0 dan katta bo'lgan sonlarni olib yangi massivga saqlang.

let num37 = [1, 2, 3, 4, -5, 6, -7, -8];

let sum37 = num37.filter(function (value) {
  if (value > 0) {
    console.log(value);
  }
});

//38-misol
//Faqat sonlar mavjud bo'lgan elementlarni olib yangi massivga saqlang.

let num38 = ["apple", 123, "banana", 456, "grape", 789];

let sum38 = num38.filter(function (value) {
  return Number(value);
});

console.log(sum38);

//39-misol
//Faqat uzunligi 3 dan kichik bo‘lgan elementlarni olib yangi massivga saqlang.

let num39 = ["apple", "to", "banana", "grape", "big"];

let sum39 = num39.filter(function (value) {
  return value.length < 3;
});

console.log(sum39);

//40-misol
//Berilgan massivdan faqat unli harflardan iborat elementlarni olib yangi massivga saqlang.

let num40 = ["a", "b", "3", "d", "e", "i"];

let result = ["a", "i", "e", "o", "u"];

let sum40 = num40.filter((value) => {
  return res.includes(value);
});

console.log(sum40);

//41-misol
//Faqat boshida "abc" bo‘lgan elementlarni olib yangi massivga saqlang (slice bilan).

let num41 = ["abc123", "abcdef", "xyzabc", "abcde", "mnop"];

let sum41 = num41.filter(function (value) {
  return value.slice(0, 3) == "abc";
});

console.log(sum41);

//42-misol
//Faqat oxirida "xyz" mavjud bo‘lgan elementlarni olib yangi massivga saqlang (slice bilan).

let num42 = ["abcxyz", "123xyz", "xyz123", "testxyz", "hello"];

let sum42 = num42.filter(function (value) {
  return value.slice(-3) == "xyz";
});

console.log(sum42);

//43-misol
//Berilgan massivdan faqat qiymati 10 dan kichik bo‘lgan sonlarni olib yangi massivga saqlang.

let num43 = [5, 12, 8, 20, 3, 15];

let sum43 = num43.filter(function (value) {
  return value < 10;
});

console.log(sum43);

//44-misol
//Faqat "test" so‘zini o‘z ichiga olmagan elementlarni olib yangi massivga saqlang (includes bilan).

let num44 = ["apple", "test123", "banana", "testcase", "grape", "testing"];

let sum44 = num44.filter(function (value) {
  return !value.includes("test");
});

console.log(sum44);

//45-misol
//Faqat uzunligi eng uzun bo‘lgan elementlarni olib yangi massivga saqlang.

let arr = ["olma", "anor", "anjir", "gilos"];

let maxLength = arr[0].length;

arr.forEach((value) => {
  if (value.length > maxLength) {
    maxLength == value.length;
  }
});

let res = arr.filter((value) => {
  return value.length == maxLength;
});

console.log(res);
