let time = document.getElementById("currentUTCTime");
let day = document.getElementById("currentDayOfTheWeek");

setInterval(() =>{
    let n = new Date();
    
    time.innerHTML = n.toLocaleTimeString();
},1000);

let w = new Date();
day.innerHTML = w.toLocaleDateString();
