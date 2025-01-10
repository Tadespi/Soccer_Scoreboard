let scoreA = 0;
let scoreB = 0;
let timerInterval;
let seconds = 0;

function incrementScore(team) {
  if (team === 'A') {
    scoreA++;
    document.getElementById('scoreA').textContent = scoreA;
  } else {
    scoreB++;
    document.getElementById('scoreB').textContent = scoreB;
  }
}

function decrementScore(team) {
  if (team === 'A' && scoreA > 0) {
    scoreA--;
    document.getElementById('scoreA').textContent = scoreA;
  } else if (team === 'B' && scoreB > 0) {
    scoreB--;
    document.getElementById('scoreB').textContent = scoreB;
  }
}

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      seconds++;
      const minutes = Math.floor(seconds / 60);
      const displaySeconds = seconds % 60;
      document.getElementById('timer').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(displaySeconds).padStart(2, '0')}`;
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  document.getElementById('timer').textContent = '00:00';
}
