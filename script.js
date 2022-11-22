let currentTime = new Date().toLocaleTimeString();
//time
let timeEl = document.querySelector("#time")
timeEl.textContent = currentTime;


window.onload = function () {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];;
    // let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date();
    let dateEl = document.querySelector("#date")

    dateEl.textContent = months[date.getMonth()] + ' ' + new Date().getDate() + ", " + new Date().getFullYear();
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
