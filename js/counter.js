const counter = document.getElementById("counter");

const day = new Date();

counter.innerHTML = 31 - day.getDate();
