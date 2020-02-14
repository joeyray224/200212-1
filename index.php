<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script type="text/javascript" src="calendar.js" defer></script>
    <script type="text/javascript" src="openWindow.js" defer></script>
    <link rel="stylesheet" href="style.css">
    <title></title>
  </head>
  <body>
    <div class="header">
        <div class="logo">
          Кинотеатр "На коленке"
        </div>
        <div class="description">
          <p>Начало сеансов: 10:00</p>
          <p>Завершение сеансов: 20:00</p>
        </div>
        <div class="menu">
          <a href="#">Кнопка меню</a>
          <a href="#">Кнопка меню</a>
          <a href="#">Кнопка меню</a>
          <a href="#">Кнопка меню</a>
        </div>
    </div>
    <div class="content">
      <div id="calendar">
      </div>
        <div id="wrapper" hidden="true">
          <div id="window">
            <button type="button" name="closeWindow" id="closeWindow">X</button>
            <div id="window_content">
              <p>Выберите время сеанса</p>
            </div>
            <div id="tickets">
              <div id="display">Экран</div>
              <table id="places">
                <tr data-row="1">
                  <td data-place="1">1 - 1</td>
                  <td data-place="2">1 - 2</td>
                  <td data-place="3">1 - 3</td>
                  <td data-place="4">1 - 4</td>
                  <td data-place="5">1 - 5</td>
                  <td data-place="6">1 - 6</td>
                </tr>
                <tr data-row="2">
                  <td data-place="1">2 - 1</td>
                  <td data-place="2">2 - 2</td>
                  <td data-place="3">2 - 3</td>
                  <td data-place="4">2 - 4</td>
                  <td data-place="5">2 - 5</td>
                  <td data-place="6">2 - 6</td>
                </tr>
                <tr data-row="3">
                  <td data-place="1">3 - 1</td>
                  <td data-place="2">3 - 2</td>
                  <td data-place="3">3 - 3</td>
                  <td data-place="4">3 - 4</td>
                  <td data-place="5">3 - 5</td>
                  <td data-place="6">3 - 6</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
    </div>
    <div class="footer">
      footer
    </div>
  </body>
</html>
