let orderInfo = document.querySelector('#orderInfo');
let time = document.querySelector('#time');
let sessionRow = document.querySelector('#row');
let sessionPlace = document.querySelector('#place');
let previousPlace = false;
let previousTime = false;


document.querySelector('#orderTime').addEventListener('click', (event) => {
  let sessionTime = event.target;

  cleanOrderPlace();
  checkOrderPlace(sessionTime);

  if (sessionTime.getAttribute('class') == 'active') {
    time.innerHTML = "Время начала саенса: " + sessionTime.innerHTML;
    order.time = sessionTime.getAttribute('data-hour');
  }
})

document.querySelector('#places').addEventListener('click', (event) => {
  let place = event.target;
  let date = new Date ();

  if (order.date >= date.getDate()) {
    place.setAttribute('class', 'selectedPlace');
    if(previousPlace) {
      previousPlace.removeAttribute('class');
      previousPlace = place;
    } else {
      previousPlace = place;
    }

    sessionRow.innerHTML = "Ряд: " + place.getAttribute('data-row');
    order.row = place.getAttribute('data-row');

    sessionPlace.innerHTML = "Место: " + place.getAttribute('data-place');
    order.place = place.getAttribute('data-place');
  }
})

document.querySelector('#order').addEventListener('click', () => {
  let key = 'id-' + order.id;

  if(!order.row && !order.place || !order.time) {
    alert('Выберите место и время сеанса!');
  } else {
    localStorage.setItem(key, JSON.stringify(order));

    setClassToTd(order.tdId);
    order.id++;
    order.row = false;
    order.place = false;
    order.time = false;

    tickets = getData(); //беру массив с данными из глобальной ОВ
  }
})

document.querySelector('#closeWindow').addEventListener('click', () => {
      wrapper.hidden = true;
      time.innerHTML = '';
      sessionRow.innerHTML = '';
      sessionPlace.innerHTML = '';
      cleanOrderPlace();
      if (previousPlace) {
        previousPlace.removeAttribute('class');
      }
})

function setClassToTd(tdId) {
  let tdArr = document.querySelectorAll('td');

  for (let i = 0; i < tdArr.length; i++) {
    let id = tdArr[i].getAttribute('data-count');

    if(tdId == id) {
      let className = tdArr[i].getAttribute('class') + ' ' + 'order';
      tdArr[i].setAttribute('class', className);
    }
  }
}

function checkOrderPlace (elem) {
  let time = elem.getAttribute('data-hour');
  let placesArr = document.querySelectorAll('#places td');

  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].tdId == order.tdId && time == tickets[i].time) {
      for (let j = 0; j < placesArr.length; j++) {
        let orderPlace = placesArr[j].getAttribute('data-place');
        let orderRow = placesArr[j].getAttribute('data-row');

        if (tickets[i].row == orderRow && tickets[i].place == orderPlace) {
          placesArr[j].setAttribute('class', 'orderPlace');
        }
      }
    }
  }
}

function cleanOrderPlace () {
  let arr = document.querySelectorAll('.orderPlace');

  for (let i = 0; i < arr.length; i ++) {
    arr[i].removeAttribute('class');
  }
}
