const realClock = document.querySelector("#now span");

function getClock() {
  let date = new Date();
  const dataHours = String(date.getHours()).padStart(2, 0);
  const dataMinutes = String(date.getMinutes()).padStart(2, 0);
  const dataSeconds = String(date.getSeconds()).padStart(2, 0);
  realClock.innerText = `${dataHours}:${dataMinutes}:${dataSeconds}`;
}

getClock();
setInterval(getClock, 1000);
