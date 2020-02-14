let flag = false;

document.querySelector("#calendar").addEventListener('click', (event) => {
  let wrapper = document.querySelector('#wrapper');
  let windowContent = document.querySelector('#window_content');

  let date = new Date();
  let td = event.target;

  let count = td.getAttribute('data-count');
  let currentDay = document.querySelector('#currentDate').getAttribute('data-count');

  console.log (count - currentDay);
   if (count - currentDay <= 7 && count - currentDay >= 0 || count - currentDay >= -7 && count - currentDay <= 0) {
     wrapper.hidden = false;

     if (!flag) {
       flag = createList(windowContent);
     }

     checkTime (td, count, currentDay);

     document.querySelector('#closeWindow').addEventListener('click', () => {
           wrapper.hidden = true;
     });
   }
});

function createList (parrent) {
  let ul = document.createElement('ul');
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
  let flag = false

  for (elem of li) {
    let hour = elem.getAttribute('data-hour');

    if (currentDay <= count + 7) {
      if (date.getHours() <= hour) {
        flag = true;
      }
    } else {
        elem.removeAttribute('class');
    }

    if (flag) {
      elem.setAttribute('class', 'active');
    }
  }
}
