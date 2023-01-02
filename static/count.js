const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

      var but = document.getElementById('but');
     but.addEventListener("click",countFunc);
    function countFunc() {
        document.getElementById('container').style.display = 'none';
        document.getElementById('container2').style.display = 'block';
        document.getElementById('card').style.display = 'block';
    }
    let countDown = new Date('Jan 03, 2023 00:00:00').getTime(),
        x = setInterval(function() {
    
          let now = new Date().getTime(),
            distance = countDown - now;
    
            document.getElementById('days').innerText = Math.floor(Math.abs(distance / day)),
            document.getElementById('hours').innerText = Math.floor(Math.abs(distance % day / hour)),
            document.getElementById('minutes').innerText = Math.floor(Math.abs(distance % hour / minute)),
            document.getElementById('seconds').innerText = Math.floor(Math.abs(distance % minute / second));
            

          
            
            if (distance <= 0) {
              //// do something later when date is reached
              // document.getElementById('container').style.display = 'none';
              // document.getElementById('container2').style.display = 'block';
              // document.getElementById('card').style.display = 'block';
              document.getElementById('head').innerText = "距离二喵的生日\n已经";
            } else {
              document.getElementById('head').innerText = "距离二喵的生日\n还有";
            }

            for (let i = 0; i < document.getElementsByClassName('unit-text').length; i++) {
              document.getElementsByClassName('unit-text')[i].style.visibility = 'visible';
            }
            
            document.getElementById('but').style.visibility='visible';
            
    
        }, second)


