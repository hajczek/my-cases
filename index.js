 var timeForm = document.querySelector('form');

    var minutes = timeForm.minutes;
    var seconds = timeForm.seconds;

    // TIMER
    function countDown(event) {
      event.preventDefault();

      minutes.setAttribute('disabled', true);
      seconds.setAttribute('disabled', true);

      var m = Number(minutes.value);
      var s = Number(seconds.value);

      // console.warn(typeof m, typeof s); // Check the type of values m i s

      var then = new Date();
      // Set minutes and seconds for future 
      then.setMinutes(then.getMinutes() + m);
      then.setSeconds(then.getSeconds() + s);

      // Define variable with set interval for display function for each 1 second
      // This is an id number of this setInterval action, this will be needed for us to clearInterval
      var intervalId = setInterval(function tick() {
        var now = new Date();

        var timeLeft = Math.floor(then.getTime() - now.getTime()) + 1000;

        if (timeLeft > 0) {

          var minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          var secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

          minutes.value = minutesLeft;
          seconds.value = secondsLeft;

        } else {
          // Usuń atrybut disabled z pól input
          minutes.removeAttribute('disabled');
          seconds.removeAttribute('disabled');

          // Wyczyść setInterval
          clearInterval(intervalId);
        }
      }, 1000);
    }

    timeForm.addEventListener('submit', countDown);