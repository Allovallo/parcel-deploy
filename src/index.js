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

// function getLocalDay(date) {
//     let day = date.getDay();
//     if (day == 0) day = 7;
//     return day;
// }

// let date = new Date(2012, 0, 9);
// console.log(getLocalDay(date));


// function getDateAgo(date, days) {
//   let dateCopy = new Date(date);

//   dateCopy.setDate(date.getDate() - days);
//   return dateCopy.getDate();
// }

// let date = new Date(2015, 0, 2);
// console.log(getDateAgo(date, 365));


// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);
//     return date.getDate();
// }

// console.log(getLastDayOfMonth(2012, 1));

// let today = new Date();
// today.setHours(0, 0, 0, 0);

// console.log(today);

// let end = Date.now();

// console.log(`За сьогодні пройшло ${(end - today) / 1000} cек`);


// function getSecondsToday() {
//     let today = new Date();
//     today.setHours(0, 0, 0, 0);
//     let end = Date.now();
//     return (end - today) / 1000;
// }

// console.log(getSecondsToday());

// function getSecondsToday1() {
//     return Math.round((Date.now() - new Date().setHours(0, 0, 0, 0)) / 1000);
// }
// console.log(getSecondsToday1());


// function getSecondsToday2() {
//   let now = new Date();
//   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//   let diff = now - today;
//   return Math.round(diff / 1000);
// }
// console.log( getSecondsToday2() );

// function getSecondsToTomorrow1() {
//     let tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     tomorrow.setHours(0, 0, 0, 0);
//     return Math.round((tomorrow - Date.now()) / 1000);
// }

// console.log(getSecondsToTomorrow1());

// function getSecondsToTomorrow2() {
//   let now = new Date();
//   let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
//   let diff = tomorrow - now;
//   return Math.round(diff / 1000);
// }

// console.log(getSecondsToTomorrow2());

function formatDate(date) {
    let diff = new Date() - date;
    if (diff < 1000) {
        return ('right now');
    }

    let sec = Math.floor(diff / 1000);
    if (sec < 60) {
        return sec +' sec ago';
    }

    let min = Math.floor(diff / 60000);    
    if (min < 60) {
        return min + ' min ago';
    }
    
    let d = date;
    d = ['0' + d.getDate(), '0' + (d.getMonth() + 1), '' + d.getFullYear(), '0' + d.getHours(), '0' + d.getMinutes()
        ].map(component => component.slice(-2));

    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

console.log(formatDate(new Date(new Date - 1)));
console.log(formatDate(new Date(new Date - 30 * 1000)));
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date - 86400 * 1000)));