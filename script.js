let startTime;
let interval;
let elapsedTime = 0;

function displayTime(time) {
    let minutes = Math.floor(time / 60000);
    let seconds = Math.floor((time % 60000) / 1000);
    let milliseconds = time % 1000;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
}

function updateDisplay() {
    let now = new Date().getTime();
    elapsedTime += now - startTime;
    startTime = now;

    document.getElementById('display').innerText = displayTime(elapsedTime);
}

function toggleStartStop() {
    if (!interval) {
        startTime = new Date().getTime();
        interval = setInterval(updateDisplay, 10);
        document.getElementById('startStopBtn').innerText = 'Stop';
    } else {
        clearInterval(interval);
        interval = null;
        document.getElementById('startStopBtn').innerText = 'Start';
    }
}

function recordLap() {
    let lapTime = displayTime(elapsedTime);
    let lapList = document.getElementById('lapList');
    let lapElement = document.createElement('li');
    lapElement.innerText = lapTime;
    lapList.appendChild(lapElement);
}

function resetTimer() {
    if (interval) {
        toggleStartStop();
    }
    elapsedTime = 0;
    document.getElementById('display').innerText = displayTime(elapsedTime);
    document.getElementById('lapList').innerHTML = '';
}