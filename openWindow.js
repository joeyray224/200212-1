let flag = false;

let order = {
  id: localStorage.length,
  tdId: "",
  month: "",
  date: "",
  time: false,
  row: false,
  place: false
};

document.querySelector("#calendar").addEventListener('click', (event) => {
  let wrapper = document.querySelector('#wrapper');
  let windowContent = document.querySelector('#window_content');

  let date = new Date();
  let td = event.target;

  let count = td.getAttribute('data-count');
  let currentDay = document.querySelector('#currentDate').getAttribute('data-count');

   if (count - currentDay <= 7 && count - currentDay >= 0 || count - currentDay >= -7 && count - currentDay <= 0) {
     wrapper.hidden = false;
     order.tdId = td.getAttribute('data-count');
     order.month = td.getAttribute('data-month');
     order.date = td.getAttribute('data-date');

     if (!flag) {
       flag = createList(windowContent);
     }
     checkTime (td, count, currentDay);
   }
});

function createList (parrent) {
  let ul = document.querySelector('#orderTime');

  for (let i = 10; i <= 20; i += 2) {

      let li = document.createElement('li');

      li.innerHTML = i + ':00';
      li.setAttribute('data-hour', i);

      ul.appendChild(li);
  }
  parrent.appendChild(ul);
  return true;
}

function checkTime (td, count, currentDay) {
  let li = document.querySelectorAll('li');
  let date = new Date();

  for (elem of li) {
    let hour = elem.getAttribute('data-hour') * 1;

    if (date.getHours() < hour && currentDay == count|| count <= count + 7 && count > currentDay) {
        elem.setAttribute('class', 'active');
    } else {
        elem.removeAttribute('class');
    }
    checkOrdertime(elem);
  }
}

function checkOrdertime (li) {
  let className = li.getAttribute('class');

  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].time == li.getAttribute('data-hour') && tickets[i].date == order.date && tickets[i].month == order.month) {
      if (className == null) {
        className = 'orderTime';
      } else {
        className += ' orderTime';
      }
      li.setAttribute('class', className);
    }
  }
}
