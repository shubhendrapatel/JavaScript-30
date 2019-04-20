(function () {
    let secondHand = document.getElementById("second-hand"),
        minuteHand = document.getElementById("minute-hand"),
        hourHand = document.getElementById("hour-hand");

    setInterval(function () {
        let dateObject = new Date(),
            second = dateObject.getSeconds() * 6,
            minute = dateObject.getMinutes() * 6,
            hour = dateObject.getHours() * 6;

        secondHand.style.transform = `rotate(${second}deg)`;
        minuteHand.style.transform = `rotate(${minute}deg)`;
        hourHand.style.transform = `rotate(${hour}deg)`;
    }, 1000);
})(document);