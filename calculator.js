let result = null; //refactor to use null and check for it's existence first.  
let operand = null;
let operator = '';

const numButtons = [...document.querySelectorAll('.number')];
for(let button of numButtons ){
    button.addEventListener('click', buildNum);
}

function clearCalc(){
    result = null;
    operand = null;
    operator = '';
    updateDisplay(operand);
}

function operate() {

    if(!result){
        result = operand;
    }else if(operator === '+') {
        result = add(result, operand);
    }else if (operator === '-'){
        result = subtract(result, operand);
    }else if (operator === '*') {
        result = multiply(result, operand);
    }else if (operator === '/'){
        result = divide(result, operand);
        
    }
    updateDisplay(result);
    if(isNaN(result)){
        result = null;       
    }
    operand = null;
}

function setOperator(e){
    operator = e.target.textContent;
    if (operand){
        operate()
    }
}

function updateDisplay(val) {
    const display = document.querySelector('.display');
    display.textContent = val;
}

function buildNum(e){
    const num  = parseInt(e.target.textContent);
    if(!operand){
        operand = num;
    }else{
        operand = operand*10 + num;
    }
    updateDisplay(operand);
}
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0) {
        return 'smh, didn\'t your mom teach you not to divide by zero?';
    }
    return a / b;
}
