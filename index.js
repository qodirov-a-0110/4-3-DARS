// 1-misol
// Foydalanuvchi yoshi kiritiladi. Agar foydalanuvchi 18 yoshga to'lgan bo'lsa, "Siz katta yoshdagisiz", aks holda "Siz katta yoshdagisiz" deb chiqaring.
// let a = +prompt("yosh kiritin")
// if (a >= 18) {
//     console.log("Siz katta yoshdagisiz");
// }else{
//     console.log("Siz katta yoshdagisiz");
// }

// 2-misol
// Foydalanuvchi tomonidan kiritilgan son juft yoki toqligini aniqlang va natijani konsolda chiqaring.
// let a = +prompt('son kiritin');
// if (a %2 == 0) {
//     console.log('juft');
// }else{
//     console.log('toq');
// }


// 3-misol
// Foydalanuvchi tomonidan kiritilgan son musbat yoki manfiy ekanligini aniqlang va natijani konsolda chiqaring.
// let a = +prompt('son kiritin');
// if (a >0) {
//     console.log('musbat');
// }else{
//     console.log('manfiy');
// }


// 4-misol
// Foydalanuvchi harorat kiritadi. Agar harorat 20 darajadan yuqori bo'lsa, "Yengil kiying", aks holda "Qalin kiying" deb tavsiya bering.
// let a = +prompt('xarorat kiritin');
// if (a > 20) {
//     console.log('Yengil kiyining');
// }else{
//     console.log('qalin kiyining');
// }

// let a = +prompt('son kiritin');
// let b = +prompt('son kiritin');
// let max;
// let min;
// if (a>b) {
//     max = a;
//     min = b;
// }else{
//     max = b;
//     min = a;
// }
// console.log(max);
// console.log(min);

// Foydalanuvchi tomonidan kiritilgan imtihon balliga qarab baho bering.
//  90 va undan yuqori ball - "A'lo", 70-89 ball - "Yaxshi", 50-69 ball - "Qoniqarli", 50 dan past - "Yomon".
// let a = 30;
// let res ;
// for(let i = 1; i<=a;i++){
//   if (i>=90) {
//     res = 'alo'
//   }else if(i<=89 && i>=70){
//     res = 'yaxshi'
//   }else if(i<=69 && i >= 50){
//     res = 'qoniqarli'
//   }else{
//     res = 'yomon'
//   }
// }
// console.log(res);

//  Mehmonning ismi kiritiladi. Agar ism "Ali" bo'lsa, "Salom, Ali!", aks holda "Salom, mehmon!" deb chiqaring.
// let a = +prompt('Mehmonning ismi kiritiladi');
// let res;
// if (a = 'ali') {
//   res = 'salom ali'
// }else{
//   res = 'salom mexmon'
// }
// console.log(res);



// let counter = 0;

// for(let i = 4; i<=50; i++){
//   counter = 0;
//   for(let j = 1; j <=i;j++){
//     if (i % 2 == 0) {
//       counter++
//     }

//   }
// }

// let  a = ['olma','anor',101,45,'salom'];
// // a.push(123);
// // a.pop()
// // a.unshift(1245)
// a.shift()

// console.log(a);

// let n = [20,7,9,89,2,74];
// let sum = 0;
// for(let i = 0; i<n.length;i++){
//   sum+=n[i];
// }
// console.log(sum);

// 1 dan 10 gacha bo'lgan sonlarni konsolga chiqaring:**
//    `for` siklidan foydalanib, 1 dan 10 gacha bo'lgan sonlarni konsolga chiqaring.
// let n = 10;
// for(let i = 1; i<=n;i++){
//   console.log(i);
// }


// 2. **10 dan 1 gacha bo'lgan sonlarni konsolga chiqaring:**
// `for` siklidan foydalanib, 10 dan 1 gacha bo'lgan sonlarni konsolga chiqaring.
// let n = 10;
// for(let i = n; i>=1;i--){
//   console.log(i);
// }


 
// 3. **1 dan 100 gacha bo'lgan juft sonlarni konsolga chiqaring:**
// `for` siklidan foydalanib, 1 dan 100 gacha bo'lgan juft sonlarni konsolga chiqaring.
// let n = 100;
// for(let i = 1; i<=n;i++){
//   if (i%2 == 0) {
//     console.log(i);
//   }
// }


// 4. **1 dan 100 gacha bo'lgan toq sonlarni konsolga chiqaring:**
//    `for` siklidan foydalanib, 1 dan 100 gacha bo'lgan toq sonlarni konsolga chiqaring.
// let n = 100;
// for(let i = 1; i<=n;i++){
//   if (i%2 == 1) {
//     console.log(i);
//   }
// }


