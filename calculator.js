const BACKSPACE_KEYCODE = 8;
const ZERO_KEYCODE = 48;
const NINE_KEYCODE = 57

let result = null;   
let operand = null;
let operator = '';

document.addEventListener('keydown', handleKeydown);
const numButtons = [...document.querySelectorAll('.number')];
for(let button of numButtons ){
    button.addEventListener('click', handleNumClick);
}

function clearCalc(){
    result = null;
    operand = null;
    operator = '';
    updateDisplay(operand);
}

function updateDisplay(val) {
    if(typeof val === 'number')
        val = parseFloat(val.toFixed(5));
    const display = document.querySelector('.display');
    display.textContent = val;
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
    operand = null;
    
    updateDisplay(result);
    if(isNaN(result))
        result = null; 
}

function setOperator(e){
    operator = e.target.textContent;
    if (operand)
        operate()
}
function handleNumClick(e){
    const num  = parseInt(e.target.textContent);
    buildNum(num);
}

function buildNum(num){
    if(!operand){
        operand = num;
    }else{
        operand = operand*10 + num;
    }
    updateDisplay(operand);
}

function deleteNum(){
    if(operand){
        operand = Math.trunc(operand/10);
    }
    updateDisplay(operand);
}

function handleKeydown(e){
    console.log(e, e.keyCode)
    if(e.keyCode >= ZERO_KEYCODE && e.keyCode <= NINE_KEYCODE){
        buildNum(e.keyCode-ZERO_KEYCODE);
    }else if(e.keyCode === BACKSPACE_KEYCODE){
        deleteNum();
    }
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
    return b === 0 ? 'smh, didn\'t your mom teach you not to divide by zero?' : a / b;
}
