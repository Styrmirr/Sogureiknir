let num1, num2, operator;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    operator = Math.random() < 0.5 ? '+' : '-';
    document.getElementById('question').textContent = `${num1} ${operator} ${num2}`;
}

function checkAnswer() {
    const answer = parseInt(document.getElementById('answer').value);
    const correctAnswer = operator === '+' ? num1 + num2 : num1 - num2;
    const result = answer === correctAnswer ? 'Correct!' : 'Try again!';
    document.getElementById('result').textContent = result;
    generateQuestion();
}

window.onload = generateQuestion;
