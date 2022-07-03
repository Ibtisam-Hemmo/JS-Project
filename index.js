
const currentTime = document.querySelector("h1"),
content = document.querySelector(".content"),
select = document.querySelectorAll("select"),
button = document.querySelector("button");

let alarmTime, isAlarmSet, ringtone = new Audio("./ringtone.mp3");

setInterval(() => {
    let date = new Date(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    seconds = date.getSeconds(),

    ampm = "AM";
    if(hour >= 12) {
        hour = hour - 12;
        ampm = "PM";
    }
    
    hour = hour == 0 ? hour = 12 : hour;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    currentTime.innerText = `${hour}:${minute}:${seconds} ${ampm}`;

    if (alarmTime === `${hour}:${minute}:${seconds} ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;
    }
});


function time() {
    select[0].innerHTML = select[1].innerHTML = select[2].innerHTML = select[3].innerHTML = "";

    // For setting Hour time
    select[0].innerHTML = `<option value="Hour" selected disabled hidden> Hour </option>`;
    for (let i = 12; i > 0; i--) {
        i = i < 10 ? `0${i}` : i;
        let option = `<option value="${i}">${i}</option>`;
        select[0].firstElementChild.insertAdjacentHTML("afterend", option);
    }
    
    // For setting Minutes 
    select[1].innerHTML = `<option value="Min" selected disabled hidden> Minute </option>`;
    for (let i = 59; i >= 0; i--) {
        i = i < 10 ? `0${i}` : i;
        let option = `<option value="${i}">${i}</option>`;
        select[1].firstElementChild.insertAdjacentHTML("afterend", option);
    }
    
    // For setting Seconds 
    select[2].innerHTML = `<option value="Sec" selected disabled hidden> Second </option>`;
    for (let i = 59; i >= 0; i--) {
        i = i < 10 ? `0${i}` : i;
        let option = `<option value="${i}">${i}</option>`;
        select[2].firstElementChild.insertAdjacentHTML("afterend", option);
    }

    // For setting ampm 
    select[3].innerHTML = `<option value="AM/PM" selected disabled hidden>AM/PM</option>`;
    for (let i = 2; i > 0; i--) {
        let ampm = i == 1 ? "AM" : "PM";
        let option = `<option value="${ampm}">${ampm}</option>`;
        select[3].firstElementChild.insertAdjacentHTML("afterend", option);
    }
}

time(); //for executing.

function setAlarm() {

    if (isAlarmSet) {
        alarmTime = "";
        ringtone.pause();
        content.classList.remove("disable");
        button.innerText = "Set Alarm";
        isAlarmSet = false;
        return time();
    }

    let time = `${select[0].value}:${select[1].value}:${select[2].value} ${select[3].value}`;
    if (time.includes("Hour") || time.includes("Min") || time.includes("Sec") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime = time;
    isAlarmSet = true;
    content.classList.add("disable");
    button.innerText = "Clear Alarm";
}

button.addEventListener("click", setAlarm);


// const alarms = document.querySelector("#alarm-list");
// function showAlarm(newAlarm){
//     const list = `<li class="alarm-list"> <span class="alarm-list"> ${newAlarm} </span> </li>`; 
//     alarms.innerHTML += list;
// }


// let fakeAlarms = [];

// const userInput = document.querySelector("#userInput");
// userInput.addEventListener("set" , function(e) {
//     e.preventDefault();

//     const hours = userInput.hour.value;
//     const minutes = userInput.min.value;
//     const state = userInput.state.value;
//     const seconds = userInput.sec.value;

//     const newAlarm  = `${hours}:${minutes}:${seconds}:${state}`;
//     if(isNaN(newAlarm)){
//         if(!fakeAlarms.includes(newAlarm)){
//             fakeAlarms.push(newAlarm);
//             showAlarm(newAlarm);
//         userInput.reset();
//         }else{
//             alert(`Alarm for ${newAlarm} is Already Added`);
//         }
//     }
//     else{
//         alert("Invalid Time!");
//     }
// });
