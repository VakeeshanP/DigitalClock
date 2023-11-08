


function displayTime() {

    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    document.getElementById('Hours').innerHTML = hr
    document.getElementById('Minutes').innerHTML = min
    document.getElementById('Seconds').innerHTML = sec

}

setInterval(displayTime,500)
