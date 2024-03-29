var displayYear = new Date()
var month = displayYear.getMonth() + 1
var day = displayYear.getDate()
var year = displayYear.getFullYear()

let showYear = month + "/" + day + "/" + year;
document.getElementById("display-date").innerHTML = showYear;

// document.write(month + "/" + day + "/" + year)

let alarmSound = new Audio('/audio/audio1.mp3');

function currentTime() {
  const dayTime = new Date();

  let Hour = dayTime.getHours();
  if (Hour < 10) {
    Hour = "0" + Minutes
  }

  let Minutes = dayTime.getMinutes();
  if (Minutes < 10) {
    Minutes = "0" + Minutes
  }

  let Seconds = dayTime.getSeconds();
  if (Seconds < 10) {
    Seconds = "0" + Seconds
  }

  let newTime = Hour + ":" + Minutes + ":" + Seconds;
  document.getElementById("clock-display").innerHTML = newTime

  let chosenTime = document.getElementById('chooseTime').value

  if (chosenTime + ":00" === newTime) {
    alarmSound.play();
    // alert("WAKE UP!!")
  }
};

setInterval(currentTime, 1000);

document.getElementById("stop-alarm").addEventListener("click", stopAlarm);

function stopAlarm() {
  alarmSound.pause();
}
