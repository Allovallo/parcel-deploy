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

// console.log(`Time diffSubstract: ${bench(diffSubstract)} mc`);
// console.log(`Time diffGetTime: ${bench(diffGetTime)} mc`);

// let date = new Date('2017-01-26');
// console.log(date);

// let ms = Date.parse('2023-05-27T21:09:00');
// console.log(ms);

// console.log(`Loading started ${performance.now()} ms ago`);

// let date = new Date(2012, 1, 20, 3, 12);
// console.log(date);

// function getWeekDay(date) {
//     const day = date.getDay();
//     if (day == 1) {
//         return 'ПН'
//     }
//     else if (day == 2) {
//         return 'ВТ'
//     }
//     else if (day == 3) {
//         return 'СР'
//     }
//     else if (day == 4) {
//         return 'ЧТ'
//     }
//     else if (day == 5) {
//         return 'ПТ'
//     }
//     else if (day == 6) {
//         return 'СБ'
//     }
//     else {
//         return 'ВС'
//     };
// }

// function getWeekDay(date) {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//     return days[date.getDay()];
// }

// let date = new Date(2023, 5, 27);
// console.log(getWeekDay(date));

function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day;
}

let date = new Date(2012, 0, 9);
console.log(getLocalDay(date));