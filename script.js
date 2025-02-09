let num1, num2, operator, correctAnswer, score = 0, questionCount = 0;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    operator = Math.random() < 0.5 ? '+' : '-';
    correctAnswer = operator === '+' ? num1 + num2 : num1 - num2;

    document.getElementById('question').textContent = `${num1} ${operator} ${num2}`;
    generateOptions();
}

function generateOptions() {
    const options = [];
    const correctOptionIndex = Math.floor(Math.random() * 4);
    for (let i = 0; i < 4; i++) {
        if (i === correctOptionIndex) {
            options.push(correctAnswer);
        } else {
            let wrongAnswer;
            do {
                wrongAnswer = correctAnswer + Math.floor(Math.random() * 10) - 5;
            } while (wrongAnswer === correctAnswer || options.includes(wrongAnswer));
            options.push(wrongAnswer);
        }
    }

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === correctAnswer) {
        score++;
    }
    questionCount++;
    if (questionCount < 10) {
        generateQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let message;
    if (score <= 4) {
        message = 'Reyndu aftur';
    } else if (score <= 7) {
        message = 'Þetta gekk frekar vel';
    } else {
        message = 'Þetta gekk mjög vel';
    }
    document.getElementById('result').textContent = `Þú fékkst ${score}/10. ${message}`;
    document.getElementById('game').style.display = 'none';
    document.getElementById('restart').style.display = 'block';
}

function startGame() {
    score = 0;
    questionCount = 0;
    document.getElementById('game').style.display = 'block';
    document.getElementById('result').textContent = '';
    document.getElementById('restart').style.display = 'none';
    generateQuestion();
}

window.onload = startGame;
