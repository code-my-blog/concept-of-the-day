function generateRandomNumber(digits) {
  return Math.floor(Math.random() * Math.pow(10, digits));
}

function generateProblem() {
  // Choose a random operation
  //const operations = ['+', '-', '*', '/'];
  //const operator = operations[Math.floor(Math.random() * operations.length)];
  const operationSelect = document.getElementById('operation');
  const operator = operationSelect.value;
  
  //const numDigitsSelect = document.getElementById('numDigits');
  //const digits = parseInt(numDigitsSelect.value);

  // Generate random numbers based on operator
  let num1, num2;
  if (operator === '/') {
    // Ensure division results in a whole number
    num2 = generateRandomNumber(1, 3);
    num1 = num2 * generateRandomNumber(1, 3);
  } else {
    const digits = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3 digits
    num1 = generateRandomNumber(digits);
    num2 = generateRandomNumber(digits);
  }  

  const problem = `${num1} ${operator} ${num2}`;
  const problemElement = document.getElementById('problem');
  problemElement.innerHTML = problem;

  problemData = {
    problem: problem,
    answer: eval(problem)
  };
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('userAnswer').value);
  const resultElement = document.getElementById('result');

  const nextProblem = document.getElementById('buttonNextProblem');

  if (userAnswer === problemData.answer) {
    resultElement.textContent = "Correct!";
    nextProblem.style.display = 'block';
    nextProblem.style.alignSelf = 'center'
    
  } else {
    resultElement.textContent = "Incorrect. The correct answer is " + problemData.answer;
    nextProblem.style.display = 'none';
  }
}
