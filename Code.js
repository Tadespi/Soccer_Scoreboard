<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Soccer Scoreboard</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background-color: #f4f4f4;
      margin: 0;
      padding: 20px;
    }

    .scoreboard {
      background: #4CAF50;
      color: white;
      padding: 20px;
      border-radius: 10px;
      display: inline-block;
      margin-top: 50px;
    }

    .team {
      font-size: 24px;
      margin: 10px 0;
    }

    .score {
      font-size: 48px;
      margin: 20px 0;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      margin: 5px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #ddd;
    }

    .timer {
      margin: 20px 0;
      font-size: 24px;
    }
  </style>
</head>
<body>
  <div class="scoreboard">
    <div class="team">Team A</div>
    <div class="score" id="scoreA">0</div>
    <button onclick="incrementScore('A')">+1</button>
    <button onclick="decrementScore('A')">-1</button>

    <div class="team">Team B</div>
    <div class="score" id="scoreB">0</div>
    <button onclick="incrementScore('B')">+1</button>
    <button onclick="decrementScore('B')">-1</button>

    <div class="timer" id="timer">00:00</div>
    <button onclick="startTimer()">Start</button>
    <button onclick="stopTimer()">Stop</button>
    <button onclick="resetTimer()">Reset</button>
  </div>

  <script>
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
  </script>
</body>
</html>