// 5. **1 dan 10 gacha bo'lgan sonlarning yig'indisini hisoblang:**
//    `for` siklidan foydalanib, 1 dan 10 gacha bo'lgan sonlarning yig'indisini hisoblab, natijani konsolga chiqaring.
// let sum = 0;
//  for(let i = 1; i <=10; i++){
//     sum = sum + i
// }
// console.log(sum);

// 6. **1 dan 10 gacha bo'lgan sonlarning ko'paytmasini hisoblang:**
//    `for` siklidan foydalanib, 1 dan 10 gacha bo'lgan sonlarning ko'paytmasini hisoblab, natijani konsolga chiqaring.
// let sum = 1;
//  for(let i = 1; i <=10; i++){
//     sum = sum * i
// }
// console.log(sum);


// 8. **1 dan 50 gacha bo'lgan sonlarning kvadratlarini konsolga chiqaring:**
//    `for` siklidan foydalanib, 1 dan 50 gacha bo'lgan sonlarning kvadratlarini konsolga chiqaring.
//  for(let i = 1; i <= 50; i++){
//     console.log(i * i);
// }


// 9. **1 dan 20 gacha bo'lgan sonlarning kublarini konsolga chiqaring:**
//    `for` siklidan foydalanib, 1 dan 20 gacha bo'lgan sonlarning kublarini konsolga chiqaring.
//  for(let i = 1; i <= 20; i++){
//     cube = i * i * i;
//     console.log(cube);
// }

// 10. **1 dan 1000 gacha bo'lgan barcha sonlarning yig'indisini hisoblang:**
//     `for` siklidan foydalanib, 1 dan 1000 gacha bo'lgan barcha sonlarning yig'indisini hisoblab, natijani konsolga chiqaring.
// let sum =0 ;
//  for(let i = 1; i <= 1000; i++){
//     sum = sum + i
// }
// console.log(sum);


// 11. **"Salom" so'zini 5 marta konsolga chiqaring:**
//     `for` siklidan foydalanib, "Salom" so'zini 5 marta konsolga chiqaring.
// for(let i = 0; i < 5; i++){
// console.log('salom');
// }


// 12. **1 dan 100 gacha bo'lgan sonlarni ikki barobar ko'paytirib konsolga chiqaring:**
//     `for` siklidan foydalanib, 1 dan 100 gacha bo'lgan sonlarni ikki barobar ko'paytirib konsolga chiqaring.
// for (let i = 1; i <= 100;  i++){
// let result = i * 2;
// console.log(result);
// }


// 14. **Foydalanuvchi tomonidan kiritilgan sonning kvadratini hisoblang va konsolga chiqaring:**
//     Foydalanuvchi biror bir son kiritadi. `for` siklidan foydalanib, ushbu sonning kvadratini hisoblang va natijani konsolga chiqaring.
//  for(let i = 1; i <= 10; i++){
//     console.log(i * i);
// }


// 15. **Alfavitni konsolga chiqaring:**
//     `for` siklidan foydalanib, a dan z gacha bo'lgan barcha harflarni konsolga chiqaring.
// for(let i = 97 ; i <= 122; i++){
//     console.log(String.fromCharCode(i));

// }

// BOOLIN
// 1 misol
// let sum = prompt(' 1 sonni krting')
// let sum1 = prompt('2 sonni krting')

// if ((sum % 2 === 0 && sum1 % 2 === 0) || (sum % 2 == 1 && sum1 % 2 == 1)) {
//   console.log("juft"); 
// } else {
//   console.log("toq"); 
// }

// 2 misol
// let a = 8
// let b = 10
// let c = 15

//  let res = (a > 0 && b >0 && c >0);
//  console.log(res);
 
// 3 misol

// let a = prompt('1 son krting');
// let b = prompt('2 son krting');
// let c = prompt('3 son krting');

//  let res = (a < 0 || b < 0 || c > 0 && a > 0 || b < 0 || c < 0 && a < 0 || b > 0 || c < 0);
//  console.log(res);

// 4 misol
// let a = -8
// let b = -10
// let c = 15

//  let res = (a < 0 && b <0 && c >0);
//  console.log(res);

// 5 misol
// let a = -8
// let b = 10
// let c = 15

//  let res = (a < 0 && b >0 && c >0);
//  console.log(res);

// 6 misol
// let a = 20;
// let res = (a > 0);
// console.log(res);