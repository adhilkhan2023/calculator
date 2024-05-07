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
    if(secondNumber === 0){
        return "lmao";
    }else{
        return firstNumber / secondNumber;
    }
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

const operatorButtons = document.querySelectorAll('.operator-buttons');

for(i = 0; i < operatorButtons.length; i++){
    operatorButtons[i].addEventListener('click',(event) => {
        if(firstNumber){
            secondNumber = parseInt(displayValue);
            display.textContent = operate(operator,firstNumber,secondNumber);
            displayValue = display.textContent;
            firstNumber = '';
            secondNumber = '';
        }else{
            firstNumber = parseInt(displayValue);
            display.textContent = '';
            displayValue = '';
            operator = event.target.textContent;
        }
    })
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click',() => {
    secondNumber = parseInt(displayValue);
    display.textContent = operate(operator,firstNumber,secondNumber);
    displayValue = display.textContent;
    firstNumber = '';
})

const resetButton = document.querySelector('.reset-button');

resetButton.addEventListener('click', () => {
    display.textContent = '';
    displayValue = '';
    firstNumber = '';
    operator = '';
    secondNumber = '';
})

const deleteButton = document.querySelector('.delete-button');

deleteButton.addEventListener('click', () => {
    let array = display.textContent.split('');
    array.splice(array.length-1,1);
    display.textContent = array.join('');
    displayValue = display.textContent;
})

const dot = document.querySelector('.dot');

dot.addEventListener('click',showDot);

function showDot(event){
    if(display.textContent.includes(event.target.textContent)){
        dot.removeEventListener('click',showDot);
    }else{
        display.textContent += event.target.textContent;
        displayValue = display.textContent;
    }
}