
let ampm = document.getElementById('ampm')

function displayTime() {

    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    if (hr>12) {
        hr = hr-12
        ampm.innerHTML = 'PM'
    }

    document.getElementById('Hours').innerHTML = hr
    document.getElementById('Minutes').innerHTML = min
    document.getElementById('Seconds').innerHTML = sec

}

setInterval(displayTime,500)
