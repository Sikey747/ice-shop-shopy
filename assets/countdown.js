//таймер обрптного отчета в JS укаазть в конце этого кода как называть минут годы и тд
//а в HTML указать общему контейнеру
//<div class="любой класс countdown" data-date="09-08-2023" data-time="24:00">
//где в дате указать дату окончания а в тайм часы и минуты окончания
// дальше укаазать обертке с каждый числом что это за тип день месяц и тд
// для класса с числом доабвить num и оставить пустым
// для класса м опредеелнием названия минуты сасы и тд указать word
// без указания этих параметрво код не запуститься
// если ненадо както блок просто отлючи го в стилях
// <div class="circle-item__circle day">
// <h2 class="circle-item__number num"></h2>
// <p class="circle-item__text word"></p>
// </div>
/* <div class="circle-item__circle hour">
<h2 class="circle-item__number num"></h2>
<p class="circle-item__text word"></p>
</div> */

//   # Countdown
// Pure Javascript Countdown - supports IE9+
// CodePen Demo: http://codepen.io/fionnachan/pen/EZgRzy/
// ### HTML must-haves:
// ```
// .whatever-name with data-date="dd-mm-yyyy"
//   .day
//   .hour
//   .min
//   .sec
// ```
// Default end time is 23:59 of the date.
// ```
// .whatever-name with data-date="dd-mm-yyyy" and data-time="hh:mm"
//   .day
//   .hour
//   .min
//   .sec
// ```
// End time is set to hour:minute (24-hour format) of the date.

// ### JS initializer:

// ```
// var efcc_countdown = new countdown({
//   target: '.countdown',
//   dayWord: ' days',
//   hourWord: ' hours',
//   minWord: ' mins',
//   secWord: ' secs'
// });
// ```

const countdownElement = (elem) => document.querySelector(elem);

const countdown = function (_config) {
  const countdownElements = document.querySelectorAll(_config.target);

  countdownElements.forEach((element) => {
    const tarDate = element.getAttribute("data-date").split("-");
    const day = parseInt(tarDate[0]);
    const month = parseInt(tarDate[1]);
    const year = parseInt(tarDate[2]);
    let tarTime = element.getAttribute("data-time");
    let tarhour, tarmin;

    if (tarTime != null) {
      tarTime = tarTime.split(":");
      tarhour = parseInt(tarTime[0]);
      tarmin = parseInt(tarTime[1]);
    }

    let months = [
      31,
      new Date().getFullYear() % 4 == 0 ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];
    let dateNow = new Date();
    let dayNow = dateNow.getDate();
    let monthNow = dateNow.getMonth() + 1;
    let yearNow = dateNow.getFullYear();
    let hourNow = dateNow.getHours();
    let minNow = dateNow.getMinutes();
    let count_day = 0,
      count_hour = 0,
      count_min = 0;
    let count_day_isSet = false;
    let isOver = false;

    // Set the date we're counting down to
    const countDownDate = new Date(
      year,
      month - 1,
      day,
      tarhour,
      tarmin,
      0,
      0,
    ).getTime();

    countdownElement(_config.target + " .day .word").innerHTML =
      _config.dayWord;
    countdownElement(_config.target + " .hour .word").innerHTML =
      _config.hourWord;
    countdownElement(_config.target + " .min .word").innerHTML =
      _config.minWord;
    countdownElement(_config.target + " .sec .word").innerHTML =
      _config.secWord;

    const updateTime = () => {
      // Get todays date and time
      const now = new Date().getTime();

      // Find the distance between now an the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      requestAnimationFrame(updateTime);

      countdownElement(_config.target + " .day .num").innerHTML = addZero(days);
      countdownElement(_config.target + " .hour .num").innerHTML =
        addZero(hours);
      countdownElement(_config.target + " .min .num").innerHTML =
        addZero(minutes);
      countdownElement(_config.target + " .sec .num").innerHTML =
        addZero(seconds);

      // If the count down is over, write some text
      if (distance < 0) {
        countdownElement(_config.target + " .day .num").innerHTML = addZero(0);
        countdownElement(_config.target + " .hour .num").innerHTML = addZero(0);
        countdownElement(_config.target + " .min .num").innerHTML = addZero(0);
        countdownElement(_config.target + " .sec .num").innerHTML = addZero(0);
      }
    };

    updateTime();
  });
};

const addZero = (x) => (x < 10 && x >= 0 ? "0" + x : x);
