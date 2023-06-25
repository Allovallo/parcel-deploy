// let date = new Date(2023, 5, 25);
// date.setDate(date.getDate() + 2);

// console.log(date);

// let date = new Date();
// date.setSeconds(date.getSeconds() + 70);

// console.log(date);

// let date = new Date(2023, 5, 25);
// date.setDate(-1);

// console.log(date);

// let date = new Date();
// console.log(+date);

// let start = new Date();
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = new Date();
// console.log(`Цикл відпрацював за ${end - start} мс`);

// let start = Date.now();
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = Date.now()

// console.log(`Цикл відпрацював за ${end - start} мс`);

// function diffSubstract(date1, date2) {
//   return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//   let date1 = new Date(0);
//   let date2 = new Date();

//   let start = Date.now();
//   for (let i = 0; i < 100000; i++) f(date1, date2);
//   return Date.now() - start;
// }

// console.log(`Time diffSubstract: ${bench(diffSubstract)} mc`);
// console.log(`Time diffGetTime: ${bench(diffGetTime)} mc`);

let date = new Date('2017-01-26');
console.log(date);

