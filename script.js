function timee(){
const dates = new Date();
const times = dates.toLocaleTimeString().split(' ')[0].split(':') ;
// let ampm = times[0] >= 12 ? 'PM' : 'AM';
let ampm = new Date().getHours() >= 12 ? 'PM' : 'AM';
let exactTime=times[0] + ':' + times[1] +" "+ampm;
let timeEl = document.querySelector("#time")
timeEl.textContent = exactTime;
}
setInterval(timee, 1000);

let timeEl = document.querySelector("#time")
timeEl.onmouseover = function() {timeChange()};
function timeChange()  {
    const d = new Date();
    let minutes = d.getHours() + ":" + d.getMinutes()
    let timeEl = document.querySelector("#time")
     timeEl.textContent = minutes;
  }


window.onload = function () {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date();
    let dateEl = document.querySelector("#date")

    dateEl.textContent = days[date.getDay()]  + ' ' + months[date.getMonth()]  + ' ' + new Date().getDate() + ", " + new Date().getFullYear();
    console.log(dateEl.textContent)
};
let element = document.body;
let elemnetId = document.querySelector("#mainId")
let sub1El = document.querySelector(".sub-mainOne")
let sub2El = document.querySelector(".sub-mainTwo")

function dark() {
    element.classList.add("dark");
    elemnetId.classList.add("dark");
    sub1El.classList.add("dark");
    sub2El.classList.add("dark")
}
function light() {
    element.classList.remove("dark");
    elemnetId.classList.remove("dark");
    sub1El.classList.remove("dark")
    sub2El.classList.remove("dark")
}
function auto() {
    let myDate = new Date();
    let hrs = myDate.getHours();
    if (hrs >= 6 && hrs < 18)
        light()
    else if (hrs >= 17 && hrs <= 24)
        dark()
}
