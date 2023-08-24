let displayValue = '';

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (displayValue === '') return;
  displayValue += operator;
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('result').value = displayValue;
}
