
var displayYear = new Date()
var month = displayYear.getMonth() + 1
var day = displayYear.getDate()
var year = displayYear.getFullYear()

let showYear = month + "/" + day + "/" + year;
document.getElementById("display-date").innerHTML = showYear;

// document.write(month + "/" + day + "/" + year)

function currentTime (){

const dayTime = new Date ();

let Hour = dayTime.getHours();

let Minutes = dayTime.getMinutes();
if (Minutes < 10){
    Minutes = "0" + Minutes
}

    let Seconds = dayTime.getSeconds();
if (Seconds < 10){
    Seconds = "0" + Seconds
}

let newTime = Hour + ":" + Minutes + ":" + Seconds;
document.getElementById("clock-display").innerHTML = newTime

let chosenTime = document.getElementById('chooseTime').value

if (chosenTime + ":00" === newTime){
    document.getElementById("ALARM").innerHTML = 'WAKE UP!!!';
}

document.getElementById("offButton").addEventListener('click', () => 
    document.getElementById("ALARM").innerHTML= ''

)

};
setInterval(currentTime, 1000);
