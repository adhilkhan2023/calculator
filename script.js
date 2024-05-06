function add(firstNumber,secondNumber){
    return firstNumber + secondNumber;
}

function subtract(firstNumber,secondNumber){
    return firstNumber - secondNumber;
}

function multiply(firstNumber,secondNumber){
    return firstNumber * secondNumber;
}

function divide(firstNumber,secondNumber){
    return firstNumber / secondNumber;
}

let firstNumber;

let operator;

let secondNumber;

function operate(operator,firstNumber,secondNumber){
    switch (operator) {
        case "+":
            return add(firstNumber,secondNumber);
        case "-":
            return subtract(firstNumber,secondNumber);
        case "*":
            return multiply(firstNumber,secondNumber);
        case "/":
            return divide(firstNumber,secondNumber);
    }
}

const numberButtons = document.querySelectorAll('.number-buttons');

const display = document.querySelector('.display');

let displayValue;

for(i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener('click',(event) => {
        display.textContent += event.target.textContent;
        displayValue = display.textContent;
    })
}