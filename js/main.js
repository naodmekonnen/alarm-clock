const alarmON = false;

function currentTime (){

const d = new Date ();

let Hour = d.getHours();

let Minutes = d.getMinutes();
if (Minutes < 10){
    Minutes = "0" + Minutes
}

    let Seconds = d.getSeconds();
if (Seconds < 10){
    Seconds = "0" + Seconds
}

let newTime = Hour + ":" + Minutes + ":" + Seconds;
document.getElementById("clock-display").innerHTML = newTime;

if(alarmON === false)
    if (newTime > '17:13:00' && newTime < '17:13:10') {
    alarmON = true;
    document.getElementById("ALARM").innerHTML = "WAKE UP!!!!";
    }

    else {
    document.getElementById("ALARM").innerHTML = " ";
}

    btn.addEventListener
};

setInterval(currentTime, 1000);