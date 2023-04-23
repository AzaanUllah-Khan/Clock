var h = document.getElementById("hours")
        var m = document.getElementById("minutes")
        var s = document.getElementById("seconds")
        setInterval(() => {
            n = new Date();
            hours = n.getHours();
            minutes = n.getMinutes();
            seconds = n.getSeconds();

            hoursHandRotation = 30 * hours + minutes / 2
            var minuteHandRotation = 6 * minutes
            secondHandRotation = 6 * seconds

            h.style.transform = `rotate(${hoursHandRotation}deg)`;
            m.style.transform = `rotate(${minuteHandRotation}deg)`;
            s.style.transform = `rotate(${secondHandRotation}deg)`;
        }, 1000)
        var behind = document.getElementById("clockcase")
        function first() {
            behind.style.background = `url(https://i.pinimg.com/originals/63/f2/28/63f2287eedbfadbeddd41ca3105947a2.gif)`
        }
        function second() {
            behind.style.background = `url(https://w7.pngwing.com/pngs/37/129/png-transparent-analog-clock-clock-seiko-watch-case-astron-jam-angle-white-furniture-thumbnail.png)`
        }
        function third() {
            behind.style.background = `url(https://e7.pngegg.com/pngimages/547/237/png-clipart-black-analog-watch-illustration-clock-face-moving-faces-roman-numerals-watch-hand-alarm-clock-angle-white.png)`
        }
        function fourth() {
            behind.style.background = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaQGnkBFRUBVF3yth3B7PCX0UCeinUKpaNhA&usqp=CAU)`
        }
        function fifth() {
            behind.style.background = `url(https://i.pinimg.com/originals/63/f2/28/63f2287eedbfadbeddd41ca3105947a2.gif)`
        }
        setInterval(showTime, 1000);
        function showTime() {
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            am_pm = "AM";

            if (hour > 12) {
                hour -= 12;
                am_pm = "PM";
            }
            if (hour == 0) {
                hr = 12;
                am_pm = "AM";
            }

            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;

            let currentTime = hour + ":"
                + min + ":" + sec + am_pm;

            document.getElementById("clock")
                .innerHTML = currentTime;
        }
        showTime();
        function show() {
            document.getElementById("clock").style.fontSize = `30px`
            document.getElementById("clock").style.fontFamily = `Arial`
            document.getElementById("clock").style.fontWeight = `Bolder`
            document.getElementById("clock").style.color = `Green`
        }