const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const flagBtn = document.querySelector("#flagBtn");
const notes = document.querySelector("#notes");
const intialTime = 0;
let startTime = intialTime,
  elapseTime = intialTime,
  currentTime = intialTime,
  flag = intialTime,
  paused = true,
  intervalId,
  hrs = intialTime,
  mins = intialTime,
  secs = intialTime,
  miliseconds = intialTime;
startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapseTime;
    intervalId = setInterval(updateTime, 1);
  }
});
resetBtn.addEventListener("click", () => {
  paused = true;
  clearInterval(intervalId);
  startTime = intialTime;
  elapseTime = intialTime;
  currentTime = intialTime;
  flag = intialTime;
  hrs = intialTime;
  mins = intialTime;
  secs = intialTime;
  miliseconds = intialTime;
  timeDisplay.textContent = `00:00:00:0000`;
});
pauseBtn.addEventListener("click", () => {
  if (paused != true) {
    paused = true;
    elapseTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
});
flagBtn.addEventListener("click", () => {
  const list = document.createElement("li");
  list.textContent += timeDisplay.textContent;
  notes.append(list);
});

function updateTime() {
  elapseTime = Date.now() - startTime;
  miliseconds = Math.floor(elapseTime % 1000);
  secs = Math.floor((elapseTime / 1000) % 60);
  mins = Math.floor((elapseTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapseTime / (1000 * 60 * 60)) % 60);

  miliseconds = formatTime(miliseconds);
  secs = formatTime(secs);
  mins = formatTime(mins);
  hrs = formatTime(hrs);
  timeDisplay.textContent = `${hrs}:${mins}:${secs}:${miliseconds}`;
}

function formatTime(time) {
  let timeString = time.toString();
  if (timeString.length < 2) return `0${time}`;
  return time;
}
