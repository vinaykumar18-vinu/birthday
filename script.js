function checkAnswer() {
    const answer = document.getElementById('answer').value.toLowerCase().trim();
    if (answer === 'keyboard') {
        document.getElementById('riddle').style.display = 'none';
        document.getElementById('message').style.display = 'block';
        createConfetti();

    } else {
        alert('Wrong answer! Try again.');
        document.getElementById('hint').style.display = 'block';
    }
}

function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
    for(let i = 0; i < 150; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
        document.body.appendChild(confetti);
    }
}