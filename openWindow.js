localStorage.setItem('id-666', JSON.stringify(
  {
    id: 1,
    tdId: "26",
    month: "1",
    date: "14",
    time: 14,
    row: 2,
    place: 4
  }
));

localStorage.setItem('id-667', JSON.stringify(
  {
    id: 1,
    tdId: "20",
    month: "1",
    date: "8",
    time: 14,
    row: 2,
    place: 4
  }
));

let tickets = getData();

function getData(currentDate) {
  let arr = [];

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let arrElem = JSON.parse (localStorage.getItem(key));

    if (currentDate && currentDate - arrElem.tdId >= 7) {
      localStorage.removeItem(key);
      i--;
    }
      arr[i] = arrElem;
  }
  return arr;
}

document.addEventListener('DOMContentLoaded', () => {
  let currentDate = document.querySelector('#currentDate');
  let orderArr = document.querySelectorAll('.order');
  tickets = getData(currentDate.getAttribute('data-count') * 1);

  for (let i = 0; i < orderArr.length; i++) {
    let flag = true;

    for (let j = 0; j < localStorage.length; j++) {
      let key = localStorage.key(j);
      let arrElem = JSON.parse (localStorage.getItem(key));
      if (orderArr[i].getAttribute('data-count') == arrElem.tdId) {
        flag = false;
      }
    }

    if (flag) {
      if (orderArr[i].getAttribute == 'order' || orderArr[i].getAttribute == null) {
        orderArr[i].removeAttribute('class');
      } else {
          orderArr[i].setAttribute('class', 'month');
      }
    }
  }

  console.log(localStorage);
})
