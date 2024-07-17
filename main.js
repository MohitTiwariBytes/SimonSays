document.addEventListener('DOMContentLoaded', () => {
    const colors = ['green', 'red', 'yellow', 'blue'];
    let sequence = [];
    let playerSequence = [];
    let level = 0;
  
    const greenButton = document.getElementById('green');
    const redButton = document.getElementById('red');
    const yellowButton = document.getElementById('yellow');
    const blueButton = document.getElementById('blue');
    const startButton = document.getElementById('startButton');
    const message = document.getElementById('message');
  
    const buttons = {
      green: greenButton,
      red: redButton,
      yellow: yellowButton,
      blue: blueButton,
    };
  
    function nextSequence() {
      playerSequence = [];
      sequence.push(colors[Math.floor(Math.random() * colors.length)]);
      level++;
      message.textContent = `Level ${level}`;
      playSequence();
    }
  
    function playSequence() {
      let index = 0;
      const interval = setInterval(() => {
        if (index >= sequence.length) {
          clearInterval(interval);
          return;
        }
        const color = sequence[index];
        buttons[color].classList.add('active');
        setTimeout(() => {
          buttons[color].classList.remove('active');
        }, 500);
        index++;
      }, 1000);
    }
  
    function checkSequence(color) {
      playerSequence.push(color);
      const currentIndex = playerSequence.length - 1;
      if (playerSequence[currentIndex] !== sequence[currentIndex]) {
        message.textContent = 'Game Over! Press Start to play again.';
        sequence = [];
        level = 0;
        return;
      }
      if (playerSequence.length === sequence.length) {
        setTimeout(() => {
          nextSequence();
        }, 1000);
      }
    }
  
    startButton.addEventListener('click', () => {
      sequence = [];
      level = 0;
      message.textContent = '';
      nextSequence();
    });
  
    greenButton.addEventListener('click', () => checkSequence('green'));
    redButton.addEventListener('click', () => checkSequence('red'));
    yellowButton.addEventListener('click', () => checkSequence('yellow'));
    blueButton.addEventListener('click', () => checkSequence('blue'));
  });
  