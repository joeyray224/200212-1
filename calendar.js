//в этом скрипте создаем динамичный календарь


let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

let table = createTable(9, week);
document.querySelector('.calendar').appendChild(table);

function createTable (rows, arr) {
     let table = document.createElement('table');

     let date = new Date();

     let counter = 0;

     for (let i = 0; i < rows; i++) {
         let tr = document.createElement('tr');
         for (let j = 0; j < arr.length; j++) {
             let td = document.createElement('td');

             if (i == 0) {
                 td.setAttribute('class', 'week');
                 td.innerHTML = arr[j];
             } else {
                 let monthDay = checkDate(counter++, date);
                 td.innerHTML = monthDay.getDate();

                 if (monthDay.getMonth() == date.getMonth()) {
                   td.setAttribute('class', 'month');
                 }
                 if (monthDay.getDate() == date.getDate() && monthDay.getMonth() == date.getMonth()) {
                   td.setAttribute('id', 'currentDate');
                 }
             }

             tr.appendChild(td);
         }
         table.appendChild(tr);
     }
     return table;
}


 function checkDate (counter, date) {

   let lastDay = getLastMonthDay(date);
   let lastMonday = getLastMonday(lastDay);

   let newDate = new Date (lastMonday.getFullYear(), lastMonday.getMonth(), lastMonday.getDate() + counter);

   return newDate;
 }

//находим два последних понедельника прошлого месяца
function getLastMonday (lastMonth) {
  let counter = 7;

  for (let i = 1; i <= 7; i++) {
    let lastMon = new Date(lastMonth.getFullYear(), lastMonth.getMonth(), lastMonth.getDate() - (i + counter));

    if (lastMon.getDay() == 1) {
      console.log(lastMon.getDate());
      return lastMon;
    }
  }
}

//здесь находим последнее число прошлого месяца
 function getLastMonthDay (date) {
   let lastMonth =  date.getMonth() - 1;
   let year = date.getFullYear();

   if (date.getMonth() == 0) {
     lastMonth = 12;
     year -= 1;
   }

    for (let i = 31; i > 0; i--) {
      let lastDay = new Date(year, lastMonth, i);
      if (lastDay.getDate() > 28) {
        return lastDay;
      }
    }
 }
